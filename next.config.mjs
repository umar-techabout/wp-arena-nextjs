import OptimizeCSSAssetsPlugin from 'css-minimizer-webpack-plugin';

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Disable CSS minification
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (plugin) => !(plugin instanceof OptimizeCSSAssetsPlugin)
      );
    }

    return config;
  },
};

export default nextConfig;
