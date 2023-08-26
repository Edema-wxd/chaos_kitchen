import FoodList from "../../components/FoodList";
import Header from "../../components/shared/Header/Header";
import Guide from "../../components/Guide";
import Categories from "../../components/Categories";
import style from "./Landing.module.css";
import Booting from "../booting/Booting";
import Pagechange from "../../animation/Pagechange";
import { useState, useEffect } from "react";

function Landing() {
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
            <Categories/>
            <FoodList location={location} />
          </div>
        </Pagechange>
      )}
    </>
  );
}

export default Landing;
