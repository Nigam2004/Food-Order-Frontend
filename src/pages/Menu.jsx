import React, { useEffect, useState } from "react";
import Itemcard from "../components/Itemcard";
import {
  Container,
  CustomButtonOutline,
} from "../Custume Compnent/CustumElememt";

// import { foods } from "../../MockData";

function Menu() {
  const menus = [
    { name: "Break fast" },
    { name: "Lunch" },
    { name: "Snacks" },
    { name: "Dinner" },
    { name: "Desert" },
  ];
  const [items, setItems] = useState();
  const [clicked, setClicked] = useState(null);
  const [query, setQuery] = useState();
  const fetchItem = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:4000/food-order/find-all-item");
      const data = await res.json();
      setItems(data.result);
    } catch (error) {
      console.log(error);
    }
  };
  const findItem = async (query) => {
    try {
      const res = await fetch(
        `http://localhost:4000/food-order/find-item/${query}`
      );
      let data = await res.json();
      setItems(data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <Container>
      <div className="md:flex justify-between items-center px-14 py-1 fixed sm:static bg-white flex-wrap z-10 ">
        <div className="flex justify-center ">
          <input
            type="text"
            placeholder="Search Here"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              findItem(e.target.value);
            }}
            className="h-[35px] w-2/3 md:w-full  outline-none border-orange-400 border-2 rounded-md px-5 shadow-lg"
          />
        </div>
        <div className="flex justify-center items-center gap-3 flex-wrap mt-2 md:m-0">
          {menus.map((item, index) => {
            return (
              <div
                className={`${
                  clicked == index && "bg-orange-500 text-yellow-50"
                } border-2 py-2 px-4  rounded-md border-orange-500  duration-300 drop-shadow-lg shadow-orange-500/50 cursor-pointer  w-fit text-center font-poppins text-gray-700 hover:bg-orange-500 hover:text-yellow-50 text-[9px] sm:text-[15px]`}
                key={index}
                id={index}
                onClick={(e) => {
                  setClicked(e.target.id);
                  findItem(item.name);
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="grid  md:grid-cols-4 md:gap-y-10 sm:grid-cols-2 grid-cols-1 px-14 md:py-5 pt-44"
        data-aos="zoom-in"
      >
        {items?.map((item) => {
          let ans = items.includes(item);
          console.log(ans);
          return <Itemcard item={item} key={item._id}></Itemcard>;
        })}
      </div>
    </Container>
  );
}

export default Menu;
