import React, {useState} from 'react'
import share_post_icon from "../../assets/images/share-icon.png";
import enhancing_security_and_trust from "../../assets/images/enhancing-security-and-trust.png";
import enhancing_website_security from "../../assets/images/ehhancing-website-security.png";
import best_minecraft from "../../assets/images/5-best-minecraft.png";
import how_to_customize_wordpress_header from "../../assets/images/how-to-customize-wordpress-header.png";
import how_to_customize_wordpress_version from "../../assets/images/how_to_customize_wordpress-version.png";
import how_to_check_wordpress_error_404 from "../../assets/images/how-to-check-wordpress-error-404.png";
import major_and_secondery_search from "../../assets/images/major-and-secondery-search.png";
import top_seo_companies_in_the_world from "../../assets/images/top-seo-companies-in-the-world.png";
import most_useful_wordpress_website from "../../assets/images/most-useful-wordpress-website.png";
import { Link } from 'react-router-dom';
import "./Blogs.css";
import Image from 'next/image';
const Blogs = () => {
    const BlogsData = [
        {
            id: 1,
            BlogThumbnail: enhancing_security_and_trust,
            BlogTitle: "Enhancing Security and Trust: The Importance of ID Verification in Your WordPress Site.",
            BlogDescription: "In the digital era, where online interactions and transactions have become the norm, the importance of identity verification cannot be overstated. For WordPress site owners, implementing ID verification is a crucial step towards enhancing security...",
            BlogAdminName: "Editorial Staff"
        },
        {
            id: 2,
            BlogThumbnail: enhancing_website_security,
            BlogTitle: "Enhancing Website Security: Seamless Authentication and User Management Integration of WordPress with Feather.js",
            BlogDescription: "In the dynamic realm of web development, establishing a secure and user-centric environment stands as a fundamental imperative. The amalgamation of WordPress, renowned for its robust backend capabilities, with the versatile frontend framework Feather.js, presents a compelling avenue...",
            BlogAdminName: "Nur ul Ain"
        },
        {
            id: 3,
            BlogThumbnail: best_minecraft,
            BlogTitle: "5 Best Minecraft Server Hosting Providers (And How to Choose One)",
            BlogDescription: "Are you looking to customize the Minecraft game setup or add players to your fantasy world? If this is the case, you’ll need a Minecraft server hosting provider. However, due to the game’s high resource needs, it can be difficult to find a suitable host...",
            BlogAdminName: "Editorial Staff"
        },
        {
            id: 4,
            BlogThumbnail: how_to_customize_wordpress_header,
            BlogTitle: "How to Customize WordPress Header: Background Color, Font Size, and Image",
            BlogDescription: "New WordPress users often require assistance with customizing their website header. This includes tasks such as changing the background color and image, adjusting the font size and style, and making various other modifications to enhance the site’s appearance...",
            BlogAdminName: "Editorial Staff"
        },
        {
            id: 5,
            BlogThumbnail: how_to_customize_wordpress_version,
            BlogTitle: "How to Check WordPress Version Easily in Different Ways",
            BlogDescription: "How can you determine the WordPress version of a site without accessing the CMS Backend? The most reliable method is to log in to the “wp-admin” area and check under “Updates”. However, this access may not always be available. You might want to check the WordPress...",
            BlogAdminName: "Editorial Staff"
        },
        {
            id: 6,
            BlogThumbnail: how_to_check_wordpress_error_404,
            BlogTitle: "How to Customize WordPress Error 404 Page",
            BlogDescription: "Error 404 pages are crucial for guiding users when a URL seeks a missing page on your website. While it’s common to underestimate the necessity of a 404 page in a WordPress installation, overlooking it can lead to unexpected issues. Despite automatically removing internal links to deleted articles or pages, external links from other websites may continue pointing to your content, disrupting visitors.",
            BlogAdminName: "Editorial Staff"
        },
        {
            id: 7,
            BlogThumbnail: most_useful_wordpress_website,
            BlogTitle: "8 Most Unusual WordPress Websites",
            BlogDescription: "The WordPress CMS remains one of the pivotal stakeholders in the internet as we know it. Studies have shown that 45.8% of the entire web is powered by WordPress alone. This staggering number is further bolstered by the sheer variety of themes, plugins, and modification options available...",
            BlogAdminName: "Editorial Staff"
        },
        {
            id: 8,
            BlogThumbnail: top_seo_companies_in_the_world,
            BlogTitle: "27 Top SEO Companies in the World",
            BlogDescription: "SEO firms boost businesses by enhancing search engine rankings and operations. They create quality content, build high-quality links, and analyze data for effective outcomes. Proficient SEO analysts offer businesses various benefits and services for increased website traffic...",
            BlogAdminName: "Editorial Staff"
        },
        {
            id: 9,
            BlogThumbnail: major_and_secondery_search,
            BlogTitle: "Major and Secondary Search Engines and Directories to Submit Website",
            BlogDescription: "There are a few major search engines, and hundreds of smaller ones that vary in specificity. What benefits can search engines offer to your website? A search engine is software that collects information about web pages. This information includes keywords, phrases, URL, code, and links. The software indexes and stores this information in a database...",
            BlogAdminName: "Editorial Staff"
        },
        {
            id: 10,
            BlogThumbnail: enhancing_security_and_trust,
            BlogTitle: "Enhancing Security and Trust: The Importance of ID Verification in Your WordPress Site.",
            BlogDescription: "In the digital era, where online interactions and transactions have become the norm, the importance of identity verification cannot be overstated. For WordPress site owners, implementing ID verification is a crucial step towards enhancing security...",
            BlogAdminName: "Editorial Staff"
        },
        {
            id: 11,
            BlogThumbnail: enhancing_website_security,
            BlogTitle: "Enhancing Website Security: Seamless Authentication and User Management Integration of WordPress with Feather.js",
            BlogDescription: "In the dynamic realm of web development, establishing a secure and user-centric environment stands as a fundamental imperative. The amalgamation of WordPress, renowned for its robust backend capabilities, with the versatile frontend framework Feather.js, presents a compelling avenue...",
            BlogAdminName: "Nur ul Ain"
        },
        {
            id: 12,
            BlogThumbnail: best_minecraft,
            BlogTitle: "5 Best Minecraft Server Hosting Providers (And How to Choose One)",
            BlogDescription: "Are you looking to customize the Minecraft game setup or add players to your fantasy world? If this is the case, you’ll need a Minecraft server hosting provider. However, due to the game’s high resource needs, it can be difficult to find a suitable host...",
            BlogAdminName: "Editorial Staff"
        },
        {
            id: 13,
            BlogThumbnail: how_to_customize_wordpress_header,
            BlogTitle: "How to Customize WordPress Header: Background Color, Font Size, and Image",
            BlogDescription: "New WordPress users often require assistance with customizing their website header. This includes tasks such as changing the background color and image, adjusting the font size and style, and making various other modifications to enhance the site’s appearance...",
            BlogAdminName: "Editorial Staff"
        },
        {
            id: 14,
            BlogThumbnail: how_to_customize_wordpress_version,
            BlogTitle: "How to Check WordPress Version Easily in Different Ways",
            BlogDescription: "How can you determine the WordPress version of a site without accessing the CMS Backend? The most reliable method is to log in to the “wp-admin” area and check under “Updates”. However, this access may not always be available. You might want to check the WordPress...",
            BlogAdminName: "Editorial Staff"
        },
    ];
    const [visibleBlogs, setVisibleBlogs] = useState(9);

    const loadMoreBlogs = () => {
        setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 5);
    };
  return (
    <>
       <section id="conference-timeline" className="wpa-wrapper-sides-spacing">
                <div className=''>
                    <div>
                    <div className="conference-timeline-content">
                        <div className="timeline-article">
                            {BlogsData.slice(0, visibleBlogs).map((elem) => (
                                <div className='relative' key={elem.id}>
                                    <div className="content-right-container">
                                        <div className="content-right wpa-flex wpa-gap-40">
                                            <div>
                                                <div className='wpa-blog-list-thumbnail'>
                                                    <Image src={elem.BlogThumbnail} alt={elem.BlogTitle} />
                                                </div>
                                            </div>
                                            <div className='wpa-blogs-details wpa-flex wpa-h3-font-size'>
                                                <div className='wpa-blog-list-title'>
                                                    <h3><Link to={"/"}>{elem.BlogTitle}</Link></h3>
                                                </div>
                                                <div className='wpa-blog-list-posted-by wpa-content-top-bottom-spacing wpa-paragraph-text wpa-font-weight-600'>
                                                    <span>Recent updated {elem.BlogPostDate} By <Link to="">{elem.BlogAdminName}<i className='wpa-share-icon'><Image src={share_post_icon} alt='share blog post icon' /></i></Link></span>
                                                </div>
                                                <div className='wpa-blog-list-description wpa-paragraph-text line-limit-2'>
                                                    <p>{elem.BlogDescription}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>

                    {visibleBlogs < BlogsData.length && (
                        <div className='wp-view-more-btn btn-primary-hover'>
                            <button type='button' onClick={loadMoreBlogs}>LOAD MORE</button>
                        </div>
                    )}

                </div>
            </section>
    </>
  )
}

export default Blogs
