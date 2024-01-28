import React, { useEffect } from "react";
import img1 from "../assets/Burger.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from "../components/Carousel";
import Chef from "./Chef";
import FoodCard from "../components/FoodCard";
import { Fragment } from "react";
import SliderApi from "../components/SliderApi";
import { CustumButtonFilled } from "../Custume Compnent/CustumElememt";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container  mx-auto flex items-center justify-between h-[350px] gap-[1rem] md:gap-10 md:h-[450px] lg:h-[750px] ">
        <div className="w-2/3  p-6" data-aos="fade-right">
          <h1 className=" text-base font-poppins font-bold mb-2 ">
            Welcome to 🍔
          </h1>
          <p className=" text-base font-poppins font-bold mb-4 md:text-2xl lg:text-4xl">
            The Broccoli Resturant <br />& Enjoy The Food
          </p>
          <p className=" text-xs font-poppins mb-2 text-justify md:text-xl lg:text-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            non beatae, enim expedita natus molestias optio nobis dolor possimus
            odio?
          </p>
          <CustumButtonFilled>Book Your Table</CustumButtonFilled>
        </div>
        <div className="w-1/3" data-aos="fade-left">
          <img
            src={img1}
            alt="Your Image"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
      <div className="w-3/4 mx-auto sm:h-[550px] md:h-[580px] mb-10 md:mb-5">
        <div className="text-xs text-left  font-poppins text-black font-semibold rounded md:text-2xl lg:text-4xl">
          Our Popular Dishes
        </div>
        <Carousel>
          {SliderApi.map((data, index) => {
            return (
              <Fragment key={index}>
                <FoodCard data={data}></FoodCard>
              </Fragment>
            );
          })}
        </Carousel>
      </div>
      <Chef></Chef>
    </>
  );
}

export default Home;
