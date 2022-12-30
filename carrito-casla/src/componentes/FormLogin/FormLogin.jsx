import "./FormLogin.css"

const FormLogin = () => {
  return (
    <>
       <form action="" className="formLogin">
          <h4>INICIO DE SESION</h4>
          <input className="controlsLogin" type="email" name="email" placeholder="Ingrese su Email" />
          <input className="controlsLogin" type="password" name="password" placeholder="Ingrese su Contraseña" />
          <input className="buttonLoginForm"type="submit" value={ "INGRESAR" }/>
          <p>¿No estas registrado? <a href="">registrate</a></p>
       </form>
        
    </>
  )
}

export default FormLogin