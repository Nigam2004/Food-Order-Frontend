import React, { useContext, useState } from "react";
import login from "../assets/Login.jpg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Cart } from "../../Context";
export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const { logedIn, setLogedIn } = useContext(Cart);
  const navigate = useNavigate();

  const loginHandler = async (payload) => {
    try {
      const result = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const message = await result.json();
      if (message.login) {
        navigate("/");
        setLogedIn(message.login);
      }
      setData({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="py-16 " data-aos="zoom-in-down">
        <div className="flex bg-white rounded-lg min-h-screen items-center justify-center shadow-2xl shadow-orange-400 overflow-hidden mx-auto max-w-sm lg:max-w-4xl border-t-4 border-orange-500">
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
              <Link
                to="/login"
                className="text-xs text-center text-gray-500 uppercase"
              >
                Login with email
              </Link>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                value={data.email}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <Link to="/login/forget" className="text-xs text-gray-500">
                  Forget Password?
                </Link>
              </div>
              <input
                value={data.password}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
            </div>
            <div className="mt-8">
              <button
                onClick={() => {
                  loginHandler(data);
                }}
                className="bg-orange-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-orange-700"
              >
                Login
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link to="/signup" className="text-xs text-gray-500 uppercase">
                or sign up
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
