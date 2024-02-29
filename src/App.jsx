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

import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <>
      <Router>
        <Context>
          <NavBar></NavBar>
          <Routes>

            <Route exact path="/" element={<Home></Home>}></Route>
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

          </Routes>
        </Context>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
