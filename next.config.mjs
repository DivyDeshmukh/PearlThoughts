// next.config.mjs
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Only apply this configuration to the client-side bundle
      if (!isServer) {
        config.module.rules.push({
          test: /\.test\.(js|ts|tsx)$/,  // Match test files
          use: 'ignore-loader',         // Ignore them during the build process
        });
      }
      return config;
    },
  };
  
  export default nextConfig;
  