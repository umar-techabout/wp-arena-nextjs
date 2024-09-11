import Image from 'next/image';
import React, {useState} from 'react';
import wp_arena_top_banner from '../../images/wp-arena-tp-banner.png';
import './HeroBanner.css';

// import { API_BASE_URL } from '../../apiConfig';

const HeroBanner = () => {
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');

        if (!email.includes('.com')) {
            setError('Email must include ".com"');
            return;
        }

        fetch(`${API_BASE_URL}/forms/26/entries`, {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData.entries())),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Form submitted successfully:', data);
            setError('');
        })
        .catch(error => console.error('Error submitting form:', error));
    };

    return (
        <>
            <section>
                <div className='wpa-hero-wrapper'>
                    <div className='wpa-wrapper-sides-spacing wpa-flex wpa-space-between'>
                        <div className='wpa-hero-section-content wpa-section-top-bottom-spacing wpa-h1-font-size wpa-col-4'>
                            <div className='wpa-line-height-h1'>
                                <h1>World's Best Wordpress Tutorials & Resources</h1>
                            </div>
                            <div className='wpa-content-top-bottom-spacing wpa-paragraph-text gray-text-color wpa-font-weight-600 wpa-hero-text-p'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className='wpa-start-now-for-free wpa-margin-top-bottom-20'>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email: *"
                                            required
                                        />
                                    </div>
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    <button type='submit'>Start Now</button>
                                </form>
                            </div>
                        </div>
                        <div className='wpa-herosection-right-image'>
                            <Image src={wp_arena_top_banner} alt='Hero section' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroBanner;