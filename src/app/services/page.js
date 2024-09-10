'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import './Services.css';
import { gql } from '@apollo/client';
import WordpressInstallationServices from "@/images/wordpress-installation-services.png";
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import Listing from '@/components/listing/Listing';

const ServicesData = [
    // Your service data here
    // ...
];

export const GET_SERVICES = gql`
  query GetServices {
    services {
      nodes {
        databaseId
        title 
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

const Services = () => {
    const router = useRouter(); // Use useRouter instead of useLocation
    const [visibleServices, setVisibleServices] = useState(9);

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
                    <p>WPArena is a WordPress development company that offers a wide range of services. Our team of experienced programmers specializes in WordPress web development. It can provide services such as HTML to WordPress development, PSD to WordPress conversion, WordPress plug-in development, theme development, and more. We excel at tackling any WordPress challenge and delivering high-quality services of any complexity.

As an offshore company, our clients benefit from lower production costs and working with industry experts. As your WordPress web development company, we guarantee top-quality and timely delivery. Our transparent policies enable you to monitor the entire development process, from idea conceptualization to final product delivery.

We have equipped our team with the knowledge necessary to outperform others in WordPress web development through ongoing training in current trends. At WPArena, we prioritize 100% customer satisfaction. We offer immediate communication with our team and provide regular reports to track the progress of our WordPress development services for clients.

Using WPArena Services not only reduces cost but also allows customization. Our team is committed to delivering quality solutions. With us, you benefit from a team experienced in WordPress web development and a variety of packages to choose from. We offer budget-friendly service packages.</p>
                </div>
            </div>
            <div className='wpa-services-boxes wpa-services-listing-page'>
                <Listing data={ServicesData.slice(0, visibleServices)} showdescriptionServices={false} showButton="false" ShowGetStartedNowButton="true" showlearnmorebutton={false} showLoadMore="false"/>
            </div>
        </>
    )
}

export default Services;
