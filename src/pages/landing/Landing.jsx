import FoodList from "../../components/FoodList"
import Header from "../../components/shared/Header/Header"
import Guide from "../../components/Guide"
import Categories from "../../components/Categories"
import style from "./Landing.module.css"

function Landing({food, location, icons }) {
  return (
    <div className={style.Landing}>
        <Header location={location}/>
        <Guide/>
        <Categories icons={icons} />
        <FoodList data={food} location={location}/>
    </div>
  )
}

export default Landing