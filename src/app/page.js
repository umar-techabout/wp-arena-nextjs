'use client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Themes from '@/components/themes/Themes';
import Link from 'next/link';
import HomeInner from '@/components/homeinner/HomeInner'
const client = new ApolloClient({
  uri: 'https://stg-wparena-staging.kinsta.cloud/graphql',
  cache: new InMemoryCache(),
});
export default function Home() {
  return (
    <>
    <ApolloProvider client={client}>
    <Link href="/category/reviews/:type" element={<Themes />} />
    <HomeInner/>
    </ApolloProvider>
    </>
  );
}
