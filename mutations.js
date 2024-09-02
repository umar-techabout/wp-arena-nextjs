import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
  mutation AddComment($commentOn: Int!, $content: String!, $authorName: String!) {
    createComment(input: {
      commentOn: $commentOn,
      content: $content,
      author: $authorName,
    }) {
      comment {
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
`;