import React from "react";
import { useContext } from "react";
import Gcontext from "../../context/Gcontext";
import style from "./Pay.module.css";
import up from "../../assets/tup.svg";
import wl from "../../assets/wlogo.png";

function Pay() {
  const { bill, wallet, paying, topup } = useContext(Gcontext);
  // add function to disable button until the funds in the wallet is greater than bill

  var pflip = true;
  if (wallet > bill && bill > 0) {
    pflip = false;
  } else {
    pflip = true;
  }

  return (
    <div className={style.Pmodule}>
      <h1>Payment Method</h1>
      <div className={style.PMoptions}>
        <button>
          <p>Wallet</p>
          <p>5% Discount</p>
          <p>{`$${(bill * 0.95).toFixed(2)}`}</p>
        </button>
        <button>
          <p>Cash</p>
          <p>0% Discount</p>
          <p>{`$${bill.toFixed(2)}`}</p>
        </button>
      </div>
      <div className={style.PMwallet}>
        <div className={style.PMWbalance}>
          <p>
            <img src={wl} alt="" />
            Wallet
          </p>
          <p className={style.PMWtxt}>
            My Balance: <span className={style.PMWcash}>{`USD ${wallet}`}</span>{" "}
          </p>
        </div>

        <button onClick={topup} className={style.PMtopup}>
          <img src={up} alt="" />
          <p>Top Up</p>
        </button>
      </div>
      <button
        onClick={paying}
        disabled={pflip}
        className={style.PMorder}
        type="submit"
      >
        Order
      </button>
    </div>
  );
}

export default Pay;
