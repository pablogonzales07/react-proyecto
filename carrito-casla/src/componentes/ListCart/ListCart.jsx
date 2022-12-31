import { useCartContext } from "../../context/CartContextProvider";
import CardsCart from "../CardsCart/CardsCart";
import "./ListCart.css"

const ListCart = () => {
    
  const { cartList} = useCartContext();

  return (
    <div className='cardsCartContainer'>

      {cartList.map(producto => <CardsCart key={producto.id} producto={ producto }/>)}

    </div>
  )
}

export default ListCart