import React from 'react'
import { ImTwitter, ImFacebook2, ImInstagram, ImYoutube, ImTwitch } from "react-icons/im";
import "./Networks.css"

const Networks = () => {
  return (
    <div>
        <ul className='itemsRedes'>
            <li>
                <a href="https://www.twitter.com/sanlorenzo" target={"_blank"} className="redesIcons">
                    <ImTwitter/>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/sanlorenzo" target={"_blank"} className="redesIcons">
                    <ImFacebook2/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/sanlorenzo" target={"_blank"} className="redesIcons">
                    <ImInstagram/>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/@sanlorenzo" target={"_blank"} className="redesIcons">
                    <ImYoutube/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Networks