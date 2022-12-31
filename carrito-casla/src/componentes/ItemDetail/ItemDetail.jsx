import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import InputCount from '../InputCount/InputCount'
import { useCartContext } from '../../context/CartContextProvider'
import "./ItemDetail.css"

const ItemDetail = ( { product } ) => {

    const [ inputType, setInputType ] = useState("button")
    const { addToCart } = useCartContext()

    const onAdd = (cant) => {
        setInputType("input")
        addToCart( product, cant )
 
    }
   
  return (
    <div className='cardsDetailsProducts'>
      <div>
        <img src={ product.img } alt="" className="imageProductDetail" />
        <div>
          <h3 className="titleProductDetail">{ product.nombre }</h3>
          <b className="priceProductDetail">{ product.precio }$</b>
        </div>
      </div>
      {

        inputType === "button" ? <ItemCount stock={ 7 } initial={ 1 } onAdd={ onAdd } /> : <InputCount/>
        
      }
    
    </div>
  )
}

export default ItemDetail

