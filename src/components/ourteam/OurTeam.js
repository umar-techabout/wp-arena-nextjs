import Image from 'next/image';
import TeamZeshanSarwar from "../../images/wpa-team-zeeshan-sarwar.png";
import zahrakashif from '../../images/zahra-kashif.png';
import muhammadomerali from "../../images/muhammad-omer-ali.png";
import ShahidAnwer from "../../images/wpa-shahid-anwer.jpg";
import jhazibZaman from "../../images/jhazib-zaman.jpg";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import './OurTeam.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 576 },
        items: 3,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 575, min: 480 },
        items: 2,
        slidesToSlide: 1,
        arrows: true,
    },
    sm_mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1,
        slidesToSlide: 1,
        arrows: false,
    },
};

const teamMembers = [
    { name: 'Shahid Anwer', designation: 'Chief Technology Officer', image: ShahidAnwer },
    { name: 'Muhammad Zeeshan Sarwar', designation: 'Chief Executive Officer', image: jhazibZaman },
    { name: 'Muhammad Omer Ali', designation: 'Chief Financial Officer', image: muhammadomerali },
    { name: 'Zahra Kashif', designation: 'HR Lead / Project Engineer', image: zahrakashif },
];

const OurTeam = () => {
    return (
        <div className='wpa-our-team-main'>
            <div className='wpa-wrapper-sides-spacing wpa-h2-font-size'>
                <h2>OUR TEAM</h2>
                <div className='wpa-our-team wpa-flex wpa-menu-items-gap'>
                    <div className='wpa-our-team-common '>
                        <div className='wpa-our-team-thumbnial'>
                            <Image src={TeamZeshanSarwar} alt='Nouman S. Ghuman' />
                        </div>
                        <div className='wpa-h4-font-size wpa-team-content'>
                            <span>Managing Director</span>
                            <h4>Nouman S. Ghuman</h4>
                        </div>
                    </div>
                    <div className='wpa-our-team-common '>
                        <div className='wpa-our-team-thumbnial'>
                            <Image src={TeamZeshanSarwar} alt='Muhammad Zeeshan Sarwar' />
                        </div>
                        <div className='wpa-h4-font-size wpa-team-content'>
                            <span>Director & Creative Editor</span>
                            <h4>Muhammad Zeeshan Sarwar</h4>
                        </div>
                    </div>
                    <div className='wpa-our-team-common wpa-h4-font-size'>
                        <div className='wpa-our-team-thumbnial'>
                            <Image src={muhammadomerali} alt='Muhammad Omer Ali' />
                        </div>
                        <div className='wpa-h4-font-size wpa-team-content'>
                            <span>Chief Financial Officer</span>
                            <h4>Muhammad Omer Ali</h4>
                        </div>
                    </div>
                    <div className='wpa-our-team-common '>
                        <div className='wpa-our-team-thumbnial'>
                            <Image src={zahrakashif} alt='Zahra Kashif' />
                        </div>
                        <div className='wpa-h4-font-size wpa-team-content'>
                            <span>HR Lead / Project Engineer</span>
                            <h4>Zahra Kashif</h4>
                        </div>
                    </div>
                </div>

                {/* <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    showDots={false}
                    arrows={false}
                >
                    {teamMembers.map((member, index) => (
                        <div key={index} className='wpa-our-team-common wpa-h4-font-size'>
                            <div className='wpa-our-team-thumbnial'>
                                <Image src={member.image} alt={member.name} />
                            </div>
                            <div className='wpa-h4-font-size wpa-team-content'>
                                <span>{member.designation}</span>
                                <h4>{member.name}</h4>
                            </div>
                        </div>
                    ))}
                </Carousel> */}

                <div className='btn-dark btn-primary-hover btn-primary'>
                    <button type="button">VIEW MORE</button>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
