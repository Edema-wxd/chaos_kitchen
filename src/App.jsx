import { Route, Routes } from "react-router-dom";
import Delivered from "./pages/delivered/Delivered";
import Landing from "./pages/landing/Landing";
import FoodView from "./pages/foodview/FoodView";
import Cart from "./pages/cart/Cart";
import { AnimatePresence } from "framer-motion";
import { GProvider } from "./context/Gcontext";
import Payment from "./pages/payment/Payment";

function App() {

  return (
    <GProvider>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/delivered" element={<Delivered />}></Route>
          <Route path="/view/:id" element={<FoodView />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="*" element={<h1>no page</h1>}></Route>
        </Routes>
      </AnimatePresence>
    </GProvider>
  );
}

export default App;
