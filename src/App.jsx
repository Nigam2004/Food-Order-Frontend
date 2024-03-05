import React from "react";
import Home from "./pages/home";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Context from "../Context";
import CartPage from "./pages/CartPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Forget from "./components/Forget";
import Error from "./pages/Error";
import Sucess from "./components/Sucess";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <>
      <Router>
        <Context>
          <NavBar></NavBar>
          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route path="/login" exact element={<Login></Login>}></Route>
            <Route path="/login/forget" element={<Forget />}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route
              path="/menu"
              element={
                <PrivateRoutes>
                  <Menu />
                </PrivateRoutes>
              }
            ></Route>
            <Route
              path="/aboutus"
              element={
                <PrivateRoutes>
                  <AboutUs />
                </PrivateRoutes>
              }
            ></Route>
            <Route
              path="/contactus"
              element={
                <PrivateRoutes>
                  <ContactUs />
                </PrivateRoutes>
              }
            ></Route>
            <Route
              path="/cart"
              element={
                <PrivateRoutes>
                  <CartPage />
                </PrivateRoutes>
              }
            ></Route>
            <Route
              path="/*"
              element={
                <PrivateRoutes>
                  <Error />
                </PrivateRoutes>
              }
            ></Route>
            <Route
              path="/sucess"
              element={
                <PrivateRoutes>
                  <Sucess />
                </PrivateRoutes>
              }
            ></Route>
          </Routes>
        </Context>
        {/* <Footer></Footer> */}
      </Router>
    </>
  );
}

export default App;
