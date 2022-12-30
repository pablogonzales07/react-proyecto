import { ImTwitter, ImFacebook2, ImInstagram, ImYoutube } from "react-icons/im";
import "./Networks.css"

const Networks = () => {
  return (
    <div>
        <ul className='itemsNetworksPresent'>
            <li>
                <a href="https://www.twitter.com/sanlorenzo" target={"_blank"} className="networksIconsPresent">
                    <ImTwitter/>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/sanlorenzo" target={"_blank"} className="networksIconsPresent">
                    <ImFacebook2/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/sanlorenzo" target={"_blank"} className="networksIconsPresent">
                    <ImInstagram/>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/@sanlorenzo" target={"_blank"} className="networksIconsPresent">
                    <ImYoutube/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Networks