import React, {useState, useLocation} from 'react'
import BreadCrumb from '../breadcrumb/BreadCrumb'
import './Services.css';
import Listing from '../listing/Listing'
import { useQuery } from '@apollo/client';
import { GET_SERVICES } from '../../../queries'
// import WordpressInstallationServices from "../../assets/images/wordpress-installation-services.png";
import WordpressInstallationServices from "@/images/wordpress-installation-services.png";

const ServicesData = [
    {
        Id: 1,
        ProServiceIcon: WordpressInstallationServices,
        ProServiceTitle: "WordPress Installation Service",
        ProServiceDescription: "Get your WordPress site up and running quickly with our installation service."
    },

    {
        Id: 2,
        ProServiceIcon: WordpressInstallationServices,
        ProServiceTitle: "WordPress Optimization Service",
        ProServiceDescription: "Optimize your WordPress site for speed and performance with our expert services."
    },

    {
        Id: 3,
        ProServiceIcon: WordpressInstallationServices,
        ProServiceTitle: "WordPress Upgrade Service",
        ProServiceDescription: "Keep your WordPress site updated with the latest features and security patches"
    },

    {
        Id: 4,
        ProServiceIcon: WordpressInstallationServices,
        ProServiceTitle: "WordPress Web Development",
        ProServiceDescription: "Get a fully customized WordPress site developed to meet your specific needs."
    },

    {
        Id: 5,
        ProServiceIcon: WordpressInstallationServices,
        ProServiceTitle: "Dedicated WordPress Development",
        ProServiceDescription: "Hire dedicated WordPress developers to work on your projects."
    },

    {
        Id: 6,
        ProServiceIcon: WordpressInstallationServices,
        ProServiceTitle: "Theme Integration / Development",
        ProServiceDescription: "Hire an expert WordPress developer to handle your site maintenance and updates."
    },

    {
        Id: 7,
        ProServiceIcon: WordpressInstallationServices,
        ProServiceTitle: "E-commerce",
        ProServiceDescription: "Set up a fully functional e-commerce store with WordPress and WooCommerce."
    },

    {
        Id: 8,
        ProServiceIcon: WordpressInstallationServices,
        ProServiceTitle: "Custom WordPress Development",
        ProServiceDescription: "Get bespoke WordPress solutions tailored to your specific business needs."
    },

    {
        Id: 9,
        ProServiceIcon: WordpressInstallationServices,
        ProServiceTitle: "TWordPress Writing Services",
        ProServiceDescription: "Enhance your site’s content with our professional WordPress writing services."
    },
]

const Services = () => {
    const [visibleServices, setVisibleServices] = useState(9);
    const { loading, error, data } = useQuery(GET_SERVICES);

    const loadMoreServices = () => {
        setVisibleServices(prevVisibleServices => prevVisibleServices + 5);
    };
    return (
        <>
            <BreadCrumb />
            <div className='wpa-wrapper-sides-spacing'>
                <div className='wpa-h1-font-size wpa-font-weight-700 wpa-p-text wpa-blogs-descriptions margin-bottom-0'>
                    <h1>WPArena Services</h1>
                    <p>With the rising popularity of e-commerce, various platforms have been coming up. Recently, WordPress has emerged as one of the most powerful and favored platforms. With a huge community devoting time and effort to developing a WordPress development platform, it has become a preferred choice for e-commerce solutions amongst developers.</p>
                </div>
                <div className='wpa-h2-font-size wpa-font-weight-600 wpa-paragraph-text wpa-blogs-descriptions wpa-p-text wpa-content-top-bottom-spacing-30'>
                    <h2>Why Choose WPArena?</h2>
                    <p>WPArena is a WordPress development company that offers a wide range of services. Our team of experienced programmers specializes in WordPress web development. It can provide services such as HTML to WordPress development, PSD to WordPress conversion, WordPress plug-in development, theme development, and more. We excel at tackling any WordPress challenge and delivering high-quality services of any complexity.</p>
                    <p> As an offshore company, our clients benefit from lower production costs and working with industry experts. As your WordPress web development company, we guarantee top-quality and timely delivery. Our transparent policies enable you to monitor the entire development process, from idea conceptualization to final product delivery.</p>
                    <p>We have equipped our team with the knowledge necessary to outperform others in WordPress web development through ongoing training in current trends. At WPArena, we prioritize 100% customer satisfaction. We offer immediate communication with our team and provide regular reports to track the progress of our WordPress development services for clients.</p>
                    <p>Using WPArena Services not only reduces cost but also allows customization. Our team is committed to delivering quality solutions. With us, you benefit from a team experienced in WordPress web development and a variety of packages to choose from. We offer budget-friendly service packages.</p>
                </div>
            </div>
            <div className='wpa-services-boxes wpa-services-listing-page'>
                <Listing data={ServicesData.slice(0, visibleServices)} showdescriptionServices={false}  showButton="false" ShowGetStartedNowButton="true" showlearnmorebutton={false} showLoadMore="false"/>
            </div>
            {/* {visibleServices < ServicesData.length && (
                <div className='wpa-load-more wp-view-more-btn btn-primary-hover wpa-button-center'>
                    <button onClick={loadMoreServices} className='load-more-button'>Load More</button>
                </div>
                 )} */}
        </>
    )
}


export default Services
