import "./NavBar.css";



const NavBar = () => {
  return (
    <>
      <nav className="navEstilo">
        <div className="logoEstilo">
          <a href="">CASLA TIENDA</a>
        </div>
        <ul className="itemsEstilo">
          <li>
            <a href="">remeras</a>
          </li>
          <li>
            <a href="">pantalones</a>
          </li>
          <li>
            <a href="">buzos</a>
          </li>
          <li>
            <a href="">medias</a>
          </li>
          <li>
            <a href="">accesorios</a>
          </li>
          <li className="carritoEstilo">
            <a href="">🛒</a>
            <div className="contador">4</div>
          </li>
        </ul>    
      </nav>


    </>
  )
}

export default NavBar