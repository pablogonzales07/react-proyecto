import Carousel from 'react-bootstrap/Carousel';
import "./Header.css"


const Header = () => {
  return (
    <>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../public/headerCaslaPrimera.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../public/headerCaslaSegunda.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../public/headerCaslaTercera.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
    </>
  )
}

export default Header