import "./ItemListConteiner.css";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";




const ItemListConteiner = (  ) => {

  const [products, setProducts] = useState( [] )
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

 useEffect(() => {

      const db = getFirestore();
      const queryCollection = collection(db, "productos");
      const queryFiltrada = id ? query(queryCollection, where("categoria", "==", id)) : queryCollection;
      
      getDocs(queryFiltrada)
      .then(data => setProducts( data.docs.map(product => ({ id: product.id, ...product.data() } ) ) ) )
      .catch(err => console.log(err)) 
      .finally(() => setLoading(false))
   
 }, [id])
  
  return (
          <section>
            {
              loading ? <Loading /> 
                     : 
             <ItemList products={ products }/>
            }      
          </section>
  )
}

export default ItemListConteiner