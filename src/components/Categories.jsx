import style from "./Categories.module.css"
function Categories() {
  return (
    <div className={style.Categories}>
        <div className={style.Ctxt}>
            <p className={style.CFTp}></p>
            <button className={style.CFTbtn}>
                View all
                <img src="" alt="" />
            </button>
        </div>
        <div className={style.CFlist}>

        </div>
        <div className={style.Ctxt}>
            <p className={style.CFTp}></p>
            <button className={style.CFTbtn}>
                View all
                <img src="" alt="" />
            </button>
        </div>
    </div>
  )
}

export default Categories