import React from "react";
import style from "./Delivered.module.css";
import check from "../../assets/check.png";
import cancel from "../../assets/cancel.png";
import { useNavigate } from "react-router-dom";

function Delivered() {
  const navigate = useNavigate();
  return (
    <div className={style.Dmain}>
      <div className={style.Dring1}>
        <div className={style.Dring2}>
          <div className={style.Dring3}>
            <div className={style.Dpopup}>
              <img className={style.DPcancel} src={cancel} alt="" />
              <div className={style.Dcheck}>
                <img
                  onClick={() => navigate(-1)}
                  className={style.DCimg}
                  src={check}
                  alt=""
                />
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
