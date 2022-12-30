import Carousel from 'react-bootstrap/Carousel';
import "./Header.css"


const Header = () => {
  return (
    <>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/headerCaslaPrimera.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/headerCaslaSegunda.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/headerCaslaTercera.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
    </>
  )
}

export default Header