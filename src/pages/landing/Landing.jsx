import FoodList from "../../components/FoodList";
import Header from "../../components/shared/Header/Header";
import Guide from "../../components/Guide";
import Categories from "../../components/Categories";
import style from "./Landing.module.css";
import PropTypes from "prop-types";
import Booting from "../booting/Booting";
import Pagechange from "../../animation/Pagechange";
import { useState, useEffect } from "react";

function Landing({ food, icons }) {
  const location = "landing";

  const [loading, setLoading] = useState(false);
  // add condtional to make sure this doesnt happen if the person comes back to the page
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Booting />
      ) : (
        <Pagechange>
          <div className={style.Landing}>
            <Header location={location} />
            <Guide />
            <Categories icons={icons} location={location} />
            <FoodList data={food} location={location} />
          </div>
        </Pagechange>
      )}
    </>
  );
}

Landing.defaultProps = {
  food: {},
  location: "",
  icons: {},
};

Landing.propTypes = {
  food: PropTypes.array,
  location: PropTypes.string,
  icon: PropTypes.array,
};

export default Landing;
