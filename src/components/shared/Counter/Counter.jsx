import style from "./Counter.module.css";
import { useContext } from "react";
import Gcontext from "../../../context/Gcontext";
import Ccounter from "../../../class/ccounter";

function Counter({ location, ccount, price }) {
  const { counter, increase, decrease } = useContext(Gcontext);
  var flip = "";
  var pack = "";

  //TODO: disable decrease button when counter = 0
  if ((counter === 0) | (counter < 1)) {
    flip = true;
  } else {
    flip = false;
  }

  if (location === "cart") {
    pack = <Ccounter price={price} raw={ccount} />;
    /*pack = (
      <div onClick={editcart} className={style.Cmain}>
        <button className={style.Cplus_btn} onClick={increase}>
          +
        </button>
        <span className={style.Cnum_output}>{ccount}</span>
        <button disabled={flip} className={style.Cminus_btn} onClick={decrease}>
          -
        </button>
      </div>
    );*/
  } else {
    pack = (
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

  return pack;
}

export default Counter;
