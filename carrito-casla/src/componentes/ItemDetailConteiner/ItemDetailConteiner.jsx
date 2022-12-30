import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailConteiner.css"
import Loading from "../Loading/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailConteiner = () => {
    const [product, setProduct] = useState( {} )
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    
    useEffect(() => {
      const db = getFirestore();
      const queryDoc = doc(db, "productos", productId);
      getDoc(queryDoc)
      .then(resp => setProduct({ id: resp.id, ...resp.data() }))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])



  return (
    <div className="cardsDetailContainer">

      {
        loading ? <Loading /> : <ItemDetail product={ product } />
      }

    </div>
  )
}

export default ItemDetailConteiner