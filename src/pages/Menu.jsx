import React, { useState } from "react";
import Itemcard from "../components/Itemcard";
import {
  Container,
  CustomButtonOutline,
} from "../Custume Compnent/CustumElememt";

import { foods } from "../../MockData";

function Menu() {
  const menus = [
    { name: "Break fast" },
    { name: "Lunch" },
    { name: "Snacks" },
    { name: "Dinner" },
    { name: "Desert" },
  ];
  const [clicked, setClicked] = useState("");

  return (
    <Container>
      <div className="flex justify-between items-center px-5">
        <h1>Order Your Menu</h1>
        <div className="flex justify-center items-center gap-3 flex-wrap">
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
                  fetchGet();
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-rows-1">
        {foods.map((item, index) => {
          return <Itemcard item={item} key={index}></Itemcard>;
        })}
      </div>
    </Container>
  );
}

export default Menu;
