import Pagechange from "../../animation/Pagechange";
import Backbtn from "../../components/shared/Backbtn/Backbtn";
import FoodCard from "../../components/shared/FoodCard/FoodCard";
import style from "./Cart.module.css";

function Cart() {
  var location = "cart";

  return (
    <Pagechange>
      <div className={style.Cart}>
        <div className={style.Cheader}>
          <h2 className={style.CHtxt}>Order</h2>
          <Backbtn />
        </div>
        <div className={style.Cfoods}>
          <p>foodcards</p>
        </div>
        <div className={style.Ccheckout}>
          <div className={style.CCpromo}>
            <input type="text" />
            <p>add text if its promocode</p>
          </div>
          <div className={style.CCtxt}>
            <div className={style.CCTst}>
              <p>Subtotal</p>
              <p>{`$46.00`}</p>
            </div>
            <div className={style.CCTst}>
              <p>Promo code</p>
              <p>{`$6.00`}</p>
            </div>
            <div className={style.CCTtotal}>
              <p>Total</p>
              <p>{`$40.00`}</p>
            </div>
          </div>
          <button className={style.CCbtn}>Order</button>
        </div>
      </div>
    </Pagechange>
  );
}

export default Cart;
