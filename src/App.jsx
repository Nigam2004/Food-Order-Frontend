import React from "react";
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route eaxact path="/" Component={Home}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
