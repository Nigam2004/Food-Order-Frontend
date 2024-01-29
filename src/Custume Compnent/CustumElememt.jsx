import React, { Children } from "react";

export function CustumButtonFilled({ children, handler }) {
  return (
    <div className=" border-2 border-orange-500 bg-orange-500 py-2 px-4 text-[9px] sm:text-[15px]  rounded-md text-yellow-50 duration-300 drop-shadow-lg shadow-orange-500 cursor-pointer w-fit font-poppins hover:bg-transparent hover:text-gray-700 ">
      {children}
    </div>
  );
}

export function CustomButtonOutline({ children, handler }) {
  return (
    <div
      className={`border-2 py-2 px-4  rounded-md border-orange-500  duration-300 drop-shadow-lg shadow-orange-500/50 cursor-pointer  w-fit text-center font-poppins text-gray-700 hover:bg-orange-500 hover:text-yellow-50 text-[9px] sm:text-[15px]`}
    >
      {children}
    </div>
  );
}

export function Container({ children }) {
  return <div className="pt-16 bg-white min-w-60 sm:w-auto">{children}</div>;
}
