import React from 'react';
import { gql } from '@apollo/client';
import client from '../../../../lib/apollo-client'; // Adjust the import path based on your setup
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import Timeline from '@/components/timeline/Timeline';
import Themes from '@/components/themes/Themes'; // Adjust the path as needed
import Plugins from '@/components/plugins/Plugins'; // Adjust the path as needed

// Define the GraphQL query
const GET_POSTS_BY_CATEGORY_SLUG = gql`
  query GetPostsByCategorySlug($categorySlug: String!) {
    posts(where: { categoryName: $categorySlug }) {
      nodes {
        id
        slug
        title
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

// Fetch data server-side using an async function
export async function fetchPostsByCategorySlug(slug) {
  try {
    const { data } = await client.query({
      query: GET_POSTS_BY_CATEGORY_SLUG,
      variables: { categorySlug: slug },
    });
    return data.posts.nodes || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  const posts = await fetchPostsByCategorySlug(slug);

  // Determine which component to render based on the slug
  let ComponentToRender;
  switch (slug) {
    case 'plugins':
      ComponentToRender = Plugins;
      break;
    case 'themes':
      ComponentToRender = Themes;
      break;
    default:
      ComponentToRender = Timeline;
  }

  return (
    <>
      <BreadCrumb />
      <div className="wpa-wrapper-sides-spacing">
        <h1>{slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'Posts'}</h1>
        <div className="wpa-news-blogs">
          {/* Render the selected component with posts */}
          <ComponentToRender posts={posts} />
        </div>
      </div>
    </>
  );
}
