import React from "react";
import logo from "../../assets/mainlogo.png";
import style from "./Booting.module.css";

function Booting() {
  return (
    <div className={style.Bbox}>
      <img className={style.Bimg} src={logo} alt="" />
    </div>
  );
}

export default Booting;
