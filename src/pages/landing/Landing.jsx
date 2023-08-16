import FoodList from "../../components/FoodList"
import Header from "../../components/shared/Header/Header"
import Guide from "../../components/Guide"
import Categories from "../../components/Categories"
import style from "./Landing.module.css"
import PropTypes from "prop-types"

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

Landing.defaultProps = {
  food:{},
  location:"",
  icons:{},

}

Landing.propTypes = {
  food: PropTypes.array,
  location: PropTypes.string,
  icon: PropTypes.array
}

export default Landing