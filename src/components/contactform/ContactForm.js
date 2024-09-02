import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
    return (
        <div className='wpa-wrapper-sides-spacing wpa-color-sky form-section'>
            <div className='wpa-form-padding'>
                <form action=''>
                    <div className='wpa-h3-font-size form-heading'>
                        <h3>PERSONAL</h3>
                    </div>
                    <div className='wpa-form-inner'>
                        <div className='wpa-form-group wpa-flex wpa-menu-items-gap'>
                            <input type='text' placeholder='First Name: *' className='wpa-input-padding-20' />
                            <input type='text' placeholder='Last Name: *' className='wpa-input-padding-20' />
                        </div>
                        <div className='wpa-form-group wpa-flex wpa-content-top-bottom-spacing-30 wpa-menu-items-gap'>
                            <input type='email' placeholder='Email: *' className='wpa-input-padding-20' />
                            <input type='url' placeholder='Website / URL: *' className='wpa-input-padding-20' />
                        </div>
                    </div>
                    <div className='wpa-h3-font-size form-heading'>
                        <h3>AD DETAILS </h3>
                    </div>
                    <div className='wpa-h3-font-size wpa-margin-top'>
                        <h3>Ad Type *</h3>
                    </div>
                    <div className='wpa-flex  wpa-ad-type'>
                      <div className='wpa-radio-wrapper wpa-flex wpa-gap-20'>
                      <input type="radio" id="age1" name="age" value="30" />
                      <label htmlFor="age1">Sidebar Top Full width - $450</label>
                      </div>
                      <div className='wpa-radio-wrapper wpa-flex wpa-gap-20' >
                      <input type="radio" id="age2" name="age" value="60" />
                      <label htmlFor="age2">Sidebar Bottom Full Width - $300</label>
                      </div>
                       <div className='wpa-radio-wrapper wpa-flex wpa-gap-20'>
                       <input type="radio" id="age3" name="age" value="100" />
                       <label htmlFor="age3">Sidebar One of Four Boxes - $200</label>
                       </div>
                    </div>
                    <div className='wpa-form-inner'>
                        <div className='wpa-form-group wpa-flex wpa-menu-items-gap'>
                            <input type='text' placeholder='Ad Name:' className='wpa-input-padding-20' />
                            <input type='url' placeholder='Ad URL:' className='wpa-input-padding-20' />
                            
                        </div>
                        <div className='wpa-form-group wpa-flex wpa-content-top-bottom-spacing-30 wpa-menu-items-gap'>

                            <input type='file' placeholder='Ad Image' className='wpa-input-padding-20' />
                            <input type='number' placeholder='Price: 450' className='wpa-input-padding-20' />
                           
                        </div>
                    </div>
                    <div className="wp-view-more-btn btn-primary-hover"><button type="button">SUBMIT</button>
                   </div>
                   <span className='wpa-block'>Last Updated :July 9/2024</span>

                </form>

            </div>
        </div>
    )
}

export default ContactForm
