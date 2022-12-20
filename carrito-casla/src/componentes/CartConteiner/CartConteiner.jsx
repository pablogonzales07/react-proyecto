import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CarritoCards from '../CarritoCards/CarritoCards';
import "./CartConteiner.css"

const CartConteiner = () => {

  const { cartList, vaciarCarrito } = useContext(CartContext);

  return (
    <div className='cardsCarritoContainer'>
      { cartList.map(producto => <CarritoCards key={producto.id} producto={ producto }/>) 

      }
      <button className='botonVaciarCarrito' onClick={vaciarCarrito}>VACIAR CARRITO</button>
    </div>
  )
}

export default CartConteiner