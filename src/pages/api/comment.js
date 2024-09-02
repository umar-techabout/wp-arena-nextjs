// pages/api/comments.js

import { gql } from '@apollo/client';
import client from '../../../lib/apollo-client';

const ADD_COMMENT = gql`
  mutation AddComment($commentOn: Int!, $author: String!, $authorUrl: String, $content: String!) {
    createComment(input: {
      commentOn: $commentOn,
      author: $author,
      authorUrl: $authorUrl,
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
  if (req.method === 'POST') {
    
    try {
      const { postId, name, website, content } = req.body;
      console.log('here', req.body)
      const { data } = await client.mutate({
        mutation: ADD_COMMENT,
        variables: { commentOn: 6594, author: name, authorUrl: website, content },
      });
    
      res.status(200).json(data.createComment.comment);
    } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).json({ error: error});
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
