import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { Cart } from "../../Context";
const PrivateRoutes = ({ children }) => {
  const { logedIn, setLogedIn } = useContext(Cart);

  return logedIn && <>{children}</>;
};

export default PrivateRoutes;
