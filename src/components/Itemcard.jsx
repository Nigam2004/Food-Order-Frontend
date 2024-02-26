import React, { useContext } from "react";
import { CustomButtonOutline } from "../Custume Compnent/CustumElememt";
import { Cart } from "../../Context";

function Itemcard({ item }) {
  const { cart, setCart } = useContext(Cart);

  return (
    <div className="bg-white text-black rounded-xl cursor-pointer duration-500 hover:shadow-xl min-w-60 sm:w-80">
      <div className=" p-3 bg-[#eee8d7] rounded-lg flex justify-center items-center  ">
        <img
          src="https://res.cloudinary.com/dbgmzkuuh/image/upload/v1706888466/xukny7ro7pk6ubbnbmmq.avif"
          alt="burger"
          className="h-44 w-44 rounded-full"
        />
      </div>
      <div className="flex justify-center items-center flex-col p-3 gap-2 ">
        <h1 className="text-3xl font-poppins font-semibold">
          {item.food_name}
        </h1>
        <p>⭐{item.review}(545 reviews)</p>
        <h1 className="text-2xl font-poppins text-orange-500 font-medium ">
          ${item.price}
        </h1>
        <p className="text-xs font-normal text-center font-poppins sm:text-base text-gray-500">
          {item.description}
        </p>
        {cart.includes(item) ? (
          <CustomButtonOutline
            onClick={() => {
              setCart(cart.filter((c) => c.food_name !== item.food_name));
            }}
          >
            Remove From cart
          </CustomButtonOutline>
        ) : (
          <CustomButtonOutline
            onClick={() => {
              setCart([...cart, item]);
            }}
          >
            Add to cart
          </CustomButtonOutline>
        )}
      </div>
    </div>
  );
}

export default Itemcard;
