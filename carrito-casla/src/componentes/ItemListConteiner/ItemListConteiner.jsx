import "./ItemListConteiner.css";
import { useState, useEffect } from "react";
import { gFetch } from "../../helpers/gFetch";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";




const ItemListConteiner = ( { greeting } ) => {

  const [products, setProducts] = useState( [] )
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  console.log( id );
  
  useEffect(() => {

    if(id){
      gFetch()
      .then(data => setProducts(data.filter(prod => prod.categoria === id)))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
    }
    else{
      gFetch()
      .then(data => setProducts(data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))

    }
  }, [id])

  return (
          <section>
            <p>{greeting}</p>
            {
              loading ? <Loading /> 
                     : 
             <ItemList products={ products }/>
            }      
          </section>
  )
}

export default ItemListConteiner