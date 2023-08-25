import style from "./Addcart.module.css";
import { useContext } from "react";
import Gcontext from "../../../context/Gcontext";

function Addcart({ price }) {
  const { counter } = useContext(Gcontext);

  return (
    <button className={style.Addcart}>
      <p className="ACtxt">Add to cart</p>
      <p className="ACcost">{`$ ${counter * price}`}</p>
    </button>
  );
}

export default Addcart;
