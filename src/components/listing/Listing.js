'use cliet'
import React, { useEffect, useState } from 'react';
import './Listing.css';
import Image from 'next/image';
import { gql } from '@apollo/client';
import client from '../../../lib/apollo-client';
client

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
            altText
          }
        }
      }
    }
  }
`;

export default function Listing({ showdescriptionServices = true, showgetstartednowbutton = true, showlearnmorebutton = false }) {
    const [itemsToShow, setItemsToShow] = useState(9);
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function fetchServices() {
            try {
                const { data } = await client.query({
                    query: GET_SERVICES,
                });
                setServices(data.services.nodes || []);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        }

        fetchServices();
    }, []);

    const loadMore = () => {
        setItemsToShow(itemsToShow + 6);
    };

    return (
        <section>
            <div className='wpa-wrapper-sides-spacing --wpa-section-top-bottom-spacing'>
                {showdescriptionServices && (
                    <div className='wpa-pro-services-content wpa-h2-font-size wpa-paragraph-text wpa-font-weight-600 '>
                        <h2>Pro Services</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries.
                        </p>
                    </div>
                )}

                <div className='wpa-pro-services-wrapper wpa-content-top-bottom-spacing-30 wpa-flex wpa-menu-items-gap '>
                    {services.length > 0 ? (
                        services.slice(0, itemsToShow).map((service) => (
                            <div key={service.databaseId} className='wpa-pro-services-box'>
                                <div className='wpa-pro-services-box-content'>
                                    <div className='wpa-pro-services-box-content-icon wpa-text-center'>
                                        {service.featuredImage && (
                                            <Image
                                                src={service.featuredImage.node.sourceUrl} 
                                                alt={service.featuredImage.node.altText || service.title} 
                                                width={543}
                                                height={267}
                                            />
                                        )}
                                    </div>
                                    <div className='wpa-content-top-bottom-spacing-30 wpa-left-right-padding'>
                                        <div className='wpa-pro-services-box-content-title wpa-text-center line-limit-1'>
                                            <h2>{service.title}</h2>
                                        </div>
                                        <div className='wpa-pro-services-box-content-description wpa-text-center wpa-paragraph-text wpa-line-limit-2'>
                                            <p dangerouslySetInnerHTML={{ __html: service.content }}></p>
                                        </div>
                                        {showgetstartednowbutton && (
                                            <div className="wp-view-more-btn btn-primary-hover wpa-button-center wpa-padding-top-30">
                                                <button>GET STARTED NOW</button>
                                            </div>
                                        )}
                                        {showlearnmorebutton && (
                                            <div className="wp-view-more-btn btn-primary-hover wpa-button-center wpa-padding-top-30">
                                                <button>Learn More</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="wpa-error">No services available</p>
                    )}
                </div>

                {itemsToShow < services.length && (
                    <div className="wp-view-more-btn btn-primary-hover wpa-margin-bottom-20">
                        <button type="button" onClick={loadMore}>
                            LOAD MORE
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
