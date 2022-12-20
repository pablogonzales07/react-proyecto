import "./CarritoCards.css"

const CarritoCards = ( { producto } ) => {
  return (
    <div className="cardsCarrito">
       <img className="imagenCardsCarrito" src={producto.img} alt="" />
       <h3 className="tituloCardsCarrito">{producto.nombre}</h3>
       <b className="precioCardsCarrito">{producto.precio}</b>
       <b className="countCardsCarrito">{ producto.cant }</b>                
    </div>
  )
}

export default CarritoCards