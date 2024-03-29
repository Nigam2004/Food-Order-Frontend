import React, { useState, useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Cart } from "../../Context";

export default function CartItem({ food_name, imageUrl, price, _id }) {
  const { cart, setCart } = useContext(Cart);
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={imageUrl}
          alt="product-image"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{food_name}</h2>
            <p className="mt-1 text-xs text-gray-700"> Per Plate: {price} ₹</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-orange-500 hover:text-blue-50"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </span>
              <div
                className="h-8 w-8 border bg-white text-center text-xs outline-none flex items-center justify-center"
                type="number"
                value="2"
                min="1"
              >
                {count}
              </div>
              <span
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-500 hover:text-blue-50"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-lg font-semibold">{price * count} ₹</p>
              <span
                onClick={() => {
                  setCart(cart.filter((c) => c._id !== _id));
                }}
              >
                <MdDelete
                  size="20"
                  className="text-red-700 cursor-pointer hover:text-black "
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
