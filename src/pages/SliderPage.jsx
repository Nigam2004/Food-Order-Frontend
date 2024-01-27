import React from "react";
import Carousel from "../components/Carousel";

export default function SliderPage() {
  return (
    <>
      <div className="w-3/4 mx-auto h-[600px] md:h-[700px] mb-10 md:mb-5">
        <div className="text-xs text-left  font-poppins text-black font-semibold rounded md:text-2xl lg:text-4xl">
          Our Popular Dishes
        </div>
        <Carousel />
      </div>
    </>
  );
}
