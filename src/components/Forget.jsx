import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Forget() {
  const [value, setValue] = useState();
  const fetchPost = async (data) => {
    try {
      const fetchData = await fetch(
        "http://localhost:4000/user/forget-password",
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
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div class="min-h-screen bg-gray-100 flex items-center justify-center font-poppins">
        <div class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full shadow-orange-400 border-t-4 border-orange-500">
          <h1 class="text-center text-2xl font-bold mb-6">Forgot Password</h1>
          <div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="email">
                Email Address
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <button
              class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
              onClick={() => {
                fetchPost(value);
              }}
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
