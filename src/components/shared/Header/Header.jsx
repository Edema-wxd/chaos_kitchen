import Cartbtn from "../Cartbtn/Cartbtn";
import style from "./Header.module.css";
import Headerlogo from "../../../assets/header logo.png";
import Search from "../../../assets/Search.png"


function Header({ location }) {
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
        <img src={Headerlogo} alt="" />
        <Cartbtn />
      </div>
      <div>{Added}</div>
    </div>
  );
}

export default Header;
