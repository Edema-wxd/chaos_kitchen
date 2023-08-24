import Cartbtn from "../Cartbtn/Cartbtn";
import style from "./Header.module.css";
import Headerlogo from "../../../assets/header logo.png";
import Search from "../../../assets/Search.png";
import { useNavigate } from "react-router-dom";

function Header({ location }) {
  const navigate = useNavigate();
  var Added = <></>;

  if (location === "home") {
    Added = (
      <div className={style.Hsearchbar}>
        <img src={Search} alt="" />
        <input
          className={style.Hsearch}
          type="search"
          name="Food Search"
          id="search"
          placeholder="Search for something tasty"
        />
      </div>
    );
  } else {
    Added = <p className={style.FIhead}>...eat well, eat the best</p>;
  }

  return (
    <div className={style.Header}>
      <div className={style.Hname}>
        <img onClick={() => navigate("/")} src={Headerlogo} alt="" />
        <Cartbtn />
      </div>
      <div>{Added}</div>
    </div>
  );
}

export default Header;
