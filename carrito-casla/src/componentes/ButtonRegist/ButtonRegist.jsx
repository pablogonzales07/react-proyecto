import { Link } from "react-router-dom";
import "./ButtonRegist.css"

const ButtonRegist = () => {
  return (
    <>
      <Link to="/registUser" className='buttonRegistContainer'>
        <button className="buttonRegist">Registrate</button>
      </Link>
    </>
  )
}

export default ButtonRegist