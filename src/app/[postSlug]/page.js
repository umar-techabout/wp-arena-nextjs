import '../../../src/wordpress-style.css';
import { gql } from '@apollo/client';
import client from '../../../lib/apollo-client'; 
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import Comments from '@/components/comments/Comments';

const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($postSlug: String!) {
    postBy(slug: $postSlug) {
      id
      title
      content
      excerpt
      comments {
        nodes {
          id
          content
          author {
            node {
              name
            }
          }
          date
        }
      }
    }
  }
`;

// Fetch post data server-side using an async function
export async function fetchPostBySlug(postSlug) {
  try {
    const { data } = await client.query({
      query: GET_POST_BY_SLUG,
      variables: { postSlug },
    });
    return data.postBy;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Export dynamic metadata
export async function generateMetadata({ params }) {
  const { postSlug } = params;
  const post = await fetchPostBySlug(postSlug);

  if (!post) {
    return {
      title: 'Post Not Found - WPArena',
      description: 'The post you are looking for was not found.',
    };
  }

  return {
    title: `${post.title} - WPArena`,
    description: post.excerpt ? post.excerpt.replace(/(<([^>]+)>)/gi, '') : 'Read this post on WPArena.',
  };
}

// Page component for rendering post details
export default async function PostDetail({ params }) {
  const { postSlug } = params;
  const post = await fetchPostBySlug(postSlug);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <>
      <BreadCrumb />
      <div className='wpa-custom-style'>
        <h1>{post.title}</h1>
        <div className='wpa-wrapper-sides-spacing' dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <Comments comments={post.comments.nodes} postId={post.id} />
    </>
  );
}
