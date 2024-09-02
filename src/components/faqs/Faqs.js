'use client'
import React, { useState, useEffect } from "react";
import "./CouponsAndDealsFaqs.css";
// import pluginsLogo from "../../assets/images/web-plugin-logo.png";
import pluginsLogo from "../../images/web-plugin-logo.png";
import sassLogo from "../../images/saas-logo.png";
import Themes from "../themes/Themes";
import Plugins from "../plugins/Plugins";

const CouponsAndDealsFaqs = ({
  filterTitle,
  showSearchBar = "true",
  showLogos = true,
  disableClick = false,
  showDescriptionCondition = " true ",
}) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
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
                    <Plugins isShowBreadCrumb={false} IshwoPluginContent={false } ButtonText={false} isOpenBlog={true}  IsShowSearchBar={false} />
                  ) : (
                    <Themes ButtonText={false} IshwoPluginContent={false} isShowBreadCrumb={false} IsShowSearchBar={false} isOpenBlog={true} />
                  )}
                </section>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CouponsAndDealsFaqs;