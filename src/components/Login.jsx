import React from "react";
import login from "../assets/Login.jpg";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="py-16 ">
        <div className="flex bg-white rounded-lg min-h-screen items-center justify-center shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2">
            <img
              src={login}
              alt="Contact Image"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              Broucoli Restrurant
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>

            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <NavLink
                to="/login"
                className="text-xs text-center text-gray-500 uppercase"
              >
                Login with email
              </NavLink>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <NavLink to="/forget" className="text-xs text-gray-500">
                  Forget Password?
                </NavLink>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
              />
            </div>
            <div className="mt-8">
              <button className="bg-orange-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-orange-700">
                Login
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <NavLink to="/signup" className="text-xs text-gray-500 uppercase">
                or sign up
              </NavLink>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
