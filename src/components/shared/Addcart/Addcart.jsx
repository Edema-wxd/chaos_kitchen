import style from "./Addcart.module.css";
import { useContext } from "react";
import Gcontext from "../../../context/Gcontext";

function Addcart({ item }) {
  const { counter, addtocart } = useContext(Gcontext);

  return (
    <button
      onClick={() => addtocart({ id: item.id, foodcount: counter })}
      className={style.Addcart}
    >
      <p>Add to cart</p>
      <p>{`$ ${counter * item.price}`}</p>
    </button>
  );
}

export default Addcart;
