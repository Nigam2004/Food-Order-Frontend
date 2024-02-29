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
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Forget from "./components/Forget";
function App() {
  return (
    <>
      <Router>
        <Context>
          <NavBar></NavBar>
          <Routes>
            <Route exact path="/" Component={Home}></Route>
            <Route path="/menu" Component={Menu}></Route>
            <Route path="/aboutus" Component={AboutUs}></Route>
            <Route path="/contactus" Component={ContactUs}></Route>
            <Route path="/cart" Component={CartPage}></Route>
            <Route path="/signup" Component={SignUp}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/login/forget" Component={Forget}></Route>
          </Routes>
        </Context>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
