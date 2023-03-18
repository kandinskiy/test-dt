const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMqpackerPlugin = require('css-mqpacker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
  src: path.join(__dirname, './src/'),
  dist: path.join(__dirname, './dist/'),
};

module.exports = {
  externals: {
    paths: PATHS
  },
  cache: false,
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `js/[name].js`,
    path: PATHS.dist,
    publicPath: './'
  },
  performance: {
    hints: false
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.(css|scss)$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            url: false,
          }
        }, {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [
                  "postcss-preset-env",
                  {sourceMap: true}
                ],
              ],
            },
          },
        }, {
          loader: 'sass-loader'
        }
      ]
    }, {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      use: [{
        options: {
          name: '[path][name].[ext]',
          quality: 75
        },
        loader: 'file-loader',
      }]
    }, {
      test: /\.(woff(2)?|ttf|eot)$/,
      type: 'asset/resource',
      generator: {
        filename: `./css/fonts/[name][ext]`,
      },
    }]
  },
  devServer: {
    static: {
      directory: PATHS.dist,
      watch: true
    },
    compress: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMqpackerPlugin({
        test: /\.css$/,
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].css`,
      linkType: "text/css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: PATHS.src + 'static',
          to: PATHS.dist,
        },
        {
          from: PATHS.src + 'fonts',
          to: PATHS.dist + 'css/fonts/',
        }
      ],
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: PATHS.src + 'index.html',
      filename: 'index.html',
    }),
  ],
};
