import Carousel from 'react-bootstrap/Carousel';
import "./Header.css"


const Header = () => {
  return (
    <>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../public/headerCaslaUno.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../public/headerCaslaDos.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../public/headerCaslaTres.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
    </>
  )
}

export default Header