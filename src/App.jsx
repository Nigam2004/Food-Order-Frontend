import React from "react";

import NavBar from "./component/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes></Routes>
      </Router>


  );
}

export default App;
