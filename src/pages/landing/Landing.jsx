import FoodList from "../../components/FoodList"
import Header from "../../components/shared/Header/Header"
import style from "./Landing.module.css"

function Landing({food, location }) {
  return (
    <div className={style.Landing}>
        <Header location={location}/>
        <FoodList data={food} location={location}/>
    </div>
  )
}

export default Landing