import React from 'react'
import AdvertiseBanner from "../../assets/images/advertise-banner.png"
import SizeDimensions from '../../assets/images/size-dimensions.png'
import "./AdvertiseWithUs.css"
import { Link } from 'react-router-dom'
import packageone from '../../assets/images/packageone.jpg'
import packagetwo from '../../assets/images/packagetwo.jpg'
import ContactForm from '../contactform/ContactForm'
import BreadCrumb from '../breadcrumb/BreadCrumb'
import Image from 'next/image'

const AdvertiseWithUs = () => {
    return (
        <>

            <BreadCrumb />
            <div className='wpa-wrapper-sides-spacing'>
                <div className='wpa-h2-font-size wpa-font-weight-600 wpa-pro-services-content wpa-blogs-descriptions'>
                    <h2>Advertise With Us</h2>
                </div>
                <div className='wpa-paragraph-text'>
                <p>We offer banner and link advertisements here on WPArena. Subscriptions will renew every month. Banner advertisements and other ad opportunities are managed by us. Below are the spots available for ads.</p>
                </div>

                <div className='wpa-h2-font-size wpa-font-weight-600'>
                    <h2>Banner Advertisements Spots</h2>
                </div>

                <div className='wpa-h4-font-size wpa-regular-font-weight'>
                            <h4>Banner Specification are below.</h4>
                        </div>

            </div>
            <div className='wpa-wrapper-sides-spacing'>
                {/* <div className='wpa-content-top-bottom-spacing-30 wpa-advertise-banner'>
                    <img src={AdvertiseBanner} alt='Advertise Banner' />
                </div> */}


                <div className='wpa-flex wpa-content-top-bottom-spacing-30 wpa-gap-xxl wpa-pacckages'>
               <div>
               <div className='wpa-h3-font-size wpa-font-weight-600 '>
                     <h3>PACKAGE-1</h3>
                </div>
                   <div> 
                    <Image src={packageone} alt='dfjsdlkdljflkdfj'/>
                
                   </div>
               </div>

                <div>
                <div className='wpa-h3-font-size wpa-font-weight-600 '>
                     <h3>PACKAGE-2</h3>
                </div>
                    <Image src={packagetwo} alt='sfdfsdfsfdfsdfsdf'/>
                </div>
                    <div className='wpa-banner-specification'>

                        <div className='wpa-banner-advertisement-outer'>
                            <div className='wpa-flex wpa-menu-items-gap '>
                                <div className='wpa-banner-advertisement-common-box wpa-text-center'>
                                    <div className='wpa-banner-advertisement-icon'>
                                        <Image src={SizeDimensions} alt='Side Dimension' />
                                    </div>
                                    <div className='wpa-banner-advertisement-heading wpa-h5-font-size wpa-h3-font-size wpa-font-weight-600'>
                                        <h3>SIZE DIMENSIONS</h3>
                                        <h5>150px width</h5>
                                    </div>
                                </div>
                                <div className='wpa-banner-advertisement-common-box wpa-text-center'>
                                    <div className='wpa-banner-advertisement-icon'>
                                        <Image src={SizeDimensions} alt='Side Dimension' />
                                    </div>
                                    <div className='wpa-banner-advertisement-heading wpa-h5-font-size wpa-h3-font-size wpa-font-weight-600'>
                                        <h3>FORMATS</h3>
                                        <h5>.JPEG, .GIF AND .PNG</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='wpa-flex wpa-menu-items-gap wpa-margin-top-30'>
                                <div className='wpa-banner-advertisement-common-box wpa-text-center'>
                                    <div className='wpa-banner-advertisement-icon'>
                                        <Image src={SizeDimensions} alt='Side Dimension' />
                                    </div>
                                    <div className='wpa-banner-advertisement-heading wpa-h5-font-size wpa-h3-font-size wpa-font-weight-600'>
                                        <h3>PRICE</h3>
                                        <h5>$300-450.00</h5>
                                    </div>
                                </div>
                                <div className='wpa-banner-advertisement-common-box wpa-text-center'>
                                    <div className='wpa-banner-advertisement-icon'>
                                        <Image src={SizeDimensions} alt='Side Dimension' />
                                    </div>
                                    <div className='wpa-banner-advertisement-heading wpa-h5-font-size wpa-h3-font-size wpa-font-weight-600'>
                                        <h3>FOR MORE DETAILS</h3>
                                        <h5><Link to="/">Contact Us</Link></h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=' wpa-h2-font-size wpa-paragraph-text wpa-font-weight-600 wpa-margin-botton-on-sm'>
                    <h2>Specifications</h2>
                    <p>If your advertisements query is not listed above, don’t worry, <Link to="">contact us</Link> for more pricing options and details. We are always open to new ideas. Fill the form below to get started.</p>
                </div>
            </div>
            <ContactForm />

        </>
    )
}

export default AdvertiseWithUs
