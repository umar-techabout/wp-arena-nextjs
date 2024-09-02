// lib/apollo-client.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://stg-wparena-staging.kinsta.cloud/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;

