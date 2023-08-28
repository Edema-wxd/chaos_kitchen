import { createContext, useState } from "react";
import rawdata from "../data/Raw";
import icons from "../data/FoodCat";

const Gcontext = createContext();

export const GProvider = ({ children }) => {
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useState(0);
  const [box, setBox] = useState([{}]);
  const [boxEdit, setBoxEdit] = useState({
    item: {},
    edit: false,
  });
  const [bill, setBill] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //add to cart // modify this to a dictionary that takes the id of object added and the total amount
  const addtocart = (newItem) => {
    setCart((cart) => cart + counter);
    //reset counter
    setBox([newItem, ...box]);
    setCounter(0);
  };

  // set item to be updated
  const editcart = (item) => {
    setBoxEdit({
      item,
      edit: true,
    });
  };
  // calls a function if the item is being increased or not

  // remove from cart

  return (
    <Gcontext.Provider
      value={{
        counter,
        bill,
        setBill,
        increase,
        decrease,
        cart,
        addtocart,
        rawdata,
        icons,
        editcart,
      }}
    >
      {children}
    </Gcontext.Provider>
  );
};

export default Gcontext;
