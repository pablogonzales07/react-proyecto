import React from 'react'
import { ImTwitter, ImFacebook2, ImInstagram, ImYoutube, ImTwitch } from "react-icons/im";
import "./Networks.css"

const Networks = () => {
  return (
    <div>
        <ul className='itemsRedes'>
            <li>
                <a href="" target={"_blank"} className="redesIcons">
                    <ImTwitter/>
                </a>
            </li>
            <li>
                <a href="" className="redesIcons">
                    <ImFacebook2/>
                </a>
            </li>
            <li>
                <a href="" className="redesIcons">
                    <ImInstagram/>
                </a>
            </li>
            <li>
                <a href="" className="redesIcons">
                    <ImYoutube/>
                </a>
            </li>
            <li>
                <a href="" className="redesIcons">
                    <ImTwitch/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Networks