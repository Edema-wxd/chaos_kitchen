import style from "./Categories.module.css";
import FoodCatIcon from "./shared/FoodCatIcon/FoodCatIcon";
import arrow from "../assets/arrow.svg";

function Categories({ icons }) {
  return (
    <div className={style.Categories}>
      <div className={style.Ctxt}>
        <p className={style.CFTp}>Top Categories</p>
        <button className={style.CFTbtn}>
          View all
          <img src={arrow} alt="" />
        </button>
      </div>
      <div className={style.CFlist}>
        {Object.keys(icons).map((item) => (
          <FoodCatIcon
            key={item.id}
            foodtype={item.foodtype}
            icon={item.icon}
            location={"landing"}
          />
        ))}
      </div>
      <div className={style.Ctxt}>
        <p className={style.CFTp}>Recommended for you</p>
        <button className={style.CFTbtn}>
          View all
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Categories;
