import React from 'react';
import "./TimelineFilterTabs.css";

const TimelineFilterTabs = ({ selectedTab, onTabChange }) => {
  return (
    <section>
      <div className='wpa-wrapper-sides-spacing'>
        <div className='wpa-flex wpa-right-menu-buttons timeline-filter-tabs wpa-content-top-bottom-spacing-30 wpa-gap-20 btn-dark-hover'>
          <button 
            type='button' 
            className={selectedTab === 'REVIEWS' ? 'active' : ''} 
            onClick={() => onTabChange('REVIEWS')}
          >
            REVIEWS
          </button>
          <button 
            type='button' 
            className={selectedTab === 'NEWS' ? 'active' : ''} 
            onClick={() => onTabChange('NEWS')}
          >
            NEWS
          </button>
          <button 
            type='button' 
            className={selectedTab === 'LATEST' ? 'active' : ''} 
            onClick={() => onTabChange('LATEST')}
          >
            LATEST
          </button>
          <button 
            type='button' 
            className={selectedTab === 'Editorial' ? 'active' : ''} 
            onClick={() => onTabChange('Editorial')}
          >
            Editorial
          </button>
        </div>
        <div className='wpa-line'></div>
      </div>
    </section>
  );
};

export default TimelineFilterTabs;