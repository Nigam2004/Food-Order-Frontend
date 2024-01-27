import React, { Children } from "react";

export function CustumButtonFilled({ children, handler }) {
  return (
    <div className=" border-2 border-orange-500 bg-orange-500 py-2 px-4  rounded-md text-yellow-50 drop-shadow-lg shadow-orange-500 cursor-pointer">
      {children}
    </div>
  );
}

export function CustomButtonOutline({ children, handler }) {
  return (
    <div className="border-2 border-black py-2 px-4  rounded-md hover:border-orange-500 ease-in-out duration-300 hover:drop-shadow-lg shadow-orange-500/50 cursor-pointer">
      {children}
    </div>
  );
}

export function Container({ children }) {
  return <div className="container  flex">{children}</div>;
}
