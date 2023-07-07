import style from "./Cartbtn.module.css"
import carticon from "../../../assets/cart.png"

function Cartbtn() {
  return (
    <button  className={style.Cartbtn}>
        <img className={style.Cicon} src={carticon} alt="" />
        <p>2</p>
    </button>
  )
}

export default Cartbtn