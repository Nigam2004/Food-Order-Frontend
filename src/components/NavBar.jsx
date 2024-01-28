import React, { useState } from "react";
import {
  CustumButtonFilled,
  CustomButtonOutline,
} from "../Custume Compnent/CustumElememt";
import { AiOutlineMenu, AiFillHome, AiOutlineClose } from "react-icons/ai";
// import { FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  let [isOpen, setIsOpen] = useState(false);
  const Links = [
    { name: "Home", path: "/", id: "1" },
    { name: "Menu", path: "/menu", id: "2" },
    { name: "Reservation", path: "/reservation", id: "3" },
    { name: "Blog", path: "/blog", id: 4 },
    { name: "About Us", path: "/aboutus", id: 5 },
    { name: "Contact Us", path: "/contactus", id: 6 },
  ];
  return (
    <div className="  flex justify-between items-center px-7 py-2 ">
      <div>Logoo</div>

      <ul
        className={`sm:flex pl-8 sm:pl-0 sm:items-center sm:pb-0  absolute  sm:static sm:gap-4 
        sm:z-auto  z-[-1] sm: left-0  sm:w-auto transition-all font-semibold text-gray-600 
        w-full   duration-700 ease-in ${isOpen ? "top-[76px]" : "top-[-130px]"}
             `}
      >
        {Links.map((item) => {
          return (
            <li className="py-2 animation cursor-pointer" key={item.id}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-4 items-center justify-center">
        <div className="relative cursor-pointer">
          <span className="bg-yellow-100 w-3 h-3 rounded-lg text-[10px] font-bold text-gray-600 absolute right-0 z-10 flex items-center justify-center p-1 ">
            2
          </span>
          <IoCartOutline className="h-7 w-7 " />
        </div>
        <CustumButtonFilled>Login</CustumButtonFilled>
        <CustomButtonOutline>SignUp</CustomButtonOutline>
        <div
          className="sm:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <AiOutlineClose className="h-7 w-7 t"></AiOutlineClose>
          ) : (
            <AiOutlineMenu className="h-7 w-7 "></AiOutlineMenu>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
