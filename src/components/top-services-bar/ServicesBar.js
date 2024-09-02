'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WordpressBlog_icon from "../../images/wordpress-blog.png";
import ServicesBarIcon from "../../images/services-bar-icon.png";
import './SearchBar.css';

const ServicesBar = () => {
    const MyServicesData = [
        {
            id: 1,
            ServicesIcon: WordpressBlog_icon,
            ServicesTitle: "WordPress Blog",
            ServicesUrl: "/posts",
        },
        {
            id: 2,
            ServicesIcon: WordpressBlog_icon,
            ServicesTitle: "WordPress Hosting",
            ServicesUrl: "/category/hosting",
        },
        {
            id: 3,
            ServicesIcon: WordpressBlog_icon,
            ServicesTitle: "Pro Services",
            ServicesUrl: "/services",
        },
        {
            id: 4,
            ServicesIcon: WordpressBlog_icon,
            ServicesTitle: "Wp Tutorials",
            ServicesUrl: "/category/tutorials",
        },
        {
            id: 5,
            ServicesIcon: WordpressBlog_icon,
            ServicesTitle: "Our Themes",
            ServicesUrl: "/category/themes",
        },
        {
            id: 6,
            ServicesIcon: WordpressBlog_icon,
            ServicesTitle: "Speed Optimization",
            ServicesUrl: "",
        },
    ];

    useEffect(() => {
        const burger = document.querySelector('.js-burger');
        const targetElement = document.querySelector('.services-bar-off-canvas');

        const handleBurgerClick = (event) => {
            event.preventDefault();
            if (targetElement) {
                targetElement.classList.toggle('nav-open');
            }
        };

        burger.addEventListener('click', handleBurgerClick);

        return () => {
            burger.removeEventListener('click', handleBurgerClick);
        };
    }, []);

    return (
        <section>
            <div className='services-bar-off-canvas'>
                <a href="#" className="burger js-burger">
                    <Image src={ServicesBarIcon} alt='ServicesBar' />
                    <i></i>
                </a>

                <nav className="menu">
                    <div className='wpa-services-bar-mobile'>
                        {MyServicesData.map((elem) => (
                            <Link href={elem.ServicesUrl} key={elem.id} className='wpa-services-common wpa-flex wpa-top-services-border wpa-services-inner-paddding wpa-flex-1 services-btn-color'>
                                <div className='wpa-services-icon'>
                                    <Image src={elem.ServicesIcon} alt={elem.ServicesTitle} />
                                </div>
                                <div className='wpa-services-title'>
                                    <h3>{elem.ServicesTitle}</h3>
                                    
                                </div>
                            </Link>
                        ))}
                    </div>
                </nav>

                <div className="overlay"></div>
            </div>
            <div className='wpa-top-servicesbar'>
                <div className='wpa-wrapper-sides-spacing'>
                    <div className='wpa-servicesbar-wrapper wpa-flex wpa-services-gap'>
                        {MyServicesData.map((elem) => (
                            <Link href={elem.ServicesUrl} key={elem.id} className='wpa-services-common wpa-flex wpa-top-services-border wpa-services-inner-paddding wpa-flex-1 services-btn-color'>
                                <div className='wpa-services-icon'>
                                    <Image src={elem.ServicesIcon} alt={elem.ServicesTitle} />
                                </div>
                                <div className='wpa-services-title'>
                                    <h3>{elem.ServicesTitle}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesBar;
