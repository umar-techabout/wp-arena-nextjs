import { gql } from '@apollo/client';

// Define your queries
export const GET_POSTS_BY_CATEGORY_SLUG_PLUGINS = gql`
  query GetPostsByCategorySlugPlugins($categorySlug: String!, ) {
    posts(where: { categoryName: $categorySlug }, ) {
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
    }
  }
`;

export const GET_POSTS_BY_CATEGORY_SLUG_THEMES = gql`
  query GetPostsByCategorySlugThemes($categorySlug: String!, ) {
    posts(where: { categoryName: $categorySlug }, ) {
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
    }
  }
`;