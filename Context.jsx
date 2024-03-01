import React, { useState } from "react";
import { createContext } from "react";
export const Cart = createContext(null);

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [logedIn, setLogedIn] = useState(false);
  return (
    <Cart.Provider value={{ cart, setCart, logedIn, setLogedIn }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;
