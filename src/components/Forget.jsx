import React from "react";
import { NavLink } from "react-router-dom";

export default function Forget() {
  return (
    <div class="min-h-screen bg-gray-100 flex items-center justify-center font-poppins">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h1 class="text-center text-2xl font-bold mb-6">Forgot Password</h1>
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Email Address
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <button
            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
