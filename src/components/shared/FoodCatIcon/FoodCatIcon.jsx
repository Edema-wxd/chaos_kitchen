import style from "./FoodCatIcon.module.css";

function FoodCatIcon({ foodtype, icon, location }) {
  // set for food view location
  if (location === "view") {
  }

  // set for defualt location
  return (
    <div className={style.FCicon}>
      <img src={icon} alt="" />
      <p>{foodtype}</p>
    </div>
  );
}

export default FoodCatIcon;
