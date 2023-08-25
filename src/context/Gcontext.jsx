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
  return (
    <Gcontext.Provider
      value={{
        counter,
        increase,
        decrease,
        rawdata,
        icons,
      }}
    >
      {children}
    </Gcontext.Provider>
  );
};

export default Gcontext;
