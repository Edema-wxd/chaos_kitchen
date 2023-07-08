import style from "./FoodCatIcon.module.css"

function FoodCatIcon({foodtype, icon}) {
  return (
    <div className={style.FCicon}>
      <img src={icon} alt="" />
      <p>
        {foodtype}
      </p>
    </div>
  )
}

export default FoodCatIcon