import icecream from "../assets/foodimg/icecream.png";
import pizza from "../assets/foodimg/Pepperoni_Pizza 1.png";
import piz from "../assets/foodimg/xl/piz.png";
import burger from "../assets/foodimg/burger.png";
import pizzaico from "../assets/foodicons/Vctor.svg";

const rawdata = [
  {
    id: 0,
    imgurl: pizza,
    imgurxl: piz,
    name: "Pepperoni Pizza",
    price: 20,
    weight: 300,
    icon: pizzaico,
    foodtype: "Pizza",
  },
  {
    id: 1,
    imgurl: icecream,
    name: "Strawberry Ice Cream",
    price: 16,
    weight: 160,
  },
  {
    id: 2,
    imgurl: burger,
    name: "Beef Burger",
    price: 10,
    weight: 120,
  },
];

export default rawdata;
