import React from 'react'
import LinkedinShare from "../../assets/images/wpa-linkedin-share.png"
import MessangerShare from "../../assets/images/messenger-share.png"
import FacebookShare from "../../assets/images/facebook-share.png"
import InstagramShare from "../../assets/images/instagram-share.png"
import TwitterShare from "../../assets/images/twitter-share.png"
import WhatsappShare from "../../assets/images/whatsapp-share.png"
import './ShareIcons.css'
import { Link } from 'react-router-dom'
import Image from 'next/image'
const ShareIcons = () => {
  return (
    <>
      <div className='wpa-share-icons-main wpa-flex'>
        <div className='wpa-share-count'><span>1K SHARES</span></div>
        <div className='wpa-share-icone-wrapper wpa-flex wpa-services-gap'>
        <Link to={""} className='wpa-share-icons'>
            <Image src={LinkedinShare} alt='Linkedin' />
        </Link>
        <Link to={""} className='wpa-share-icons'>
            <Image src={MessangerShare} alt='Messanger' />
        </Link>
        <Link to={""} className='wpa-share-icons wpa-facebook'>
            <Image src={FacebookShare} alt='Facebook' />
        </Link>
        <Link to={""} className='wpa-share-icons'>
            <Image src={InstagramShare} alt='Instagram' />
        </Link>
        <Link to={""} className='wpa-share-icons'>
            <Image src={TwitterShare} alt='Twitter' />
        </Link>
        <Link to={""} className='wpa-share-icons'>
            <Image src={WhatsappShare} alt='whatapp' />
        </Link>
        </div>
      </div>
    </>
  )
}

export default ShareIcons
