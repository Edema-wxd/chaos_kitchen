//import PropTypes from 'prop-types'
import style from "./FoodCard.module.css";
import Counter from "../Counter/Counter";
import Addcart from "../Addcart/Addcart";
import FoodCatIcon from "../FoodCatIcon/FoodCatIcon";
import { useNavigate } from "react-router-dom";

function FoodCard({ item, location }) {
  //if location is home screen let it be a button else a div
  // on click generate the page for the food item

  var image = "";
  var text = "";
  var ico = "";
  var bucket = "";

  const navigate = useNavigate();

  if (location === "view") {
    image = <img src={item.imgurxl} className={style.FCVimg} alt="" />;
    text = (
      <div className={style.FCVtxt}>
        <div className={style.FCVTmain}>
          <p className={style.FCTname}>{item.name}</p>
          <p className={style.FCTprice}>{`$${item.price}`}</p>
        </div>
        <p className={style.FCVTweight}>{`~${item.weight} g`}</p>
      </div>
    );
    ico = (
      <FoodCatIcon
        key={item.id}
        foodtype={item.foodtype}
        icon={item.icon}
        location={location}
      />
    );
    bucket = (
      <div className={`${style.Fcard} ${location}`}>
        {image}
        {text}
        {ico}
        <Counter location={location} />
        <Addcart price={item.price} />
      </div>
    );
  } else if (location === "cart") {
    image = <img src={item.imgurxl} className={style.FCVimg} alt="" />;
    text = (
      <div className={style.FCVtxt}>
        <div className={style.FCVTmain}>
          <p className={style.FCTname}>{item.name}</p>
          <p className={style.FCTprice}>{`$${item.price}`}</p>
        </div>
        <p className={style.FCVTweight}>{`~${item.weight} g`}</p>
      </div>
    );
    bucket = (
      <div className={`${style.Fcard} ${location}`}>
        {image}
        {text}
        <Counter location={location} />
      </div>
    );
  } else {
    image = <img src={item.imgurl} className={style.FCimg} alt="" />;
    text = (
      <div className={style.FCtxt}>
        <p className={style.FCTname}>{item.name}</p>
        <p className={style.FCTprice}>{`$${item.price}`}</p>
      </div>
    );
    bucket = (
      <div
        onClick={() => navigate(`/view/${item.id}`)}
        className={`${style.Fcard} ${location}`}
      >
        {image}
        {text}
      </div>
    );
  }
  return bucket;
}

FoodCard.propTypes = {};

export default FoodCard;
