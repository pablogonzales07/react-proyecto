import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContextProvider";
import "./CardWidget.css";


const CardWidget = () => {

  const {countProducts} = useCartContext();

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