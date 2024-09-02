'use client'
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import testimonial01 from '../../images/wpa-testimonial.png'
import testimonial02 from "../../images/wpa-testimonial-2.png";
import testimonial03 from "../../images/wpa-testimonial-3.png";
import RatingStar from "../../images/rating-star.png";
import './Testimonial.css';

const Testimonial = () => {
    // Data
    const initialImages = [
        {
            img: testimonial01,
            name: "Ayantan Mitra -",
            sname: "Cogitent Ventures",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
            img: testimonial02,
            name: "Ayantan Mitra -",
            sname: "Cogitent Ventures",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
            img: testimonial03,
            name: "Ayantan Mitra -",
            sname: "Cogitent Ventures",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
            img: testimonial01,
            name: "Ayantan Mitra -",
            sname: "Cogitent Ventures",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
            img: testimonial01,
            name: "Ayantan Mitra -",
            sname: "Cogitent Ventures",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
    ];

    // Carousel
    const Carousel = () => {
        const [images, setImages] = useState(initialImages);
        const [currentIndex, setCurrentIndex] = useState(0);

        const moveItems = useCallback(() => {
            const nextIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(nextIndex);
        }, [currentIndex, images.length]);

        useEffect(() => {
            const interval = setInterval(() => {
                moveItems();
            }, 3000); // Change the interval (in milliseconds) as desired

            return () => clearInterval(interval);
        }, [moveItems]);

        const handleItemClick = (index) => {
            setCurrentIndex(index);
        };

        const handleDotClick = (index) => {
            setCurrentIndex(index);
        };

        // Function to create a circular index based on the current index and array length
        const getCircularIndex = (index, length) => {
            return (index + length) % length;
        };

        return (
            <div className="carousel-container wpa-pro-services-content">
                <div className="d-flex flex-column">
                    <div className="carousel-items">
                        {/* Render 5 items on the screen */}
                        {Array(5)
                            .fill()
                            .map((_, index) => {
                                const imageItem =
                                    images[
                                        getCircularIndex(currentIndex + index - 2, images.length)
                                    ];
                                return (
                                    <div
                                        key={index}
                                        className={`${index === 2 ? "center" : "opacity"} ${
                                            (index === 0 || index === 4) &&
                                            " d-md-block d-lg-block"
                                        }
                                          ${
                                            (index === 1 || index === 3) &&
                                            "d-none d-md-block d-lg-block"
                                          }`}
                                        onClick={() =>
                                            handleItemClick(
                                                getCircularIndex(currentIndex + index - 2, images.length)
                                            )
                                        }
                                    >
                                        <Image src={imageItem.img} alt="item" />
                                    </div>
                                );
                            })}
                    </div>
                    <div>
                        {/* Render the current item description */}
                        <div className="description">
                            <div className='ratingstar wpa-flex'>
                                <Image src={RatingStar} alt='rating star' />
                                <Image src={RatingStar} alt='rating star' />
                                <Image src={RatingStar} alt='rating star' />
                                <Image src={RatingStar} alt='rating star' />
                                <Image src={RatingStar} alt='rating star' />
                            </div>
                            <div className='wpa-paragraph-text'>
                                <p>{images[currentIndex].desc}</p>
                                <p className='wpa-content-top-bottom-spacing'>
                                    <span>{images[currentIndex].name}</span> {images[currentIndex].sname}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentIndex === index ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='wpa-wrapper-sides-spacing'>
            <div className='wpa-h4-font-size testimonal-main wpa-h2-font-size'>
                <h4><em>Testimonial</em></h4>
                <h2>People Talking About Us</h2>
            </div>
            <Carousel />
        </div>
    );
};

export default Testimonial;