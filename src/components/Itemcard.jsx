import React from "react";
import { CustomButtonOutline } from "../Custume Compnent/CustumElememt";

function Itemcard() {
  return (
    <div className="bg-white text-black rounded-xl cursor-pointer duration-500 hover:shadow-xl min-w-60 sm:w-80">
      <div className=" p-3 bg-[#eee8d7] rounded-lg flex justify-center items-center  ">
        <img
          src="https://res.cloudinary.com/dbgmzkuuh/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1706701047/imvdczegssqnnpf8gtf3.jpg"
          alt="burger"
          className="h-44 w-44 rounded-full"
        />
      </div>
      <div className="flex justify-center items-center flex-col p-3 gap-2 ">
        <h1 className="text-3xl font-poppins font-semibold">Burger</h1>
        <p>⭐4.5(545 reviews)</p>
        <h1 className="text-2xl font-poppins text-orange-500 font-medium ">
          $20
        </h1>
        <p className="text-xs font-normal text-center font-poppins sm:text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
        </p>

        <CustomButtonOutline>Add to cart</CustomButtonOutline>
      </div>
    </div>
  );
}

export default Itemcard;
