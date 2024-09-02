// pages/api/comments.js

import { gql } from '@apollo/client';
import client from '../../lib/apollo-client';

const ADD_COMMENT = gql`
  mutation AddComment($postId: ID!, $name: String!, $website: String, $content: String!) {
    createComment(input: {
      postId: $postId,
      author: $name,
      authorUrl: $website,
      content: $content,
    }) {
      comment {
        id
        content
      }
    }
  }
`;

export default async function handler(req, res) {
    console.log('server', req)
  if (req.method === 'POST') {
    const { postId, name, website, content } = req.body;

    try {
      const { data } = await client.mutate({
        mutation: ADD_COMMENT,
        variables: { postId, name, website, content },
      });

      res.status(200).json(data.createComment.comment);
    } catch (error) {
        console.log('catch')
      res.status(500).json({ error: 'Failed to add comment' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
