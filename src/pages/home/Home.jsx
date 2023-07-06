import FoodList from "../../components/FoodList"

function Home({fooddisp, }) {
  return (
    <>
        <FoodList data={fooddisp}/>
    </>
  )
}

export default Home