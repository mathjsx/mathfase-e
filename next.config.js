module.exports = {
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
  // Support MDX files as pages:
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  webpack: (config) => {
    // Fixes npm packages that depend on fs module
    config.node = { fs: 'empty' }
    return config;
  },
  reactStrictMode: true,
};
