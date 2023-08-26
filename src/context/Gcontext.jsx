import { createContext, useState } from "react";
import rawdata from "../data/Raw";
import icons from "../data/FoodCat";

const Gcontext = createContext();

export const GProvider = ({ children }) => {
  const [counter, setCounter] = useState(1);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  const [cart, setCart] = useState(0);

  //add to cart // modify this to a dictionary that takes the id of object added and the total amount  
  const addtocart = () => {
    setCart((cart) => cart + counter);
    //reset counter
    setCounter(0);
  };

  // remove from cart
  const removecart = () => {};
  return (
    <Gcontext.Provider
      value={{
        counter,
        increase,
        decrease,
        cart,
        addtocart,
        removecart,
        rawdata,
        icons,
      }}
    >
      {children}
    </Gcontext.Provider>
  );
};

export default Gcontext;
