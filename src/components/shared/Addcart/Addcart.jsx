import style from "./Addcart.module.css";
import { useContext } from "react";
import Gcontext from "../../../context/Gcontext";

function Addcart({ price }) {
  const { counter, addtocart } = useContext(Gcontext);

  return (
    <button onClick={addtocart} className={style.Addcart}>
      <p className="ACtxt">Add to cart</p>
      <p className="ACcost">{`$ ${counter * price}`}</p>
    </button>
  );
}

export default Addcart;
