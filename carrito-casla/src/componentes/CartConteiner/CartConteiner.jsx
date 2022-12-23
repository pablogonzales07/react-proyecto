import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CardClean from '../CardClean/CardClean';
import CarritoCards from '../CarritoCards/CarritoCards';
import "./CartConteiner.css"

const CartConteiner = () => {

  const { cartList, price, vaciarCarrito } = useContext(CartContext);

  return (
    <div className='cardsCarritoContainer'>
      

      {cartList.length === 0 ? <CardClean /> : cartList.map(producto => <CarritoCards key={producto.id} producto={ producto }/>)}

      {cartList.length > 0 && 
               <>
                  <button className='botonVaciarCarrito' onClick={vaciarCarrito}>VACIAR CARRITO</button>
                  <div>
                    <h3>{` el total a pagar es ${ price } `}</h3>
                  </div>              
               </>
      }

  
    </div>
  )
}

export default CartConteiner