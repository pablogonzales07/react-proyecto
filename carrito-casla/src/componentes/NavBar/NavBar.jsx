import { Link } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";



const NavBar = () => {
  return (
    <>
      <nav className="navEstilo">
        <div className="logoEstilo">
          <Link to="/">CASLA TIENDA</Link>
        </div>
        <ul className="itemsEstilo">
          <li>
            <Link to={"/category/remeras"}>remeras</Link>
          </li>
          <li>
            <Link to="/category/pantalones">pantalones</Link>
          </li>
          <li>
            <Link to="/category/buzos">buzos</Link>
          </li>
          <li>
            <Link to="/category/medias">medias</Link>
          </li>
          <li>
            <Link to="/category/accesorios">accesorios</Link>
          </li>
          <CardWidget/>
        </ul>    
      </nav>


    </>
  )
}

export default NavBar