const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const path = require('path'); 
const glob = require('glob');

module.exports = withCSS(withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 2,
      localIdentName: '[local]___[hash:base64:5]'
    },
    webpack: (config, { dev }) => {
      if (!config.plugins) config.plugins = [];
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|pdf|mp4)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]'
          }
        }
      })
      return config;
    }
  }))
;