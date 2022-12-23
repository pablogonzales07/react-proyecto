import { Link } from "react-router-dom";
import "./CardClean.css"

const CardClean = () => {

  return (

    <div className="boxCardClean">
      <h2>EL CARRITO ESTA VACIO</h2>
       <Link to="/">
          <button>BUSCAR PRODUCT0S</button>
       </Link>   
    </div>
  )
}

export default CardClean