import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ( { stock=7, initial=1, onAdd} ) => {

  const [ count, setCount ] = useState(initial);

  const add = () => {
    if(count < stock){
      setCount(count+1)
    }
  };

  const subtract = () => {
    if(count > initial) {
      setCount(count-1)
    }
  };

  const addCart = () => {
    onAdd(count)
  }




  return (
    <div className='buttonsContainerDetail'>
      <div>
        <label className='countDetail' htmlFor="">{ count }</label>
      </div>
      <div>
        <button className='buttonsCardsDetail' onClick={ add }> + </button>
        <button className='buttonsCardsDetail' onClick={ subtract }> - </button>
      </div>
      <div>
        <button className='buttonAddToCart' onClick={ addCart }>Agregar al carrito</button>
      </div>  
    </div>
  )
}

export default ItemCount