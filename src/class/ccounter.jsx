import { useState } from "react";
import style from "../components/shared/Counter/Counter.module.css";

function Ccounter({ raw }) {
  const [ccount, setCcount] = useState(raw);
  var cflip = false;

  const cincrease = () => {
    setCcount((ccount) => ccount + 1);
  };

  const cdecrease = () => {
    setCcount((ccount) => ccount - 1);
  };

  if ((ccount === 0) | (ccount < 1)) {
    cflip = true;
  } else {
    cflip = false;
  }

  return (
    <div className={style.Cmain}>
      <button className={style.Cplus_btn} onClick={cincrease}>
        +
      </button>
      <span className={style.Cnum_output}>{ccount}</span>
      <button disabled={cflip} className={style.Cminus_btn} onClick={cdecrease}>
        -
      </button>
    </div>
  );
}

export default Ccounter;
