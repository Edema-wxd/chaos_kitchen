import style from "./Cartbtn.module.css";
import carticon from "../../../assets/cart.png";
import { Link } from "react-router-dom";
import Gcontext from "../../../context/Gcontext";
import { useContext } from "react";

function Cartbtn() {
  const { cart, } = useContext(Gcontext);
  var value = "";
  if (cart !== 0) {
    value = <p>{cart}</p>;
  }

  return (
    <Link to="/cart">
      <button className={style.Cartbtn}>
        <img className={style.Cicon} src={carticon} alt="" />
        {value}
      </button>
    </Link>
  );
}

export default Cartbtn;
