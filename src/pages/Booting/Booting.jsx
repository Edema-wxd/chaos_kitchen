import React from 'react'
import logo from "../../assets/mainlogo.svg"
import style from "../Booting/Booting.module.css"

function Booting() {
  return (
    <div className={style.Bbox} >
      <img className={style.Bimg} src={logo} alt="" />
    </div>
  )
}

export default Booting
