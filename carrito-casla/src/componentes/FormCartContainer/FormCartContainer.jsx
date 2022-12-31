import { useCartContext } from "../../context/CartContextProvider"
import FormCart from "../FormCart/FormCart"
import Loading from "../Loading/Loading"
import OrderConfirm from "../OrderConfirm/OrderConfirm"
import "./FormCartContainer.css"


const FormCartContainer = () => {

  const { formOrder, loadingOrder } = useCartContext();

  return (

    <>

       {
        formOrder === "form" ? <FormCart /> : 

                                     <> {loadingOrder ? <Loading/> : <OrderConfirm /> } </> 
       }

    </>
  )
}

export default FormCartContainer