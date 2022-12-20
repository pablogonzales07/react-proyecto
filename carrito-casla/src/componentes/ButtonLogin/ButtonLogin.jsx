import React from 'react'
import { Link } from 'react-router-dom'
import "./ButtonLogin.css"

const ButtonLogin = () => {
  return (
    <>
       <Link to="/loginUser" className='buttonRegistContainer'>
         <button className="buttonLogin">Inicia sesion</button>
       </Link>
    </>
  )
}

export default ButtonLogin