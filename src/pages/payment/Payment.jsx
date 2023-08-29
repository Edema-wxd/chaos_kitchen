import Pay from "../../components/payment/Pay";
import Delivery from "../../components/delivery/Delivery";
import { useContext } from "react";
import Gcontext from "../../context/Gcontext";

function Payment() {
  const { paid } = useContext(Gcontext);
  var mod = "";

  if (paid) {
    mod = <Delivery />;
  } else {
    mod = <Pay />;
  }
  return <div>{mod}</div>;
}

export default Payment;
