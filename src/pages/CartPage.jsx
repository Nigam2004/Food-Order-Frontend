import React, { useContext } from "react";
import { Container } from "../Custume Compnent/CustumElememt";
import { Cart } from "../../Context";

const CartPage = () => {
  const { cart, setCart } = useContext(Cart);
  console.log(cart);
  return (
    <Container>
      <div>
        {cart.map((item, index) => {
          return (
            <h1 key={index} className="text-red-700 text-2xl font-bold">
              {item.food_name}
            </h1>
          );
        })}
      </div>
    </Container>
  );
};

export default CartPage;
