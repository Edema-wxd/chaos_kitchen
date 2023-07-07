import FoodList from "../../components/FoodList"
import style from "./Landing.module.css"

function Landing({food, location }) {
  return (
    <div className={style.Landing}>
        <FoodList data={food} location={location}/>
    </div>
  )
}

export default Landing