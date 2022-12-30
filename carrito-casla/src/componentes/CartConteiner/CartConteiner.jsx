import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import CardClean from '../CardClean/CardClean';
import CarritoCards from '../CarritoCards/CarritoCards';
import "./CartConteiner.css"

const CartConteiner = () => {

  const { cartList, price, emptyCart} = useContext(CartContext);

  return (
    <div className='cardsCartContainer'>
      

      {cartList.length === 0 ? <CardClean /> : cartList.map(producto => <CarritoCards key={producto.id} producto={ producto }/>)}

      {cartList.length > 0 && 
               <>
                  <button className='buttonEmptyCart' onClick={ emptyCart }>VACIAR CARRITO</button>
                  <Link to="/confirmPurchase">
                      <button className='buttonEmptyCart'>TERMINAR COMPRA</button>
                  </Link>
                  <div className='totalContainer'>
                    <h3 className='titleTotal'>{` EL TOTAL A PAGAR ES ${ price }$ ARS`}</h3>
                  </div>              
               </>
      }

  
    </div>
  )
}

export default CartConteiner