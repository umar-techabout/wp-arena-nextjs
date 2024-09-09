'use client'
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS, GET_POSTS_BY_CATEGORY } from '../../../queries'; // Adjust the path as needed
import HeroBanner from '../hero-banner/HeroBanner.js';
import Timeline from '../timeline/Timeline.js';
import TimelineFilterTabs from '../timeline-filter-tabs/TimelineFilterTabs';
import QuizBanner from '../quiz-banner/QuizBanner';
import ProServices from '../pro-services/ProServices';
import FeaturedProducts from '../Featured-Products/FeaturedProducts';
import CouponsAndDeals from '../coupons-and-deals/CouponsAndDeals';
import Listing from '../listing/Listing';
import '../../app/Media.css'
// import '../styles/App.css'; // Adjust the path as needed

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('LATEST'); // Default tab

  const categoryIds = {
    REVIEWS: 9,
    NEWS: 990,
    LATEST: 0,
    Editorial: 7, 
  };

  const categoryId = categoryIds[selectedTab] || categoryIds.LATEST;

  const { loading, error, data } = useQuery(
    categoryId === 0 ? GET_ALL_POSTS : GET_POSTS_BY_CATEGORY,
    {
      variables: categoryId === 0 ? {} : { categoryId },
    }
  );

  if (loading) {
    return (
      <div className="wpa-loader-main">
        <div className="wpa-loader"></div>
      </div>
    );
  }

  if (error) {
    return <p className='wpa-error'>Error fetching posts: {error.message}</p>;
  }

  const posts = data?.posts?.nodes || [];

  // Handle tab change
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <HeroBanner />
      <TimelineFilterTabs selectedTab={selectedTab} onTabChange={handleTabChange} />
      <div className='wpa-wrapper-sides-spacing wpa-home-page-blogs'>
        <Timeline posts={posts} />
      </div>
      <QuizBanner />
      <Listing showgetstartednowbutton={false} />
      <FeaturedProducts />
      <CouponsAndDeals showDis={true} />
    </>
  );
}

export default Home;
