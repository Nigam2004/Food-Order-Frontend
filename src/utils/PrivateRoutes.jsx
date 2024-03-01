import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { Cart } from "../../Context";
import Login from "../components/Login";
const PrivateRoutes = ({ children }) => {
  const { logedIn, setLogedIn } = useContext(Cart);
  const navigate = useNavigate();
  return logedIn ? <>{children} </> : <Login></Login>;
};

export default PrivateRoutes;
