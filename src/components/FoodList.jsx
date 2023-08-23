import FoodCard from "./shared/FoodCard/FoodCard";
import style from "./FoodList.module.css";

function FoodList({ data, location }) {
  if (!data || data.length === 0) {
    return <p>"No food in your yard"</p>;
  }
  if (location === "landing") {
    return (
      <div className={style.Flisthome}>
        {data.map((item) => (
          <FoodCard key={item.id} item={item} location={location} />
        ))}
      </div>
    );
  } else {
    return (
      <div className={style.Flist}>
        {data.map((item) => (
          <FoodCard key={item.id} item={item} location={location} />
        ))}
      </div>
    );
  }
}

export default FoodList;
