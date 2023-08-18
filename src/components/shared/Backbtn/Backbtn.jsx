import React from 'react'
import style from "./Backbtn.module.css"
import back from "../../../assets/back.svg"

function Backbtn() {
  return (
    <button className={style.BB}>
        <img src={back} alt="" />
        Back
    </button>
  )
}

export default Backbtn