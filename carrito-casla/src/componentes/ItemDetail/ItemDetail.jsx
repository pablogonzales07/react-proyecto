import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import "./ItemDetail.css"
import InputCount from '../InputCount/InputCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ( { product } ) => {

    const [inputType, setInputType] = useState("button")
    const { agregarCarrito } = useContext(CartContext)

    const onAdd = (cant) => {
        console.log("usted ha agregado la cantidad de:", cant, "productos al carrito");
        setInputType("input")
        agregarCarrito( product, cant )
 
    }
   
  return (
    <div className='cardsDetalleProducto'>
      <div>
        <img src={ product.img } alt="" className="imagenProductDetalle" />
        <div className="bodyProductDetalle">
          <h3 className="tituloProductDetalle">{ product.nombre }</h3>
          <b className="precioProductDetalle">{ product.precio }$</b>
        </div>
      </div>
      {

        inputType === "button" ? <ItemCount stock={ 7 } initial={ 1 } onAdd={ onAdd } /> : <InputCount/>
        
      }
    
    </div>
  )
}

export default ItemDetail

