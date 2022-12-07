import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"

const ItemDetail = ( { product } ) => {

    const onAdd = (cant) => {
        console.log("usted ha agregado la cantidad de:", cant, "productos al carrito")
      }

  return (
    <div className='cardsDetalleProducto'>
      <div>
        <img src={ product.img } alt="" className="imagenProductDetalle" />
        <div className="bodyProductDetalle">
          <h3 className="tituloProductDetalle">{ product.nombre }</h3>
          <b className="precioProductDetalle">{ product.precio }</b>
        </div>
      </div>
      <ItemCount stock={ 7 } initial={ 1 } onAdd={ onAdd } />
    </div>
  )
}

export default ItemDetail

