import React, { useState } from "react";
import { Container } from "../Custume Compnent/CustumElememt";
import { useParams } from "react-router-dom";

function ResetPassword() {
  const [show, isShow] = useState({ password: false, ConfirmPassword: false });
  let data = useParams();
  console.log(data);
  return (
    <Container>
      <div className="flex justify-center items-center bg-gray-100  min-h-[90vh]">
        <div className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full shadow-orange-400 border-t-4 border-orange-500">
          <div className="">
            <h1 className="text-center text-2xl font-bold mb-6">
              Change Your Password
            </h1>
            <p className="text-center text-xl  text-gray-500 ">
              Enter a new password below to change your password
            </p>
          </div>
          <form action="" enctype="" method="POST">
            <div className="">
              <label
                for="newPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                New Password:
              </label>
              <div className=" relative">
                <input
                  className="appearance-none border shadow rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type={`${show.password ? "text" : "password"}`}
                  placeholder="Password"
                  name="Password"
                />
                <img
                  className="w-7 absolute top-[10%] right-2"
                  src={`${
                    show.password
                      ? "https://res.cloudinary.com/dbgmzkuuh/image/upload/v1709214330/sojotbbgh3m4chgm1xqp.png"
                      : " https://res.cloudinary.com/dbgmzkuuh/image/upload/v1709212460/kkewp2hcgvdtey2rstzn.png"
                  }`}
                  alt="Show Password"
                  onClick={() => {
                    isShow({ ...show, password: !show.password });
                  }}
                />
              </div>
            </div>
            <div className="mb-2">
              <label
                for="confirmPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                Confirm Password:
              </label>
              <div className="relative">
                <input
                  className="appearance-none border shadow rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type={`${show.ConfirmPassword ? "text" : "password"}`}
                  placeholder="Confirm your password"
                  name=" ConfirmPassword"
                />
                <img
                  className="w-7 absolute top-[10%] right-2"
                  src={`${
                    show.ConfirmPassword
                      ? "https://res.cloudinary.com/dbgmzkuuh/image/upload/v1709214330/sojotbbgh3m4chgm1xqp.png"
                      : " https://res.cloudinary.com/dbgmzkuuh/image/upload/v1709212460/kkewp2hcgvdtey2rstzn.png"
                  }`}
                  alt="Show Password"
                  onClick={() => {
                    isShow({ ...show, ConfirmPassword: !show.ConfirmPassword });
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default ResetPassword;
//
//
