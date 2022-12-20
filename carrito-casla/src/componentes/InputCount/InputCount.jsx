import React from 'react'
import { Link } from 'react-router-dom'
import "./InputCount.css"

const InputCount = () => {
  return (
    <div>
        <Link to="/cart">
            <button className='botonInput'>Ir al carrito</button>
        </Link>
        <Link to="/">
            <button className='botonInput'>Seguir comprando</button>
        </Link>

    </div>
  )
}

export default InputCount