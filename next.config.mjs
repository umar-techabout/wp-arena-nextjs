/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'stg-wparena-staging.kinsta.cloud',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  