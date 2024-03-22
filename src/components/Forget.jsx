import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Forget() {
  const [value, setValue] = useState();
  const notify = (msg) => {
    toast.success(`${msg}!`, {
      position: "top-center",
    });
  };
  const fetchPost = async (data) => {
    try {
      const fetchData = await fetch(
        "http://localhost:5000/user/forget-password",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data }),
        }
      );
      const res = await fetchData.json();
      if (res.result) {
        notify(res.message);
        setValue("");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center font-poppins">
        <div
          className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full shadow-orange-400 border-t-4 border-orange-500"
          data-aos="zoom-in"
        >
          <h1 className="text-center text-2xl font-bold mb-6">
            Forgot Password
          </h1>
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="email">
                Email Address
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
              onClick={() => {
                fetchPost(value);
              }}
            >
              Reset Password
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
