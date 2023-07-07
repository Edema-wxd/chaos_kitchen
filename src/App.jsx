
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Booting from "./pages/booting/Booting";
//import Delivered from "./pages/delivered/Delivered";
//import { useState } from "react";
import Landing from "./pages/landing/Landing";
import rawdata from "./data/Raw";

function App() {

  return (
    <>
      <Landing food={rawdata} location={"home"}/>
    </>
  );
}

export default App;
