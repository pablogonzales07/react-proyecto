import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CardWidget.css";


const CardWidget = () => {

  const {countProducts} = useContext(CartContext);

  return (

    <li>
      <Link to="/cart">
         🛒
      </Link>
      {countProducts != 0 && <span className="totalItem">{countProducts}</span>}
    </li>
  )
}

export default CardWidget