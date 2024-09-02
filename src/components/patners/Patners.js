import React from 'react';
import patner_icon from "../../images/wpa-patner-capital.png";
import status_group_icon from "../../images/status-group.png"; 
import Patner_Finance_icon from "../../images/patner-finance.png"; 
import Patner_Analysist_Center_icon from "../../images/patner-analysist-center.png";
import Patner_accession_icon from "../../images/patner-accession.png"; 
import Patner_dynamic_icon from "../../images/patner-dynamic.png";
import './Patners.css';
import Image from 'next/image';
import Link from 'next/link';
const Patners = () => {
    const PatnersData =[
        {
            id:1,
            PatnerIcon: patner_icon
        },

        {
            id:2,
            PatnerIcon: status_group_icon
        },

        {
            id:3,
            PatnerIcon: Patner_Finance_icon
        },

        {
            id:4,
            PatnerIcon: Patner_Analysist_Center_icon
        },

        {
            id:5,
            PatnerIcon: Patner_accession_icon
        },

        {
            id:6,
            PatnerIcon: Patner_dynamic_icon
        },

        {
            id:7,
            PatnerIcon: patner_icon
        },

        {
            id:8,
            PatnerIcon: status_group_icon
        }
    ]
  return (
    <>
      <section>
        <div className='wpa-patners-wrapper wpa-wrapper-sides-spacing wpa-flex wpa-gap-70'>

            {PatnersData.map( (elem, index) => (
                <Link href="/" className='wpa-patner-icon' key={elem.id || index}>
                <Image src={elem.PatnerIcon} alt='Patners' />
            </Link>
            ) )}
            
        </div>
      </section>
    </>
  )
}

export default Patners;
