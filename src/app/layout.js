import Header from '@/components/header/Header' // Adjust the path based on your setup
import Footer from '@/components/footer/Footer'; 
import ServicesBar from '@/components/top-services-bar/ServicesBar';// Adjust the path based on your setup
import './globals.css'; // Global styles
import Patners from '@/components/patners/Patners';
// import '../../src/wordpress-style.css'

export const metadata = {
  title: 'Wp-Arena',
  description: 'WPArena is a premium online resource site of WordPress and is focused on providing excellent WordPress Tutorials, Guides, Tips, and Collections.',
};

export default function RootLayout({ children }) {
  const headerProps = {
    title: "My Website",
    navItems: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" }
    ]
  };

  return (
    <html lang="en">
      <body>
        <Header />
        <ServicesBar />
        <main>{children}</main>
        <Patners/>
        <Footer />
      </body>
    </html>
  );
}
