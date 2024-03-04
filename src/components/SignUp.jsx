import React, { useState } from "react";
import login from "../assets/Login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SignUp() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const notify = () => {
    toast.success(" Registered succesfully !", {
      position: "top-center",
    });
  };
  const signUpHandler = async (payload) => {
    try {
      const signUp = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let res = await signUp.json();
      if (res.result) {
        notify();
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      }

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="min-h-screen rounded-md ">
        <div className="mx-auto ">
          <div className="flex items-center justify-center px-6 py-[9rem]">
            <div
              className="w-full xl:w-3/4 lg:w-11/12 flex border-t-4 shadow-2xl shadow-orange-500 border-orange-500 rounded-md"
              data-aos="zoom-in-up"
            >
              <div className="w-full h-auto bg-white  hidden lg:block lg:w-5/12 bg-cover rounded-md">
                <img src={login} alt="" className="rounded-md" />
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
                        value={data.firstName}
                        onChange={(e) => {
                          setData({ ...data, firstName: e.target.value });
                        }}
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
                        value={data.lastName}
                        onChange={(e) => {
                          setData({ ...data, lastName: e.target.value });
                        }}
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
                      value={data.email}
                      onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                      }}
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
                        value={data.password}
                        onChange={(e) => {
                          setData({ ...data, password: e.target.value });
                        }}
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
                        value={data.confirmPassword}
                        onChange={(e) => {
                          setData({ ...data, confirmPassword: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-orange-400 duration-300 rounded-full hover:bg-orange-700  focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => {
                        signUpHandler(data);
                      }}
                    >
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <Link
                      to="/login/forget"
                      className="inline-block text-sm text-blue-500  align-baseline hover:text-blue-800"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link
                      to="/login"
                      className="inline-block text-sm text-blue-500  align-baseline hover:text-blue-800"
                    >
                      Already have an account? Login!
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
