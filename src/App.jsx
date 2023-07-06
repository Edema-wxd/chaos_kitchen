
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Booting from "./pages/booting/Booting";
//import Delivered from "./pages/delivered/Delivered";
import Home from "./pages/home/Home";
import rawdata from "./data/Raw";

function App() {
  return (
    <>
      <Home fooddisp={rawdata}/>
    </>
  );
}

export default App;
