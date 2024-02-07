import React, { useContext, useState } from "react";
import {
  CustumButtonFilled,
  CustomButtonOutline,
} from "../Custume Compnent/CustumElememt";
import { AiOutlineMenu, AiFillHome, AiOutlineClose } from "react-icons/ai";
// import { FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { Cart } from "../../Context";

function NavBar() {
  const { cart, setCart } = useContext(Cart);
  let [isOpen, setIsOpen] = useState(false);
  const Links = [
    { name: "Home", path: "/", id: "1" },
    { name: "Menu", path: "/menu", id: "2" },
    { name: "About Us", path: "/aboutus", id: "3" },
    { name: "Contact Us", path: "/contactus", id: "4" },
  ];
  return (
    <div className=" w-full min-w-60 fixed  flex justify-between items-center px-7 py-2 bg-white z-20">
      <div className="font-poppins font-bold">Broccoli</div>

      <ul
        className={`sm:flex pl-8 sm:pl-0 sm:items-center sm:pb-0  absolute  sm:static sm:gap-4 
        sm:z-auto  z-[-1] sm: left-0  sm:w-auto font-poppins font-semibold text-gray-600 
        w-full  transition-all duration-700 ease-in ${
          isOpen ? "top-[50px]" : "top-[-250px]"
        }
         bg-white    `}
      >
        {Links.map((item) => {
          return (
            <li
              className="py-2 animation cursor-pointer"
              key={item.id}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-4 items-center justify-center">
        <Link to="/cart">
          <div className="relative cursor-pointer">
            <span className="bg-yellow-100 w-3 h-3 rounded-lg text-[10px] font-bold text-gray-600 absolute right-0 z-10 flex items-center justify-center p-1 ">
              {cart.length}
            </span>
            <IoCartOutline className="h-7 w-7 " />
          </div>
        </Link>
        <div className="sm:flex gap-3 hidden">
          <CustumButtonFilled>Login</CustumButtonFilled>
          <CustomButtonOutline isClicked={false}>SignUp</CustomButtonOutline>
        </div>

        <div
          className="sm:hidden overflow-auto"
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
