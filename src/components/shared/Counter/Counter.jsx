import style from "./Counter.module.css";
import { useState } from "react";

function Counter(location) {
  const [counter, setCounter] = useState(1);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };
  //TODO: disable decrease button when counter = 0

  return (
    <div className={style.main}>
      <button className={style.plus_btn} onClick={increase}>
        +
      </button>
      <span className={style.num_output}>{counter}</span>
      <button className={style.minus_btn} onClick={decrease}>
        -
      </button>
    </div>
  );
}

export default Counter;
