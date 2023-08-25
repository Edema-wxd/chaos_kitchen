import style from "./Counter.module.css";
import { useContext } from "react";
import Gcontext from "../../../context/Gcontext";

function Counter(location) {
  const { counter, increase, decrease } = useContext(Gcontext);
  //TODO: disable decrease button when counter = 0
  var flip = "";
  if ((counter === 0) | (counter < 1)) {
    flip = true;
  } else {
    flip = false;
  }

  return (
    <div className={style.main}>
      <button className={style.plus_btn} onClick={increase}>
        +
      </button>
      <span className={style.num_output}>{counter}</span>
      <button disabled={flip} className={style.minus_btn} onClick={decrease}>
        -
      </button>
    </div>
  );
}

export default Counter;
