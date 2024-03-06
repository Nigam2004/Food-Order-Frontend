import React from "react";
import image from "../assets/Sucess.gif";
import { Link } from "react-router-dom";

export default function Sucess() {
  return (
    <>
      <div className="bg-[#f7f7f7] h-screen">
        <div className="bg-[#f7f7f7] p-6  md:mx-auto">
          <img
            src={image}
            alt="Sucess"
            className="text-green-600 mx-auto my-6"
          />
          <div className="text-center">
            <h3 className="md:text-3xl text-base text-gray-900 font-semibold text-center">
              Order Sucessful !
            </h3>
            <p className="text-gray-600 my-2">
              Thank you for completing your order.
            </p>
            <p> We will get touch with you. </p>
            <div className="py-10 text-center">
              <Link
                to="/"
                className="px-12 bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
