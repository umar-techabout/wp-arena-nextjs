// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Posts() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     // Function to fetch posts
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(
//           "https://stg-wparena-staging.kinsta.cloud/wp-json/wp/v2/posts"
//         );
//         setPosts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching posts");
//         console.error(error);
//         setLoading(false);
//       }
//     };

//     // Fetch posts on component mount
//     fetchPosts();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <>
//       <div className="wpa-wrapper-sides-spacing">
//         <h1>Posts</h1>
//         {posts.map((item, i) => (
//           <div key={i}>
//             <Link to={`/${item.slug}`}>{item.title.rendered}</Link>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Posts;