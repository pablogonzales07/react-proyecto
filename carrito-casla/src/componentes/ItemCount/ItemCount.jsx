import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ( { stock=7, initial=1, onAdd} ) => {

  const [ count, setCount ] = useState(initial);

  const sumar = () => {
    if(count < stock){
      setCount(count+1)
    }
  };

  const restar = () => {
    if(count > initial) {
      setCount(count-1)
    }
  };

  const agregarCarrito = () => {
    onAdd(count)
  }




  return (
    <div className='botonesContenedor'>
      <div>
        <label className='contadorDetalle' htmlFor="">{ count }</label>
      </div>
      <div>
        <button className='botonesCards' onClick={ sumar }> + </button>
        <button className='botonesCards' onClick={ restar }> - </button>
      </div>
      <div>
        <button className='botonDetalle' onClick={ agregarCarrito }>Agregar al carrito</button>
      </div>  
    </div>
  )
}

export default ItemCount