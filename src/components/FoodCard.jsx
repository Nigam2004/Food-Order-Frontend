import React from "react";

function FoodCard({ data }) {
  return (
    <div className="bg-white text-black rounded-xl cursor-pointer hover:scale-105 duration-500 ease-in-out hover:shadow-xl">
      <div className="h-56  bg-[#eee8d7] rounded-lg flex justify-center items-center  ">
        <img
          src={data.img}
          alt={data.name}
          className="h-44 w-44 rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-5 p-6">
        <p className="text-xs text-[#fdc868] font-bold font-poppins md:text-xl lg:text-2xl">
          {data.name}
        </p>
        <p className="text-xs font-semibold text-center font-poppins md:text-base lg:text-lg">
          {data.review}{" "}
        </p>
      </div>
    </div>
  );
}

export default FoodCard;
