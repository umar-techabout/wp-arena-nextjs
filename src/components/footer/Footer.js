
import Image from 'next/image';
import React from 'react';
import FooterLogo from "../../images/wpa-footer-logo.png";
import FacebookIcon from "../../images/wpa-facebook.png";
import TwitterIcon from "../../images/wpa-twitter.png";
import LinkedInIcon from "../../images/wpa-linkedin.png";
import InstagramIcon from "../../images/wpa-instagram.png";
import YoutubeIcon from "../../images/wap-youtube.png";
import GitLabIcon from "../../images/wpa-git-lab.png";

import './Footer.css';
// import '../../app/Media.css'
import Link from 'next/link';
const Footer = () => {
  return (
    <>
      <footer>
        <div className='wpa-footer-banner'>
            <div className='wpa-footer-content wpa-wrapper-sides-spacing'>
                <div className='wpa-pro-services-content'>
                <div className='wpa-footer-logo'>
                    <Image src={ FooterLogo } alt='Footer banner' />
                </div>
                <div className='wpa-footer-description wpa-content-top-bottom-spacing-30'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                </div>
                <div className='wpa-footer-social-links'>
                    <ul className='wpa-flex wpa-gap-10'>
                        <li><Link href={"https://www.facebook.com/WPArena/"} target='blank'><Image src={FacebookIcon} alt='facebook'/></Link></li>
                        <li><Link href={"https://x.com/WPArena"} target='blank'><Image src={TwitterIcon} alt='twitter'/></Link></li>
                        <li><Link href={""} target='blank'><Image src={LinkedInIcon} alt='LinkedIn'/></Link></li>
                        <li><Link href={""} target='blank'><Image src={InstagramIcon} alt='Instagram'/></Link></li>
                        <li><Link href={""} target='blank'><Image src={YoutubeIcon} alt='Youtube'/></Link></li>
                        <li><Link href={""} target='blank'><Image src={GitLabIcon} alt='GitLab'/></Link></li>
                    </ul>
                </div>
                </div>
                <div className='wpa-footer-menu wpa-content-top-bottom-spacing-30'>
                    <ul className='wpa-flex'> 
                        {/* <li><Link href={""}>News</Link></li> */}
                        <li><Link href="/category/news" passHref>News</Link></li>
                        <li><Link href={"/directory"}>Directory</Link></li>
                        <li><Link href="/category/tutorials" passHref>Tutorials</Link></li>
                        <li><Link href={"/dealandcoupons"}>Deals & Coupons</Link></li>
                        <li><Link href="/category/plugins" passHref>Plugins</Link></li>
                        <li><Link href="/category/themes" passHref>Themes</Link></li>
                        <li><Link href={"/advertise"}>Advertise</Link></li>
                        <li><Link href={"/toolkit"}>Toolkit</Link></li>
                        <li><Link href={"/aboutus"}>About Us</Link></li>
                        <li><Link href={"/statistics"}>Statistics</Link></li>
                        <li><Link href={""}>Advanced Search</Link></li>
                        <li><Link href={""}>Free Blog Setup</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
                <div className='wpa-footer-copyright'>
                    <p>Copyright © 2024 · All Rights Reserved · WPArena is a Project of TechAbout LLC.<br/> We are not affiliated with Automattic or WordPress.</p>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
