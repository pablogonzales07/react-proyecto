import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./FormCart.css"

const FormCart = () => {

  const { handleOnChange, dataForm, order, addOrder} = useContext(CartContext);
  



  return (
    <div>

        <form action="" className="formCart" onSubmit={ addOrder }>
            <h4>COMPLETE EL FORMULARIO PARA FINALIZAR LA COMPRA</h4>
            <input className="controls" onChange={ handleOnChange } value={ dataForm.name } type="text" name="name" id="nombres" placeholder="Ingrese su Nombre"/>
            <input className="controls" onChange={ handleOnChange } value={ dataForm.surname } type="text" name="surname" id="apellidos" placeholder="Ingrese su Apellido" />
            <input className="controls" onChange={ handleOnChange } value={ dataForm.phone } type="numbers" name="phone" id="telefono" placeholder="Ingrese su Telefono"/>
            <input className="controls" onChange={ handleOnChange } value={ dataForm.email } type="email" name="email" id="correo" placeholder="Ingrese su Correo"/>
            <input className="controls" onChange={ handleOnChange } value={ dataForm.emailConfirm} type="email" name="emailConfirm" id="correoConfirmacion" placeholder="Confirme su correo electronico"/>
            <button className="buttonFormCart" onClick={ addOrder }>FINALIZAR</button>
        </form>

        <p> { order.id } </p>
    </div>
  )
}

export default FormCart