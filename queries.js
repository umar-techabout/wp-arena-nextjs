// src/queries.js
import { gql } from '@apollo/client';

export const GET_SERVICES = gql`
  query GetServices {
    services {
      nodes {
        databaseId
        title 
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
export const GET_DEALS = gql`
  query GetDeals {
    deals {
      nodes {
        databaseId
        title 
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;


export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
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

// Query to fetch posts by category ID
export const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($categoryId: Int!) {
    posts(where: { categoryId: $categoryId }) {
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

// Query to fetch posts by category slug
export const GET_POSTS_BY_CATEGORY_SLUG = gql`
  query GetPostsByCategorySlug($categorySlug: String!) {
    posts(where: { categorySlug: $categorySlug }) {
      nodes {
        id
        title
        content
      }
    }
  }
`;



export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      content
      date
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
`;

// Query to fetch a page by slug (if supported by your API)
export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!) {
    pageBy(slug: $slug) {
      id
      title
      content
      date
    }
  }
`;
export const GET_POSTS_BY_CATEGORY_SLUG_THEMES = gql`
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
export const GET_POSTS_BY_CATEGORY_SLUG_PLUGINS = gql`
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

export const GET_POSTS_QUERY = gql`
  query GetPosts($search: String!) {
    posts(where: { search: $search }) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;

export const GET_PAGES_QUERY = gql`
  query GetPages($search: String!) {
    pages(where: { search: $search }) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;
