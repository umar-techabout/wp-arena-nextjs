
import React from 'react';
import AccordionItem from '@/components/accordion-item/AccordionItem';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import BlogListing from '@/components/bloglisting/BlogListing';
import oceanwptheme from "@/images/oceanwp-theme-review.png";
import responsivethemereview from "@/images/responsive-theme-review.png";
import lawblogwordpress from "@/images/law-blog-wordpress.png";
import best_minecraft from "@/images/5-best-minecraft.png";
import how_to_customize_wordpress_header from "@/images/how-to-customize-wordpress-header.png";
import how_to_customize_wordpress_version from "@/images/how_to_customize_wordpress-version.png";
import how_to_check_wordpress_error_404 from "@/images/how-to-check-wordpress-error-404.png";
import major_and_secondery_search from "@/images/major-and-secondery-search.png";
import top_seo_companies_in_the_world from "@/images/top-seo-companies-in-the-world.png";
import most_useful_wordpress_website from "@/images/most-useful-wordpress-website.png";
import './Directory.css';
import Themes from '@/components/themes/Themes';

const Directory = ({ filterTitle, showSearchBar = true, showLogos = true, disableClick = false, showDescriptionCondition = true }) => {

  const BlogsData = [
    {
      id: 1,
      BlogThumbnail: oceanwptheme,
      BlogTitle: "OceanWP Theme Review: An All-Rounder Free WordPress Theme",
      BlogDescription: "OceanWP is an exceptional free WordPress theme that provides a diverse range of premium features, making it a superb choice for any website...",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 2,
      BlogThumbnail: responsivethemereview,
      BlogTitle: "“Responsive” Theme Review – Awesome Free WordPress Template",
      BlogDescription: "CyberChimps is a brand that everyone can rely upon. It has been providing premium and free themes, integrated with advanced features...",
      BlogAdminName: "Nur ul Ain",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 3,
      BlogThumbnail: lawblogwordpress,
      BlogTitle: "LawBlog WordPress Theme Review",
      BlogDescription: "With the advent of advanced CMS like WordPress, you don’t need advanced technical knowledge to build a website...",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"
    },
    // ...Other blog entries
  ];

  const categories = [
    {
      title: "Browse our top categories",
    }
  ];

  const latestListings = [
    {
      title: "Latest listings in our top categories",
    }
  ];

  const filteredCategories = filterTitle ? categories.filter(item => item.title === filterTitle) : categories;
  const filteredLatestListings = filterTitle ? latestListings.filter(item => item.title === filterTitle) : latestListings;

  return (
    <>
      <BreadCrumb />
      
      <section className='wpa-faqs wpa-themes-without-dates wpa-wrapper-sides-spacing'>
        <div className="wpa-h1-font-size wpa-font-weight-700 wpa-p-text wpa-blogs-descriptions margin-bottom-0 wpa-pro-services-content">
          <h1>WPArena Directory</h1>
          <p>Explore the comprehensive wpArena Directory, your ultimate resource for WordPress excellence...</p>
        </div>
        
        <div className="wpa-margin-top-30">
          <div className="wpa-accordion wpa-accordion-direcory">
            {filteredCategories.map((item, index) => (
              <AccordionItem
                key={index}
                isOpen={true} // Accordion items will always be open
                data={{ ...item, logo: showLogos ? item.logo : null }}
              />
            ))}

            {filteredLatestListings.map((item, index) => (
              <React.Fragment key={index}>
                <div className='wpa-accordion-title wpa-flex wpa-space-between'>
                  <div className='wpa-accordion-title-wrapper'>
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <section id="conference-timeline" className="wpa-listings wpa-directory-themes">
                  <BlogListing dataBlog={BlogsData} ButtonText={false} isOpenBlog={true} />
                </section>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Directory;
