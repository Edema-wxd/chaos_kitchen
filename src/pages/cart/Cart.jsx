import Pagechange from "../../animation/Pagechange";
import Backbtn from "../../components/shared/Backbtn/Backbtn";
import FoodCard from "../../components/shared/FoodCard/FoodCard";
import style from "./Cart.module.css";
import Gcontext from "../../context/Gcontext";
import { useContext, useEffect, useState } from "react";
import load from "../../assets/load.gif";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [isloading, setIsLoading] = useState(true);
  const location = "cart";
  const [cuserdata, setCuserdata] = useState([]);
  const { rawdata, bill } = useContext(Gcontext);

  var scr = "";
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  // fetch data from db.json
  const fetchCart = async () => {
    const response = await fetch(`http://localhost:5000/cart`);
    const userdata = await response.json();
    setCuserdata(userdata);
    setIsLoading(false);
  };

  if (isloading) {
    scr = <img src={load} alt="" />;
  } else {
    scr = Object.keys(cuserdata).map((item) => (
      <FoodCard
        key={cuserdata[item].foodid}
        item={rawdata[item]}
        cdata={cuserdata[item]}
        location={location}
      />
    ));
  }

  return (
    <Pagechange>
      <div className={style.Cart}>
        <div className={style.Cheader}>
          <h2>Order</h2>
          <Backbtn location={location} />
        </div>
        <div className={style.Cfoods}>{scr}</div>
        <div className={style.Ccheckout}>
          <div className={style.CCpromo}>
            <input type="text" />
            <p>Promocode code confirmed</p>
          </div>
          <div className={style.CCtxt}>
            <div className={style.CCTst}>
              <p>Subtotal</p>
              <p>{`$${bill}`}</p>
            </div>
            <div className={style.CCTst}>
              <p>Promo code</p>
              <p>{`$6.00`}</p>
            </div>
            <div className={style.CCTtotal}>
              <p>Total</p>
              <p>{`$${bill}`}</p>
            </div>
          </div>
          <button onClick={() => navigate(`/payment`)} className={style.CCbtn}>
            Order
          </button>
        </div>
      </div>
    </Pagechange>
  );
}

export default Cart;
