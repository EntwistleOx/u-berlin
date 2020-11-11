const withOptimizedImages = require('next-optimized-images');
const path = require('path');

module.exports = withOptimizedImages({
  webpack: (cfg) => {
    const config = cfg;
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    });
    config.resolve.alias.images = path.join(__dirname, 'public/images');
    return config;
  },
});
