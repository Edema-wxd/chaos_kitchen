import Cartbtn from "../Cartbtn/Cartbtn"
import style from "./Header.module.css"


function Header({location}) {
    


  return (
    <div className={style.Header}>
        <div className={style.Hname}>
            <Cartbtn/>
        </div>        
    </div>
  )
}

export default Header