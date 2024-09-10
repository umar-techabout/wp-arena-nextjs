'use client'
import React, { useState, useEffect } from "react";
import "./CouponsAndDealsFaqs.css";
import pluginsLogo from "@/images/web-plugin-logo.png";
import sassLogo from "@/images/saas-logo.png";
import Themes from "@/components/themes/Themes";
import Plugins from "@/components/plugins/Plugins";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import client from "../../../lib/apollo-client"; // Adjust the path as needed
import { gql } from '@apollo/client';

// Define your queries
const GET_POSTS_BY_CATEGORY_SLUG_PLUGINS = gql`
  query GetPostsByCategorySlugPlugins($categorySlug: String!, $page: Int!) {
    posts(where: { categoryName: $categorySlug }, page: $page) {
      nodes {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
      pageCount
    }
  }
`;

const GET_POSTS_BY_CATEGORY_SLUG_THEMES = gql`
  query GetPostsByCategorySlugThemes($categorySlug: String!, $page: Int!) {
    posts(where: { categoryName: $categorySlug }, page: $page) {
      nodes {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
      pageCount
    }
  }
`;

const CouponsAndDealsFaqs = ({
  filterTitle,
  showSearchBar = "true",
  showLogos = true,
  disableClick = false,
  showDescriptionCondition = " true ",
}) => {
  const [openSections, setOpenSections] = useState({});
  const [pluginsData, setPluginsData] = useState([]);
  const [themesData, setThemesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch plugins data
  const fetchPluginsData = async () => {
    const { data } = await client.query({
      query: GET_POSTS_BY_CATEGORY_SLUG_PLUGINS,
      variables: { categorySlug: "plugins", page: 1 },
    });
    setPluginsData(data.posts.nodes);
  };

  // Function to fetch themes data
  const fetchThemesData = async () => {
    const { data } = await client.query({
      query: GET_POSTS_BY_CATEGORY_SLUG_THEMES,
      variables: { categorySlug: "themes", page: 1 },
    });
    setThemesData(data.posts.nodes);
  };

  // UseEffect to fetch data when sections are opened
  useEffect(() => {
    if (openSections["plugins"]) {
      fetchPluginsData();
    }
    if (openSections["themes"]) {
      fetchThemesData();
    }
    setLoading(false);
  }, [openSections]);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const data = [
    {
      logo: pluginsLogo,
      title: "plugins",
    },
    {
      logo: sassLogo,
      title: "themes",
    },
  ];

  const filteredData = filterTitle
    ? data.filter((item) => item.title === filterTitle)
    : data;

  return (
    <>
      <BreadCrumb />
      <section className="wpa-faqs">
        <div className="wpa-wrapper-sides-spacing">
          <div className="wpa-accordion">
            {filteredData.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className="wpa-accordion-title wpa-flex wpa-space-between"
                  onClick={() => toggleSection(item.title)}
                >
                  <div className="wpa-accordion-title-wrapper">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                {openSections[item.title] && (
                  <section id="conference-timeline" className="wpa-listings">
                    {item.title === "plugins" ? (
                      <Plugins
                        posts={pluginsData}
                        pageCount={0} // You can update pagination logic as needed
                        isShowBreadCrumb={false}
                        IshwoPluginContent={false}
                        ButtonText={false}
                        isOpenBlog={true}
                        IsShowSearchBar={false}
                      />
                    ) : (
                      <Themes
                        posts={themesData}
                        pageCount={0}
                        ButtonText={false}
                        IshwoPluginContent={false}
                        isShowBreadCrumb={false}
                        IsShowSearchBar={false}
                        isOpenBlog={true}
                      />
                    )}
                  </section>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CouponsAndDealsFaqs;
