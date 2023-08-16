import style from "./FoodView.module.css"
import Header from "../../components/shared/Header/Header"
import FoodCard from "../../components/shared/FoodCard/FoodCard"
import rawdata from "../../data/Raw";


function FoodView({location}) {
  return (
    <div>
        <Header location={location}/>
        <FoodCard location={location} item={rawdata[0]}/>

    </div>
  )
}

export default FoodView