import React from "react";
import style from "./Delivered.module.css";
import check from "../../assets/check.png"

function Delivered() {
  return (
    <div className={style.Dmain}>
      <div className={style.Dring1}>
        <div className={style.Dring2}>
          <div className={style.Dring3}>
            <div className={style.Dpopup}>
              <div className={style.Dcheck}>
                <img className={style.DCimg} src={check} alt="" />
              </div>
              <div className={style.Dtxt}>
                <p className={style.DTbody}>Your order is now at your</p>
                <h3 className={style.DTbold}>DOORSTEP</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivered;
