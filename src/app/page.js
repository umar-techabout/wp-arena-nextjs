'use client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Image from "next/image";
import styles from "./page.module.css";
import Services from '@/components/services/Services';
// import Footer from '../../components/footer/Footer';
import Footer from '@/components/footer/Footer';
import Themes from '@/components/themes/Themes';
import Link from 'next/link';
import Listing from '@/components/listing/Listing';
import ToolKit from '@/components/toolkit/ToolKit';
import Header from '@/components/header/Header';
import HomeInner from '@/components/homeinner/HomeInner'
import ServicesBar from '@/components/top-services-bar/ServicesBar';
const client = new ApolloClient({
  uri: 'https://stg-wparena-staging.kinsta.cloud/graphql', // Replace with your GraphQL endpoint
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
