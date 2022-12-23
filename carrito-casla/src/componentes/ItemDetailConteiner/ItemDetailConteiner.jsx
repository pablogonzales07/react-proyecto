import { useState, useEffect } from "react"
import { gFetch } from "../../helpers/gFetch";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailConteiner.css"
import Loading from "../Loading/Loading";


const ItemDetailConteiner = () => {
    const [product, setProduct] = useState( {} )
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    console.log(productId);

    useEffect(() => {
        gFetch()
        .then(data => setProduct(data.find(prod => prod.id === productId)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    })

  return (
    <div className="cardDetalleContenedor">

      {
        loading ? <Loading /> : <ItemDetail product={ product } />
      }

    </div>
  )
}

export default ItemDetailConteiner