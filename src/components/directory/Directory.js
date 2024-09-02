import React, { useState, useEffect } from 'react';
import BreadCrumb from '../breadcrumb/BreadCrumb';
import AccordionItem from '../accordion-item/AccordionItem';
import BlogListing from '../bloglisting/BlogListing';
import oceanwptheme from "../../assets/images/oceanwp-theme-review.png";
import responsivethemereview from "../../assets/images/responsive-theme-review.png";
import lawblogwordpress from "../../assets/images/law-blog-wordpress.png";
import best_minecraft from "../../assets/images/5-best-minecraft.png";
import how_to_customize_wordpress_header from "../../assets/images/how-to-customize-wordpress-header.png";
import how_to_customize_wordpress_version from "../../assets/images/how_to_customize_wordpress-version.png";
import how_to_check_wordpress_error_404 from "../../assets/images/how-to-check-wordpress-error-404.png";
import major_and_secondery_search from "../../assets/images/major-and-secondery-search.png";
import top_seo_companies_in_the_world from "../../assets/images/top-seo-companies-in-the-world.png";
import most_useful_wordpress_website from "../../assets/images/most-useful-wordpress-website.png";
import './Directory.css'
import Themes from '../themes/Themes';
const Directory = ({ filterTitle, showSearchBar = true, showLogos = true, disableClick = false, showDescriptionCondition = true }) => {

  const BlogsData = [
    // Your blog data here...
    // Example data:
    {
      id: 1,
      BlogThumbnail: oceanwptheme,
      BlogTitle: "OceanWP Theme Review: An All-Rounder Free WordPress Theme",
      BlogDescription: "OceanWP is an exceptional free WordPress theme that provides a diverse range of premium features, making it a superb choice for any website. Its stylish design and extensive functionality have garnered immense popularity among developers and users alike...",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 2,
      BlogThumbnail: responsivethemereview,
      BlogTitle: "“Responsive” Theme Review – Awesome Free WordPress Template",
      BlogDescription: "Although there are innumerable names in the WordPress forefront that provide quality WordPress themes, however, CyberChimps is a brand that everyone can rely upon. For several years now, this brand has been providing premium and free themes, integrated with advanced features as well as functionalities...",
      BlogAdminName: "Nur ul Ain",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 3,
      BlogThumbnail: lawblogwordpress,
      BlogTitle: "LawBlog WordPress Theme Review",
      BlogDescription: "With the advent of advanced CMS like WordPress, you don’t need advanced technical knowledge like coding to build a website or blog. You can buy a domain within five minutes, install WordPress manually in the next five, and then select a desirable theme for your website...",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 4,
      BlogThumbnail: how_to_customize_wordpress_header,
      BlogTitle: "WoonderShop Review: WooCommerce Theme For Professionals",
      BlogDescription: "Although there are innumerable names in the WordPress forefront that provide quality WordPress themes, however, CyberChimps is a brand that everyone can rely upon. For several years now, this brand has been providing premium and free themes, integrated with advanced features as well as functionalities...",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 5,
      BlogThumbnail: how_to_customize_wordpress_version,
      BlogTitle: "How to Check WordPress Version Easily in Different Ways",
      BlogDescription: "How can you determine the WordPress version of a site without accessing the CMS Backend? The most reliable method is to log in to the “wp-admin” area and check under “Updates”. However, this access may not always be available. You might want to check the WordPress...",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 6,
      BlogThumbnail: how_to_check_wordpress_error_404,
      BlogTitle: "How to Customize WordPress Error 404 Page",
      BlogDescription: "Error 404 pages are crucial for guiding users when a URL seeks a missing page on your website. While it’s common to underestimate the necessity of a 404 page in a WordPress installation, overlooking it can lead to unexpected issues. Despite automatically removing internal links to deleted articles or pages, external links from other websites may continue pointing to your content, disrupting visitors.",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 7,
      BlogThumbnail: most_useful_wordpress_website,
      BlogTitle: "8 Most Unusual WordPress Websites",
      BlogDescription: "The WordPress CMS remains one of the pivotal stakeholders in the internet as we know it. Studies have shown that 45.8% of the entire web is powered by WordPress alone. This staggering number is further bolstered by the sheer variety of themes, plugins, and modification options available...",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 8,
      BlogThumbnail: top_seo_companies_in_the_world,
      BlogTitle: "27 Top SEO Companies in the World",
      BlogDescription: "SEO firms boost businesses by enhancing search engine rankings and operations. They create quality content, build high-quality links, and analyze data for effective outcomes. Proficient SEO analysts offer businesses various benefits and services for increased website traffic...",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 9,
      BlogThumbnail: major_and_secondery_search,
      BlogTitle: "Major and Secondary Search Engines and Directories to Submit Website",
      BlogDescription: "There are a few major search engines, and hundreds of smaller ones that vary in specificity. What benefits can search engines offer to your website? A search engine is software that collects information about web pages. This information includes keywords, phrases, URL, code, and links. The software indexes and stores this information in a database...",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 10,
      BlogThumbnail: oceanwptheme,
      BlogTitle: "Enhancing Security and Trust: The Importance of ID Verification in Your WordPress Site.",
      BlogDescription: "In the digital era, where online interactions and transactions have become the norm, the importance of identity verification cannot be overstated. For WordPress site owners, implementing ID verification is a crucial step towards enhancing security...",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 11,
      BlogThumbnail: oceanwptheme,
      BlogTitle: "Enhancing Website Security: Seamless Authentication and User Management Integration of WordPress with Feather.js",
      BlogDescription: "In the dynamic realm of web development, establishing a secure and user-centric environment stands as a fundamental imperative. The amalgamation of WordPress, renowned for its robust backend capabilities, with the versatile frontend framework Feather.js, presents a compelling avenue...",
      BlogAdminName: "Nur ul Ain",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 12,
      BlogThumbnail: best_minecraft,
      BlogTitle: "5 Best Minecraft Server Hosting Providers (And How to Choose One)",
      BlogDescription: "Are you looking to customize the Minecraft game setup or add players to your fantasy world? If this is the case, you’ll need a Minecraft server hosting provider. However, due to the game’s high resource needs, it can be difficult to find a suitable host...",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"

    },
    {
      id: 13,
      BlogThumbnail: how_to_customize_wordpress_header,
      BlogTitle: "How to Customize WordPress Header: Background Color, Font Size, and Image",
      BlogDescription: "New WordPress users often require assistance with customizing their website header. This includes tasks such as changing the background color and image, adjusting the font size and style, and making various other modifications to enhance the site’s appearance...",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"
    },
    {
      id: 14,
      BlogThumbnail: how_to_customize_wordpress_version,
      BlogTitle: "How to Check WordPress Version Easily in Different Ways",
      BlogDescription: "How can you determine the WordPress version of a site without accessing the CMS Backend? The most reliable method is to log in to the “wp-admin” area and check under “Updates”. However, this access may not always be available. You might want to check the WordPress...",
      BlogAdminName: "Editorial Staff",
      BlogPostDate: "July 8, 2024"
    },

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

  const [openIndex, setOpenIndex] = useState(null);


  useEffect(() => {
    if (!disableClick) {
      setOpenIndex(0); // Open the first item by default if disableClick is false
    }
  }, [disableClick]);

  const filteredCategories = filterTitle ? categories.filter(item => item.title === filterTitle) : categories;
  const filteredLatestListings = filterTitle ? latestListings.filter(item => item.title === filterTitle) : latestListings;

  return (
    <>
      <BreadCrumb />
      
      <section className='wpa-faqs wpa-themes-without-dates wpa-wrapper-sides-spacing'>
      <div class="wpa-h1-font-size wpa-font-weight-700 wpa-p-text wpa-blogs-descriptions margin-bottom-0 wpa-pro-services-content">
        <h1>WPArena Directory</h1>
        <p>Explore the comprehensive wpArena Directory, your ultimate resource for WordPress excellence. Find top-rated plugins, themes, and tools to enhance your website's functionality and design. Stay updated with expert reviews and recommendations tailored to meet your needs. Transform your WordPress experience with the best resources available at wpArena.</p>
        </div>
        <div className="wpa-margin-top-30">
          <div className="wpa-accordion wpa-accordion-direcory">
            {filteredCategories.map((item, index) => (
              <AccordionItem
                key={index}
                isOpen={true} // Always open all items since you don't want click functionality
                data={{ ...item, logo: showLogos ? item.logo : null }}
              />
            ))}

            {filteredLatestListings.map((item, index) => (
              <React.Fragment key={index}>
                <div className='wpa-accordion-title wpa-flex wpa-space-between'><div className='wpa-accordion-title-wrapper'><h3>{item.title}</h3></div></div>
                <section id="conference-timeline" className=" wpa-listings wpa-directory-themes">
                  <BlogListing dataBlog={BlogsData} ButtonText={false} isOpenBlog={true} />
                </section>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Directory;
