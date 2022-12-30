import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import FormCart from "../FormCart/FormCart"
import OrderConfirm from "../OrderConfirm/OrderConfirm"
import "./FormCartContainer.css"


const FormCartContainer = () => {

  const { formOrder } = useContext(CartContext);

  return (

    <>

       {

        formOrder === "form" ? <FormCart /> : <OrderConfirm />

       }

      


    </>
  )
}

export default FormCartContainer