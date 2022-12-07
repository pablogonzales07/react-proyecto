import { Link } from "react-router-dom";
import "./CardWidget.css";


const CardWidget = () => {
  return (

    <li className="carritoEstilo">
      <Link to="/cart">
         🛒
      </Link>
      <div className="contador">4</div>
    </li>
  )
}

export default CardWidget