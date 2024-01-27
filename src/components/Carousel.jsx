import SliderApi from "./SliderApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mt-10 ">
        <Slider {...settings}>
          {SliderApi.map((da, index) => {
            return (
              <div
                className="bg-white text-black rounded-xl cursor-pointer hover:scale-105  ease-in-out hover:shadow-xl"
                key={index}
              >
                <div className="h-56  bg-[#eee8d7] rounded-lg flex justify-center items-center  ">
                  <img
                    src={da.img}
                    alt={da.name}
                    className="h-44 w-44 rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-5 p-6">
                  <p className="text-xs text-[#fdc868] font-bold font-poppins md:text-xl lg:text-2xl">
                    {da.name}
                  </p>
                  <p className="text-xs font-medium text-center font-poppins md:text-base lg:text-lg">
                    {da.review}{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      ;
    </>
  );
}
