import React from "react";
import Home from "./pages/home";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/menu" Component={Menu}></Route>
          <Route path="/aboutus" Component={AboutUs}></Route>
          <Route path="/contactus" Component={ContactUs}></Route>
        </Routes>
        <Booking></Booking>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
