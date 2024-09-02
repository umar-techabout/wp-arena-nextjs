
'use client'
import React from 'react'
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import Listing from '@/components/listing/Listing';
import Wpforms from '@/images/wpa-wpforms.png'


const ToolKitData = [
    {
        Id: 1,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "WPForms",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 2,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "All in One SEO (AIOSEO)",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 3,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "MonsterInsights",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 4,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "SeedProd",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 5,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "Easy Digital Downloads",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 6,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "WPCode",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 7,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "Migration & Backup Plugin",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 8,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "Smash Balloon",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 9,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "OptinMonster",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 10,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "Domain.com",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 11,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "Constant Contact",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 12,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "SiteGround",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 13,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "HostGator",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 14,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "JustHost",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },

    {
        Id: 15,
        ProServiceIcon: Wpforms,
        ProServiceTitle: "Web Hosting Hub",
        ProServiceDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an took a galley type and it to a type specimen book."
    },
]

const ToolKit = () => {
    return (
        <>
            <BreadCrumb />
            <div className='wpa-wrapper-sides-spacing'>
                <div className='wpa-h1-font-size wpa-font-weight-700 wpa-pro-services-content wpa-blogs-descriptions'>
                    <h1>WPArena Free Small Business Tools</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                </div>
            </div>
            <Listing data={ ToolKitData } showButton="true"  showDescription="false" showlearnmorebutton="true" showgetstartednowbutton={false} showdescriptionServices={false}/>

        </>
    )
}

export default ToolKit
