import style from "./Guide.module.css"
import repeat from "../assets/Repeat.png"
import quest from "../assets/quest.png"
import dish from "../assets/dish.png"

function Guide() {
  return (
    <div className={style.Guide}>
        <button className={style.Gbtn}>
            <img src={repeat} alt="" />
            <p className={style.GBtxt}>Repeat last order</p>
        </button>
        <hr className={style.Ghr} />
        <button className={style.Gbtn}>
            <img src={quest} alt="" />
            <p className={style.GBtxt}>Help me choose</p>
        </button>
        <hr className={style.Ghr} />
        <button className={style.Gbtn}>
            <img src={dish} alt="" />
            <p className={style.GBtxt}>Surprise me</p>
        </button>
    </div>
  )
}

export default Guide