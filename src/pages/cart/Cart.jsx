import { async } from "q";
import Pagechange from "../../animation/Pagechange";
import Backbtn from "../../components/shared/Backbtn/Backbtn";
import FoodCard from "../../components/shared/FoodCard/FoodCard";
//import FoodCard from "../../components/shared/FoodCard/FoodCard";
import style from "./Cart.module.css";
import Gcontext from "../../context/Gcontext";
import { useContext, useEffect, useState } from "react";

function Cart() {
  const location = "cart";
  const [cuserdata, setCuserdata] = useState([]);
  const { rawdata } = useContext(Gcontext);

  useEffect(() => {
    fetchCart();
  }, []);

  // fetch data from db.json
  const fetchCart = async () => {
    const response = await fetch(`http://localhost:5000/cart`);

    const userdata = await response.json();

    setCuserdata(userdata);
  };

  return (
    <Pagechange>
      <div className={style.Cart}>
        <div className={style.Cheader}>
          <h2>Order</h2>
          <Backbtn location={location} />
        </div>
        <div className={style.Cfoods}>
          {Object.keys(cuserdata).map((item) => (
            <FoodCard
              key={cuserdata[item].foodid}
              item={rawdata[item]}
              location={location}
            />
          ))}
        </div>
        <div className={style.Ccheckout}>
          <div className={style.CCpromo}>
            <input type="text" />
            <p>Promocode code confirmed</p>
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
