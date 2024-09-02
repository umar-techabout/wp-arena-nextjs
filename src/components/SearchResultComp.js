// import React from 'react';
// // import { Link } from 'react-router-dom';
// import Link from 'next/link';
// // import '../App.css'
// // import SearchIcon from "../assets/images/search-icon.png";
// import './timeline/Timeline.css'
// // import defaultimg from '../../src/assets/images/defaultimage.jpg'
// import defaultimg from '../images/defaultimage.jpg'
// import share_post_icon from '../images/share-icon.png'
// import Image from 'next/image';

// const SearchResults = ({ searchResults, loading, error }) => {
//     if (loading) return <div className="wpa-loader-main"><div className="wpa-loader"></div></div>;
//     if (error) return <p>{error}</p>;

//     return (
//         <section id="conference-timeline" className="wpa-wrapper-sides-spacing">
//         <div className="">
//           <div>
//             <div className="timeline-start"></div>
//             <div className="conference-center-line"></div>
//             <div className="conference-timeline-content">
//               <div className="timeline-article">
//                 {searchResults.map((result) => (
//                   <div className="relative" key={result.id}>
//                     <div className="content-right-container">
//                       <div className="content-right wpa-flex wpa-gap-40">
//                         <div>
//                           <div className="wpa-blog-list-thumbnail">
//                           <Image
//                           objectFit="cover"
//                           height={300}
//                           width={300}
//                               src={result.featured_image || defaultimg}
//                               alt={result.title.rendered}
//                               onError={(e) => e.target.src = defaultimg}
//                             />
//                           </div>
//                         </div>
//                         <div className="wpa-blogs-details wpa-flex wpa-h3-font-size">
//                           <div className="wpa-blog-list-title">
//                             <h3>
//                               <Link href={`/${result.slug}`}>
//                                 {result.title.rendered}
//                               </Link>
//                             </h3>
//                           </div>
//                           <div className="wpa-blog-list-posted-by wpa-content-top-bottom-spacing wpa-paragraph-text wpa-font-weight-600">
//                             <span>
//                               Recent updated By{" "}
//                               <Link href="">
//                                 {result._embedded?.["author"]?.[0]?.name ||
//                                   "Unknown Author"}
//                                 <i className="wpa-share-icon">
//                                   <Image
//                                     src={share_post_icon}
//                                     alt="share blog post icon"
//                                   />
//                                 </i>
//                               </Link>
//                             </span>
//                           </div>
//                           <div className="wpa-blog-list-description wpa-paragraph-text line-limit-2">
//                             <p
//                               dangerouslySetInnerHTML={{
//                                 __html: result.excerpt.rendered,
//                               }}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="meta-date">
//                       <div className="wpa-flex wpa-content-center wpa-paragraph-text wpa-font-weight-700">
//                         <span className="month">
//                           {new Date(result.date).toLocaleString("default", {
//                             month: "long",
//                           })}
//                         </span>
//                         <span className="date">
//                           {new Date(result.date).getDate()}/
//                           {new Date(result.date).getFullYear()}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="timeline-end"></div>
//           </div>

//           {/* {visibleBlogs < posts.length && (
//             <div className="wp-view-more-btn btn-primary-hover">
//               <button type="button" onClick={loadMoreBlogs}>
//                 LOAD MORE
//               </button>
//             </div>
//           )} */}
//         </div>
//       </section>
//     );
// };

// export default SearchResults;

"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from 'next/navigation';
import defaultimg from "../images/defaultimage.jpg";
import share_post_icon from "../images/share-icon.png";

const SearchResultsComp = ({ allData, initialQuery, error: initialError }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);
  const [error] = useState(initialError);

  useEffect(() => {
    const currentQuery = searchParams.get('query') || '';
    setQuery(currentQuery);
  }, [searchParams]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const lowercaseQuery = query.toLowerCase();
    return allData.filter(item => 
      item.title.rendered.toLowerCase().includes(lowercaseQuery) ||
      item.content.rendered.toLowerCase().includes(lowercaseQuery)
    );
  }, [allData, query]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section id="conference-timeline" className="wpa-wrapper-sides-spacing">
      <h2>Search Results for "{query}"</h2>
      {searchResults.length === 0 ? (
        <p>No results found for "{query}"</p>
      ) : (
<div>
        <div>
          <div className="timeline-start"></div>
          <div className="conference-center-line"></div>
          <div className="conference-timeline-content">
            <div className="timeline-article">
              {searchResults.map((result) => (
                <div className="relative" key={result.id}>
                  <div className="content-right-container">
                    <div className="content-right wpa-flex wpa-gap-40">
                      <div>
                        <div className="wpa-blog-list-thumbnail">
                          <Image
                            objectFit="cover"
                            height={300}
                            width={300}
                            src={result.featured_image || defaultimg}
                            alt={result.title.rendered}
                            onError={(e) => (e.target.src = defaultimg)}
                          />
                        </div>
                      </div>
                      <div className="wpa-blogs-details wpa-flex wpa-h3-font-size">
                        <div className="wpa-blog-list-title">
                          <h3>
                            <Link href={`/${result.slug}`}>
                              {result.title.rendered}
                            </Link>
                          </h3>
                        </div>
                        <div className="wpa-blog-list-posted-by wpa-content-top-bottom-spacing wpa-paragraph-text wpa-font-weight-600">
                          <span>
                            Recent updated By{" "}
                            <Link href="">
                              {result._embedded?.["author"]?.[0]?.name ||
                                "Unknown Author"}
                              <i className="wpa-share-icon">
                                <Image
                                width={20}
                                height={20}
                                objectFit="cover"
                                  src={share_post_icon}
                                  alt="share blog post icon"
                                />
                              </i>
                            </Link>
                          </span>
                        </div>
                        <div className="wpa-blog-list-description wpa-paragraph-text line-limit-2">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: result.excerpt.rendered,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="meta-date">
                    <div className="wpa-flex wpa-content-center wpa-paragraph-text wpa-font-weight-700">
                      <span className="month">
                        {new Date(result.date).toLocaleString("default", {
                          month: "long",
                        })}
                      </span>
                      <span className="date">
                        {new Date(result.date).getDate()}/
                        {new Date(result.date).getFullYear()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="timeline-end"></div>
        </div>
      </div>
      )}
    </section>
  );
};

export default SearchResultsComp;