import { Link } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";



const NavBar = () => {
  return (
    <>
      <nav className="navStyle">
        <div className="logoStyle">
          <Link to="/">
            <img src="/assets/logoDos.png" alt="" />
          </Link>
        </div>
        <ul className="itemsStyle">
          <li>
            <Link to={"/category/remeras"}>REMERAS</Link>
          </li>
          <li>
            <Link to="/category/pantalones">PANTALONES</Link>
          </li>
          <li>
            <Link to="/category/buzos">BUZOS</Link>
          </li>
          <li>
            <Link to="/category/medias">MEDIAS</Link>
          </li>
          <li>
            <Link to="/category/accesorios">ACCESORIOS</Link>
          </li>
          <CardWidget/>
        </ul>    
      </nav>


    </>
  )
}

export default NavBar