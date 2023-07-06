import React from 'react'
import PropTypes from 'prop-types'
import style from "./FoodCard.module.css"


function FoodCard({item, loc}) {
  return (
    <div className={style.Fcard}>
      <img src={item.imgurl} className={style.FCimg} alt="" />
      <div className={style.FCtxt}>
        <h3 className={style.FCTname}>{item.name}</h3>
        <p className={style.FCTprice}>{item.price}</p>
      </div>
    </div>
  )
}

FoodCard.propTypes = {

}

export default FoodCard

