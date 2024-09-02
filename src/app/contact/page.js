'use client'
import React from 'react'
import '../../components/contactform/ContactForm.css'

const ContactUs = () => {
    return (
        <>
            <div className='wpa-wrapper-sides-spacing'>
                <div className='wpa-h2-font-size wpa-font-weight-600 wpa-margin-top-10'>
                    <h2>Contact Us</h2>
                </div>

                <div className='wpa-paragraph-text'>
                    <p>Have questions, feedback, or need assistance? We're here to help! Reach out to us anytime, and our team will get back to you promptly. Your inquiries are important to us at WPArena.</p>
                </div>
            </div>
            <div className='wpa-wrapper-sides-spacing wpa-color-sky form-section'>
                <div className='wpa-form-padding'>
                    <form action=''>
                        <div className='wpa-h3-font-size form-heading'>
                            <h3>Contact Us</h3>
                        </div>
                        <div className='wpa-form-inner'>
                            <div className='wpa-form-group wpa-flex wpa-menu-items-gap'>
                                <input type='text' placeholder='Name: *' className='wpa-input-padding-20' />
                                <input type='email' placeholder='Email: *' className='wpa-input-padding-20' />
                            </div>
                            <div className='wpa-form-group wpa-flex wpa-content-top-bottom-spacing-30 wpa-menu-items-gap'>
                                <select className='wpa-input-padding-20'>
                                    <option>WpArena Pro Services-1</option>
                                    <option>WpArena Pro Services-2</option>
                                    <option>WpArena Pro Services-3</option>
                                    <option>WpArena Pro Services-4</option>
                                </select>
                                <textarea className='wpa-input-padding-20' placeholder='Message'></textarea>
                            </div>
                            <div className='wpa-flex  wpa-ad-type wpa-padding-bottom-20px'>
                                <div className='wpa-radio-wrapper wpa-flex wpa-gap-20'>
                                    <input type="radio" id="updates" name="age" value="30" />
                                    <label htmlFor="updates">Yes, I would like to receive weekly WordPress tutorials and other updates from WPBeginner.</label>
                                </div>
                            </div>
                        </div>
                        <div className="wp-view-more-btn btn-primary-hover">
                            <button type="button">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs
