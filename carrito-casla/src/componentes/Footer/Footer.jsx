import { ImFacebook2, ImInstagram, ImTwitter, ImYoutube } from 'react-icons/im'
import "./Footer.css"


const Footer = () => {
  return (
    <>
       <footer className="footerContainer">
        <div className="groupOne">
            <div className="box">
                <figure>
                    <a href="#">
                        <img src="/assets/logoDos.png" alt="" />
                    </a>
                </figure>
            </div>
            <div className="box">
                <h2>NUESTRA TIENDA</h2>
                 <p>Somos el Ciclón, ese Ciclón que arrasa a cada rival que enfrenta. Somos Los Matadores, porque los partidos se ganan en el campo de juego, pero también en las tribunas.
                     Ingeniosos, pasionales; creadores de gestas históricas que nos inflan en pecho. Somos el Club Social y deportivo de Boedo.
                      Somos Santos, como el Papa. Somos San Lorenzo. Somos Cuervo… sos cuervo.
                 </p>
            </div>
            <div className="box">
                <h2>NUESTRAS REDES</h2>
                 <div className="networksFooter">
                    <a href="https://www.twitter.com/sanlorenzo" target={"_blank"}>
                        <ImTwitter/>
                    </a>
                    <a href="https://www.facebook.com/sanlorenzo" target={"_blank"}>
                        <ImFacebook2 />
                    </a>
                    <a href="https://www.instagram.com/sanlorenzo" target={"_blank"}>
                        <ImInstagram />
                    </a>
                    <a href="https://www.youtube.com/@sanlorenzo" target={"_blank"}>
                        <ImYoutube/>
                    </a>                   
                 </div>
            </div>
        </div>

        <div className="groupTwo">
            <small>&copy; 2022 <b>TIENDA-CALSA</b> - Todos los derechos reservados</small>
        </div>

       </footer>

    </>
  )
}

export default Footer