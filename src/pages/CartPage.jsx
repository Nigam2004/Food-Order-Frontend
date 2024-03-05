import React, { useContext } from "react";
import { Container } from "../Custume Compnent/CustumElememt";
import { Cart } from "../../Context";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";

const CartPage = () => {
  const { cart, setCart } = useContext(Cart);
  console.log(cart);
  return (
    <Container>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cart.map((item, index) => {
              return <CartItem key={index} {...item} />;
            })}
          </div>
          <Checkout />
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
