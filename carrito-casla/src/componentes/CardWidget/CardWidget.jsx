import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CardWidget.css";


const CardWidget = () => {

  const {countProducts} = useContext(CartContext);

  return (

    <li className="carritoEstilo">
      <Link to="/cart">
         🛒
      </Link>
      <span className="itemTotal">{countProducts}</span>
    </li>
  )
}

export default CardWidget