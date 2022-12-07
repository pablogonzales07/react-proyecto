import React from 'react'
import List from '../List/List'
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className='cardsConteiner'>
        {
            products.map( product => <List key={ product.id } product={ product }/> )                    
        }      
    </div>
  )
}

export default ItemList