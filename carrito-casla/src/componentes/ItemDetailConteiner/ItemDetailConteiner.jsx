import { useState, useEffect } from "react"
import { gFetch } from "../../helpers/gFetch";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailConteiner.css"


const ItemDetailConteiner = () => {
    const [product, setProduct] = useState( {} )

    const { productId } = useParams()
    console.log(productId);

    useEffect(() => {
        gFetch()
        .then(data => setProduct(data.find(prod => prod.id === productId)))
        .catch(err => console.log(err))
    })

  return (
    <div className="cardDetalleContenedor">
      <ItemDetail product={ product } />
    </div>
  )
}

export default ItemDetailConteiner