import { createContext, useState } from "react";
import rawdata from "../data/Raw";
import foodcatdata from "../data/FoodCat";

const Gcontext = createContext();

export const GProvider = ({ children }) => {
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useState(0);
  const [box, setBox] = useState([]);
  const [bill, setBill] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [paid, setPaid] = useState(false);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //add to cart // modify this to a dictionary that takes the id of object added and the total amount
  const addtocart = async (newItem) => {
    const res = await fetch(`http://localhost:5000/cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });

    const datta = await res.json();
    setCart((cart) => cart + counter);
    setBox([datta, ...box]);
    //reset counter
    setCounter(0);
  };

  // pay for items
  const paying = () => {
    setWallet((wallet) => wallet - bill);
    setPaid(true);
    //add funtion to clear cart or store order else where
  };

  const topup = () => {
    setWallet(1000);
  };

  // calls a function if the item is being increased or not

  // remove from cart

  return (
    <Gcontext.Provider
      value={{
        counter,
        bill,
        box,
        setBill,
        increase,
        decrease,
        cart,
        addtocart,
        rawdata,
        foodcatdata,
        wallet,
        paying,
        paid,
        topup,
      }}
    >
      {children}
    </Gcontext.Provider>
  );
};

export default Gcontext;
