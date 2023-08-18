import style from "./Addcart.module.css"

function Addcart() {
  return (
    <button className={style.Addcart}>
      <p className="ACtxt">Add to cart</p>
      <p className="ACcost">edit me</p>
    </button>
  )
}

export default Addcart