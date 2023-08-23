import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Delivered from "./pages/delivered/Delivered";
import Landing from "./pages/landing/Landing";
import rawdata from "./data/Raw";
import icons from "./data/FoodCat";
import FoodView from "./pages/foodview/FoodView";
import Cart from "./pages/cart/Cart";
import { AnimatePresence } from "framer-motion";

function App() {
  //const loco = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route
          path="/"
          element={<Landing food={rawdata} icon={icons} />}
        ></Route>
        <Route path="/delivered" element={<Delivered />}></Route>
        <Route path="/view/:id"  element={<FoodView />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
