import React, { useContext } from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <>
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">100 ₹</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">30 ₹</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">130 ₹</p>
            <p className="text-sm text-gray-700">including GST</p>
          </div>
        </div>
        <Link to="/sucess">
          <button className="mt-6 w-full rounded-md bg-orange-500 py-1.5 font-medium text-blue-50 hover:bg-orange-600">
            Check out
          </button>
        </Link>
      </div>
    </>
  );
}
