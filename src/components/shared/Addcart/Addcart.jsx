import style from "./Addcart.module.css";
import { useContext } from "react";
import Gcontext from "../../../context/Gcontext";

function Addcart({ item }) {
  const { counter, addtocart } = useContext(Gcontext);

  return (
    <button onClick={() => addtocart([item.id, counter])} className={style.Addcart}>
      <p className="ACtxt">Add to cart</p>
      <p className="ACcost">{`$ ${counter * item.price}`}</p>
    </button>
  );
}

export default Addcart;
