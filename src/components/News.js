import { useQuery } from '@apollo/client';
import axios from "axios";
import { GET_POSTS_BY_CATEGORY_SLUG } from '.././queries'; 
import { Link, useParams } from "react-router-dom";
import Timeline from "./timeline/Timeline";
import BlogDetail from "./blog-detail/BlogDetail";
import BreadCrumb from "./breadcrumb/BreadCrumb";
import { API_BASE_URL } from '../apiConfig';
import "../App.css";



function News() {
  const { type } = useParams(); // Get the category slug from the URL
  
  const { loading, error, data } = useQuery(GET_POSTS_BY_CATEGORY_SLUG, {
    variables: { categorySlug: type }, // Use the type as the category slug
  });


  if (loading) {
    return (
      <div className="wpa-loader-main">
        <div className="wpa-loader"></div>
      </div>
    );
  }

  if (error) {
    return <p className="wpa-error">Error fetching posts: {error.message}</p>;
  }

  const posts = data?.posts?.nodes || [];

  return (
    <>
      <BreadCrumb />
      <div className="wpa-wrapper-sides-spacing">
        <h1>{type ? type.charAt(0).toUpperCase() + type.slice(1) : "Posts"}</h1>
       <div className="wpa-news-blogs">
       <Timeline posts={posts} />
       </div>
      </div>
    </>
  );
}


export default News;
