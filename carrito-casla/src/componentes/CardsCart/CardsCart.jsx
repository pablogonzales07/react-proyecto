import { useCartContext } from "../../context/CartContextProvider";
import "./CardsCart.css"

const CardsCart = ( { producto } ) => {

  const { removeProductCart } = useCartContext();

  const deleteProduct = () => {
    removeProductCart(producto)
  }

  
  return (
     <>
          <div className="cardsCarrito">
            <img className="imageCardsCart" src={producto.img} alt="" />
            <h3 className="titleCardsCart">{producto.nombre}</h3>
            <b className="priceCardsCart">{producto.precio}</b>
            <b className="countCardsCart">{ producto.cant }</b> 
            <button className="buttonDeleteProduct" onClick={ deleteProduct }>X</button>               
          </div>

     </>
  )
}

export default CardsCart