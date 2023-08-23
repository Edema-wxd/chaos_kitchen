import style from "./Cartbtn.module.css";
import carticon from "../../../assets/cart.png";
import { Link } from "react-router-dom";

function Cartbtn() {
  return (
    <Link to="/cart">
      <button className={style.Cartbtn}>
        <img className={style.Cicon} src={carticon} alt="" />
        <p>2</p>
      </button>
    </Link>
  );
}

export default Cartbtn;
