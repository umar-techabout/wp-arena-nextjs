import Head from 'next/head';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer'; 
import ServicesBar from '@/components/top-services-bar/ServicesBar';
import './globals.css'; 
import './Media.css'
import Patners from '@/components/patners/Patners';
export const metadata = {
  title: 'Wp-Arena',
  description: 'WPArena is a premium online resource site of WordPress and is focused on providing excellent WordPress Tutorials, Guides, Tips, and Collections.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ServicesBar />
        <main>{children}</main>
        <Patners />
        <Footer />
      </body>
    </html>
  );
}
