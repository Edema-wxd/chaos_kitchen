import FoodCard from "./shared/FoodCard/FoodCard"
import style from "./FoodList.module.css"


function FoodList({data, location}) {
    if (!data || data.length ===0 ){
        return <p>"No food in your yard"</p>
    }
  return (
    <div  className={style.Flist}>
        {data.map((item)=>(
            <FoodCard key={item.id} item={item} loc={location} />
        ))}
    </div>
  )
}

export default FoodList