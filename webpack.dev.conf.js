const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    client: {
      overlay: true,
    },
    port: 8081,
    hot: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
});