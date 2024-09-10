import { gql } from '@apollo/client';
import client from '../../../lib/apollo-client'; // Ensure this path is correct
import BreadCrumb from '../breadcrumb/BreadCrumb';
import Link from 'next/link';
import Image from 'next/image';
// import Pagination from '../pagination/Pagination';
import '../../components/blog-categories/BlogCategories.css'
import '../../components/hero-banner/HeroBanner.css'
import '../../components/themes/Themes.css'

const GET_POSTS_BY_CATEGORY_SLUG_THEMES = gql`
  query GetPostsByCategorySlugThemes($categorySlug: String!, $page: Int!) {
    posts(where: { categoryName: $categorySlug }, page: $page) {
      nodes {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
      pageCount
    }
  }
`;

const Themes = ({ posts, pageCount, slug = '', ButtonText, isShowBreadCrumb = true, IsShowSearchBar = true }) => {
  // Ensure slug is a string and has a default value
  const title = typeof slug === 'string' && slug.includes('themes') ? 'WpArena Themes' : 'WpArena Plugins';

  return (
    <>
      {isShowBreadCrumb && <BreadCrumb />}
      <section id="conference-timeline" className="wpa-listings">
        <div className="wpa-h1-font-size wpa-font-weight-700 wpa-p-text wpa-blogs-descriptions margin-bottom-0 wpa-pro-services-content">
          <h1>{title}</h1>
          <p>WP Arena is a comprehensive resource for WordPress enthusiasts, offering detailed guides and reviews on themes and plugins. It provides insights into the latest and most popular WordPress themes, helping users select the best options for their websites. The site also features extensive plugin reviews, ensuring users can enhance their WordPress sites with the right tools. WP Arena keeps its audience updated with the newest developments in the WordPress ecosystem.</p>
        </div>
        {IsShowSearchBar && (
          <div className="wpa-search-bar-input-wrapper wpa-flex wpa-content-center wpa-start-now-for-free">
            <form>
              <input type="text" placeholder='Search' />
              <button className='wpa-search-btn' type='submit'>Search</button>
            </form>
          </div>
        )}

        <div className="timeline-article wpa-themes-blogs">
          {posts?.length > 0 ? (
            posts.map((post) => (
              <div className='relative' key={post.id}>
                <div className="content-right-container">
                  <div className="content-right wpa-flex wpa-gap-40">
                    <div>
                      <div className='wpa-blog-list-thumbnail'>
                        <Image height={200} width={200} src={post.featuredImage?.node?.sourceUrl} alt={post.featuredImage?.node?.altText || post.title} />
                      </div>
                    </div>
                    <div className='wpa-blogs-details wpa-flex wpa-h3-font-size'>
                      <div>
                        <div className='wpa-blog-list-posted-by wpa-paragraph-text wpa-font-weight-600'>
                          <span>Recent updated on <Link href="#">{new Date(post.date).toLocaleDateString()}</Link><i className='wpa-share-icon wpa-message-icon'></i></span>
                        </div>
                        <div className='wpa-blog-list-title'>
                          <h3><Link href={`/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }} /></h3>
                        </div>
                        <div className='wpa-blog-list-description wpa-paragraph-text line-limit-2'>
                          <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                        </div>
                      </div>
                      <div className="wp-view-more-btn btn-primary-hover wpa-btn-left wpa-font-weight-500">
                        <button type="button">{ButtonText ? "PLUGINS" : "THEMES"}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No posts available.</p> // You can show a message or handle the empty state here
          )}
        </div>

        {/* {posts.length > 11 && <Pagination pageCount={pageCount} handlePageClick={() => {}} />} */}
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const page = parseInt(context.query.page || '1', 10);

  const { data } = await client.query({
    query: GET_POSTS_BY_CATEGORY_SLUG_THEMES,
    variables: { categorySlug: slug || '', page },
  });

  return {
    props: {
      posts: data.posts.nodes,
      pageCount: data.posts.pageCount,
      slug: slug || '', // Ensure slug is a string
    },
  };
}

export default Themes;
