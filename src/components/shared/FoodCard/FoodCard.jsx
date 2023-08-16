//import PropTypes from 'prop-types'
import style from "./FoodCard.module.css";
import Counter from "../Counter/Counter";
import Addcart from "../Addcart/Addcart";
import FoodCatIcon from "../FoodCatIcon/FoodCatIcon";

function FoodCard({ item, location }) {
  //if location is home screen let it be a button else a div
  // on click generate the page for the food item

  var image = "";
  var text = "";
  var ico = "";
  var bucket = "";

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
    ico = <FoodCatIcon key={item.id} foodtype={item.foodtype} icon={item.icon} />
    ;
    bucket = [image, text, ico, <Counter />, <Addcart price={item.price}/>];
  } else {
    image = <img src={item.imgurl} className={style.FCimg} alt="" />;
    text = (
      <div className={style.FCtxt}>
        <p className={style.FCTname}>{item.name}</p>
        <p className={style.FCTprice}>{`$${item.price}`}</p>
      </div>
    );
    bucket = [image, text];
  }
  return <div className={`${style.Fcard} ${location}`}>{bucket}</div>;
}

FoodCard.propTypes = {};

export default FoodCard;
