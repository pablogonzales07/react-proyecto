import { Link } from 'react-router-dom'
import "./InputCount.css"

const InputCount = () => {
  return (
    <div>
        <Link to="/cart">
            <button className='buttonInput'>Ir al carrito</button>
        </Link>
        <Link to="/">
            <button className='buttonInput'>Seguir comprando</button>
        </Link>

    </div>
  )
}

export default InputCount