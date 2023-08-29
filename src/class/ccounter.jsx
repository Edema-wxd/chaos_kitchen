import { useState, useContext, useEffect } from "react";
import Gcontext from "../context/Gcontext";
import style from "../components/shared/Counter/Counter.module.css";

function Ccounter({ raw, price }) {
  const [ccount, setCcount] = useState(raw);
  var cflip = false;
  const { bill, setBill } = useContext(Gcontext);

  useEffect(() => {
    return () => warm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const warm = async () => {
    setBill((bill) => bill + ccount * price);
  };

  const cincrease = () => {
    setCcount((ccount) => ccount + 1);
    setBill((bill) => bill + price);
  };

  const cdecrease = () => {
    setCcount((ccount) => ccount - 1);
    setBill((bill) => bill - price);
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
