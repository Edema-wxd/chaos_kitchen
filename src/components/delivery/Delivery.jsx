import React from "react";
import style from "./Delivery.module.css"
import phone from "../../assets/driver/phone.svg";
import bike from "../../assets/driver/bike.svg";
import complete from "../../assets/driver/complete.svg";
import contact from "../../assets/driver/contact.svg";
import message from "../../assets/driver/message.svg";
import pan from "../../assets/driver/pan.png";
import avatar from "../../assets/driver/avatar.png";

function Delivery() {
  return (
    <div className={style.Dmod}>
      <div className={style.Dtime}>
        <p>{`Estimated delivery time is`}</p>
        <p>{`Order Progress`}</p>
      </div>
      <div className={style.Dprogress}>
        <img src={contact} alt="" />
        <img src={pan} alt="" />
        <img src={bike} alt="" />
        <img src={complete} alt="" />
      </div>
      <div className={style.Ddriver}>
        <div className={style.DDprofile}>
          <img src={avatar} alt="" />
          <div className={style.DDPtxt}>
            <p>Driver name</p>
            <p>Occupation</p>
          </div>
        </div>
        <div className={style.DDcontact}>
          <button>
            <img src={phone} alt="" />
          </button>
          <button>
            <img src={message} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
