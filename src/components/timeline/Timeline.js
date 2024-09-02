'use client';
import React, { useState } from "react";
import share_post_icon from "../../images/share-icon.png";
import defaultimg from "../../images/defaultimage.jpg";
import "./Timeline.css";
import Link from "next/link";
import Image from 'next/image'
const Timeline = ({ posts }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(9);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 5);
  };

  if (!posts || posts.length === 0) {
    return <p className="wpa-error">No posts available.</p>;
  }

  const visiblePosts = posts.slice(0, visibleBlogs);

  return (
    <>
      <section id="conference-timeline">
        <div>
          <div className="timeline-start"></div>
          <div className="conference-center-line"></div>
          <div className="conference-timeline-content">
            {visiblePosts.map((post) => (
              <div className="timeline-article relative" key={post.id}>
                <div className="content-right-container">
                  <div className="content-right wpa-flex wpa-gap-40">
                    <div>
                      <div className="wpa-blog-list-thumbnail">
                      { <Image
                          src={post.featuredImage?.node?.sourceUrl || defaultimg}
                          alt={post.featuredImage?.node?.altText || post.title}
                          width={300} // Set appropriate width
                          height={200} // Set appropriate height
                          layout="responsive"
                        /> }
                      </div>
                    </div>
                    <div className="wpa-blogs-details wpa-flex wpa-h3-font-size">
                      <div className="wpa-blog-list-title line-limit-2">
                        <h3>
                          <Link href={`/${post.slug}`}>{post.title}</Link>
                        </h3>
                      </div>
                      <div className="wpa-blog-list-posted-by wpa-content-top-bottom-spacing wpa-paragraph-text wpa-font-weight-600">
                        <span>
                          Recent updated by{' '}
                          <Link href="">
                            {post.author?.node?.name || 'Unknown Author'}
                            <i className="wpa-share-icon">
                            {/* <Image
                                src={share_post_icon}
                                alt="share blog post icon"
                                width={16}
                                height={16}
                              /> */}
                            </i>
                          </Link>
                        </span>
                      </div>
                      <div className="wpa-blog-list-description wpa-paragraph-text line-limit-4">
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="meta-date">
                  <div className="wpa-flex wpa-content-center wpa-paragraph-text wpa-font-weight-700">
                    <span className="month">
                      {new Date(post.date).toLocaleString('default', { month: 'long' })}
                    </span>
                    <span className="date">
                      {new Date(post.date).getDate()}/
                      {new Date(post.date).getFullYear()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="timeline-end"></div>
          {visibleBlogs < posts.length && (
            <div className="wp-view-more-btn btn-primary-hover">
              <button type="button" onClick={loadMoreBlogs}>
                LOAD MORE
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Timeline;