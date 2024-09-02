import React from 'react';
import Timeline from '../timeline/Timeline';
import './BlogCategories.css';
import BreadCrumb from '../breadcrumb/BreadCrumb';

const BlogCategories = () => {
  return (
    <>
      <BreadCrumb/>
      <div className='wpa-wrapper-sides-spacing'>
        <div className='wpa-h1-font-size wpa-font-weight-700 wpa-pro-services-content wpa-blogs-descriptions'>
            <h1>WPArena Opinions Categories</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </div>
      </div>
      <Timeline/>
    </>
  )
}

export default BlogCategories
