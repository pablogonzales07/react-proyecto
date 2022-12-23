import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CarritoCards.css"

const CarritoCards = ( { producto } ) => {

  const { eliminarProductoCarrito } = useContext(CartContext);

  const borrarProducto = () => {
    eliminarProductoCarrito(producto)
  }

  
  return (
     <>
          <div className="cardsCarrito">
            <img className="imagenCardsCarrito" src={producto.img} alt="" />
            <h3 className="tituloCardsCarrito">{producto.nombre}</h3>
            <b className="precioCardsCarrito">{producto.precio}</b>
            <b className="countCardsCarrito">{ producto.cant }</b> 
            <button className="botonEliminarProducto" onClick={ borrarProducto }>X</button>               
          </div>

     </>
  )
}

export default CarritoCards