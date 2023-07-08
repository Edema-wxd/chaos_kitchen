
//import PropTypes from 'prop-types'
import style from "./FoodCard.module.css"


function FoodCard({item, location}) {
  //if location is home screen let it be a button else a div
  // on click generate the page for the food item 
 
  return (
    <div className={`${style.Fcard} ${location}`}>
      <img src={item.imgurl} className={style.FCimg} alt="" />
      <div className={style.FCtxt}>
        <p className={style.FCTname}>{item.name}</p>
        <p className={style.FCTprice}>{`$${item.price}`}</p>
      </div>
    </div>
  )
}

FoodCard.propTypes = {

}

export default FoodCard

