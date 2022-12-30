import "./FormRegist.css"

const FormRegist = () => {


  return (
    <>
        <form action="" className="formRegist">
            <h4>FORMULARIO DE REGISTRO</h4>
            <input className="controls"  type="text" name="name" id="nombres" placeholder="Ingrese su Nombre"/>
            <input className="controls"  type="text" name="surname" id="apellidos" placeholder="Ingrese su Apellido" />
            <input className="controls"  type="numbers" name="phone" id="telefono" placeholder="Ingrese su Telefono"/>
            <input className="controls"  type="email" name="email" id="correo" placeholder="Ingrese su Correo"/>
            <input className="controls"  type="password" name="password" placeholder="Ingrese su Contraseña"/>
            <p>estoy de acuerdon con <a href="">terminos y condiciones</a></p>
            <input className="buttonFormRegist" type="submit" value={"REGISTRAR"}/>
            <p><a href="">¿Ya tengo cuenta?</a></p>

        </form>

    </>
  )
}

export default FormRegist