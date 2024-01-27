import React from "react";
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
