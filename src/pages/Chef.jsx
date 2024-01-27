import React from "react";
import chef from "../assets/chef1.png";
import { GrCafeteria } from "react-icons/gr";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbPaperBag } from "react-icons/tb";

export default function Chef() {
  return (
    <>
      <div className="container  mx-auto  flex flex-col items-center justify-around md:flex-row  h-[400px] gap-[1rem] md:gap-5 md:h-[450px] lg:h-[650px]  ">
        <div className="left w-2/3 p-6">
          <div>
            <img src={chef} alt="chef" />
          </div>
        </div>
        <div className="right w-full md:w-1/3 px-4">
          <h1 className="text-xl font-bold font-poppins md:text-4xl ">
            We provide best Service For Our Customer
          </h1>
          <p className="text-xs md:text-lg lg:text-xl ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos
            alias ipsam tenetur, illum a!
          </p>
          <div className="flex flex-wrap mt-3">
            <div className="w-1/2 mt-2 flex gap-2">
              <IoFastFoodOutline size={20} />
              <p className="text-xs md:text-sm font-poppins font-semibold ">
                Quality Food
              </p>
            </div>
            <div className="w-1/2 mt-2 flex gap-2">
              <MdOutlineDeliveryDining size={20} />
              <p className="text-xs md:text-sm font-poppins font-semibold ">
                Home-Delivery
              </p>
            </div>
            <div className="w-1/2 mt-2 flex gap-2">
              <GrCafeteria size={20} />{" "}
              <p className="text-xs md:text-sm font-poppins font-semibold ">
                Pre-Booking
              </p>
            </div>
            <div className="w-1/2 mt-2 flex gap-2">
              <TbPaperBag size={20} />
              <p className="text-xs md:text-sm font-poppins font-semibold ">
                Easy-to-Order
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
