//import style from "./FoodView.module.css"
import Header from "../../components/shared/Header/Header";
import FoodCard from "../../components/shared/FoodCard/FoodCard";
import rawdata from "../../data/Raw";
import Pagechange from "../../animation/Pagechange";
import { useParams } from "react-router-dom";

function FoodView() {
  var location = "view";
  let { id } = useParams;

  return (
    <Pagechange>
      <div>
        <Header location={location} />
        <FoodCard location={location} item={rawdata[id]} />
      </div>
    </Pagechange>
  );
}

export default FoodView;
