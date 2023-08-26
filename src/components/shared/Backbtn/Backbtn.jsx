import React from "react";
import style from "./Backbtn.module.css";
import back from "../../../assets/back.svg";
import { useNavigate } from "react-router-dom";
import x from "../../../assets/x.svg";

function Backbtn({location}) {
  const navigate = useNavigate();
  //add modification for when used in order page
  var bbtn = "";

  if (location === "cart") {
    bbtn = (
      <button onClick={() => navigate(-1)} className={style.BBC}>
        <img src={x} alt="" />
      </button>
    );
  } else {
    bbtn = (
      <button onClick={() => navigate(-1)} className={style.BB}>
        <img src={back} alt="" />
        Back
      </button>
    );
  }
  return bbtn;
}

export default Backbtn;
