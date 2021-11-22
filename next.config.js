
module.exports = {
  
  // Prefer loading of ES Modules over CommonJS
  experimental: {esmExternals: true},
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  // Support loading `.md`, `.mdx`
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    // Example using webpack option
    //config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
    return config
},webpackDevMiddleware: config => {
  // Perform customizations to webpack dev middleware config
  // Important: return the modified config
  return config
},
  reactStrictMode: true,
}
