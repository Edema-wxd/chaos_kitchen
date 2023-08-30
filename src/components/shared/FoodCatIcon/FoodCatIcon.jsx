import style from "./FoodCatIcon.module.css";

function FoodCatIcon({ foodtype, icon, location }) {
  var inp = "";
  // set for food view location
  if (location === "view") {
    inp = (
      <div className={style.FCicon}>
        <img src={icon} alt="" />
        <p>{foodtype}</p>
      </div>
    );
  } else if (location === "landing") {
    <div className={style.FCLicon}>
      <img src={icon} alt="" />
      <p>{foodtype}</p>
    </div>;
  } else {
    inp = (
      <div className={style.FCCarticon}>
        <img src={icon} alt="" />
        <p>{foodtype}</p>
      </div>
    );
  }

  // set for defualt location
  return inp;
}

export default FoodCatIcon;
