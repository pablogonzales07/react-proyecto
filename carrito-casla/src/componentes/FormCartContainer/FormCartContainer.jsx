import { useCartContext } from "../../context/CartContextProvider"
import FormCart from "../FormCart/FormCart"
import OrderConfirm from "../OrderConfirm/OrderConfirm"
import "./FormCartContainer.css"


const FormCartContainer = () => {

  const { formOrder } = useCartContext();

  return (

    <>

       {
        formOrder === "form" ? <FormCart /> : <OrderConfirm />
       }

    </>
  )
}

export default FormCartContainer