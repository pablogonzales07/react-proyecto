import { memo } from 'react';
import { Link } from 'react-router-dom';
import "./List.css"

const List = memo( ({ product }) => {
  return (
    <>
      <div className="cards">
        <img className="cardsImg" src={ product.img }/>
        <div className="cardsBody">
          <h3 className="cardsTitulo">{ product.nombre }</h3>
          <b className="cardsPrecio">{ product.precio }</b>
          <Link to={`/detail/${product.id}`}>
            <button className="cardsBoton">DETALLE</button>
          </Link>
        </div>
      </div>
    </>
    )
  }
)

export default List

