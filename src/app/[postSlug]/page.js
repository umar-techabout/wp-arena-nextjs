// pages/posts/[postSlug].js

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

export default async function PostDetail({ params }) {
  const { postSlug } = params;

  try {
    const { data } = await client.query({
      query: GET_POST_BY_SLUG,
      variables: { postSlug },
    });

    if (!data.postBy) {
      return <p>Post not found.</p>;
    }

    return (
      <>
        <BreadCrumb />
        <div className='wpa-custom-style'>
          <h1>{data.postBy.title}</h1>
          <div className='wpa-wrapper-sides-spacing' dangerouslySetInnerHTML={{ __html: data.postBy.content }} />
        </div>
        <Comments comments={data.postBy.comments.nodes} postId={data.postBy.id} />
      </>
    );
  } catch (error) {
    return <p>Error fetching post details.</p>;
  }
}
