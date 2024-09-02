import React from 'react'
import ProWervicesWebsiteDevelopment from "../../images/pro-services-website-development.png";
import Listing from '../listing/Listing';
const ProServicesData = [
    {
        Id: 1,
        ProServiceIcon: ProWervicesWebsiteDevelopment,
        ProServiceTitle: "Website Development",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 2,
        ProServiceIcon: ProWervicesWebsiteDevelopment,
        ProServiceTitle: "Website Plugin Development",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 3,
        ProServiceIcon: ProWervicesWebsiteDevelopment,
        ProServiceTitle: "Website SEO/SEM",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 4,
        ProServiceIcon: ProWervicesWebsiteDevelopment,
        ProServiceTitle: "WordPress Optimize Speed",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 5,
        ProServiceIcon: ProWervicesWebsiteDevelopment,
        ProServiceTitle: "WordPress Maintain",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 6,
        ProServiceIcon: ProWervicesWebsiteDevelopment,
        ProServiceTitle: "WP Fix & Restore",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },
]
const ProServices = () => {
  

  return (
    <>
      <Listing data={ProServicesData} showDescription="true" />
    </>
  )
}

export default ProServices
