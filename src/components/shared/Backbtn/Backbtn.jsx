import React from "react";
import style from "./Backbtn.module.css";
import back from "../../../assets/back.svg";
import { useNavigate } from "react-router-dom";

function Backbtn() {
  const navigate = useNavigate();
  //add modification for when used in order page

  return (
    <button onClick={() => navigate(-1)} className={style.BB}>
      <img src={back} alt="" />
      Back
    </button>
  );
}

export default Backbtn;
