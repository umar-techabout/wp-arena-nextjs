'use client'
import React, { useState, useEffect } from 'react';
import BlueHost from "../../images/wpa-bluehost.png";
import './CouponsAndDeals.css';
import { API_BASE_URL } from '../../apiConfig';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

const CouponsAndDeals = ({ showDis, butonLabel = "true" }) => {
    const [deals, setDeals] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/deal`);
                setDeals(response.data);
                setLoading(false);
            } catch (error) {
                setError("Error fetching posts");
                console.error(error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="wpa-loader-main">
                <div className="wpa-loader"></div>
            </div>
        );
    }

    return (
        <>
            <section>
                <div className='wpa-wrapper-sides-spacing wpa-content-top-bottom-spacing-30 wpa-margin-bottom-0'>
                    {showDis ? (
                        <div className='wpa-pro-services-content single-line-text-h2-line-height wpa-h2-font-size wpa-paragraph-text wpa-font-weight-600'>
                            <h2>WPArena Coupons and Deals</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                    ) : null}
                    <div className='wpa-coupons-and-deals-wrapper wpa-flex wpa-menu-items-gap wpa-content-top-bottom-spacing-30'>
                        {deals.map((elem) => (
                            <Link href={"/"} className='wpa-coupons-and-deals-box wpa-flex' key={elem.id}>
                                <div className='border'>
                                    <div className='wpa-coupons-and-deals-box-icon'>
                                        <Image height={300} width={300} src={elem.featured_image} alt={elem.title.rendered} />
                                    </div>
                                </div>
                                <div className='wpa-coupons-and-deals-box-content'>
                                    <div className='wpa-coupons-and-deals-box-titile wpa-h4-font-size wpa-font-weight-600 wpa-btn-dark-color wpa-line-limit-2'>
                                        <h4>{elem.title}</h4>
                                    </div>
                                    <div className='wpa-coupons-and-deals-box-discount wpa-h5-font-size text-color-primary wpa-font-weight-600'>
                                        <h5>{elem.acf_fields['coupons_discount']} %OFF</h5>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {deals.length > 10 && (
                    <div className="wp-view-more-btn btn-primary-hover wpa-button-center">
                        <button type="button">{butonLabel === "true" ? "VIEW ALL" : "LOAD MORE"}</button>
                    </div>
                )}
            </section>
        </>
    );
};

export default CouponsAndDeals;
