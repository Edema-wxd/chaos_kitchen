//import style from "./FoodView.module.css"
import Header from "../../components/shared/Header/Header";
import FoodCard from "../../components/shared/FoodCard/FoodCard";
import Pagechange from "../../animation/Pagechange";
import Gcontext from "../../context/Gcontext";
import { useParams } from "react-router-dom";
import { useContext } from "react";

function FoodView() {
  const { rawdata } = useContext(Gcontext);

  var location = "view";
  const params = useParams();
  return (
    <Pagechange>
      <div>
        <Header location={location} />
        <FoodCard location={location} item={rawdata[params.id]} />
      </div>
    </Pagechange>
  );
}

export default FoodView;
