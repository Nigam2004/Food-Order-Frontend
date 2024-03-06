import React from "react";
import error from "../assets/Error.gif";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="min-h-screen flex flex-col justify-center items-center">
          <img src={error} alt="Logo" className="mb-8 h-15 md:h-30 " />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-orange-700 mb-4">
            Site is under maintenance
          </h1>
          <p className="text-center text-orange-500 text-lg md:text-xl lg:text-2xl mb-8">
            We're working hard to improve the user experience. Stay tuned!
          </p>
          <div className="flex  space-x-4">
            <Link
              to="/contactus"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded"
            >
              Contact Us
            </Link>
            <Link
              to="/"
              className="border-2 border-orange-800 text-black font-bold py-3 px-6 rounded"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
