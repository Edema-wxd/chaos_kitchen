import { useContext } from "react";
import Gcontext from "../context/Gcontext";
import FoodCard from "./shared/FoodCard/FoodCard";
import style from "./FoodList.module.css";

function FoodList({ location }) {
  const { rawdata } = useContext(Gcontext);

  if (!rawdata || rawdata.length === 0) {
    return <p>"No food in your yard"</p>;
  }
  if (location === "landing") {
    return (
      <div className={style.Flisthome}>
        {rawdata.map((item) => (
          <FoodCard key={item.id} item={item} location={location} />  
        ))}
      </div>
    );
  } else {
    return (
      <div className={style.Flist}>
        {rawdata.map((item) => (
          <FoodCard key={item.id} item={item} location={location} />
        ))}
      </div>
    );
  }
}

export default FoodList;
