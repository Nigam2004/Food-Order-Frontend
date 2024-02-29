import React from "react";
import login from "../assets/Login.jpg";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="min-h-screen bg-gray-400 ">
        <div className="mx-auto ">
          <div className="flex items-center justify-center px-6 py-[9rem]">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div className="w-full h-auto bg-white  hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
                <img src={login} alt="" />
              </div>
              <div className="w-full lg:w-7/12 bg-white  p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center text-gray-800 ">
                  Create an Account!
                </h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white  rounded">
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 "
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 "
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 "
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 "
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 "
                        htmlFor="c_password"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700  focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <NavLink
                      to="/forget"
                      className="inline-block text-sm text-blue-500  align-baseline hover:text-blue-800"
                    >
                      Forgot Password?
                    </NavLink>
                  </div>
                  <div className="text-center">
                    <NavLink
                      to="/login"
                      className="inline-block text-sm text-blue-500  align-baseline hover:text-blue-800"
                    >
                      Already have an account? Login!
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
