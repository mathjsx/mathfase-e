module.exports = {
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
  // Support MDX files as pages:
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  // Support loading `.md`, `.mdx`
  webpack: (config, options) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
  reactStrictMode: true,
};
