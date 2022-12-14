import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContextProvider';
import CardClean from '../CardClean/CardClean';
import ListCart from '../ListCart/ListCart';
import "./CartConteiner.css"

const CartConteiner = () => {

  const { cartList, price, emptyCart} = useCartContext();

  return (
    <div className='cardsCartContainer'>
      

      {cartList.length === 0 ? <CardClean /> : <ListCart /> }

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