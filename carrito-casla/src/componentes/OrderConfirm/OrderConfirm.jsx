import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContextProvider";
import "./OrderConfirm.css"

const OrderConfirm = () => {

const { order } = useCartContext();


  return (
    <div className="boxOrderContainer">
      <h3>SU ORDEN A SIDO COMPLETADA SATISFACTORIAMIENTE</h3>
      <div className="bodyOrderCard">
        <h2>su numero de orden es: { order.id } </h2>
        <p>MUCHAS GRACIAS POR CONFIAR EN NOSOTROS QUEDAMOS A DISPOSICION</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqclV038qlZH4EbTyNWIl-Kf1XGeEDrVTAA&usqp=CAU" alt="" />
      </div>
      <Link to="/">
         <button className="buttonOrderConfirm">VOLVER AL HOME</button>
      </Link>

    </div>
  )
}

export default OrderConfirm