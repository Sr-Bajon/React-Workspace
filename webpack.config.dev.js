const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool  : 'cheap-module-source-map',
  entry    : ['./src/index.js'],
  output   : {
    filename: 'bundle.js',
    path    : path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    port       : 8080,
    proxy      : {
      "/api": {
        target     : "http://localhost:3000",
        pathRewrite: {"^/api": ""}
      }
    }
  },
  module   : {
    rules: [
      {
        // set up standard-loader as a preloader
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          // Emit errors instead of warnings (default = false)
          error: false,
          // enable snazzy output (default = true)
          snazzy: true,
          // other config options to be passed through to standard e.g.,
          fix: true,
          parser: 'babel-eslint'
        }
      },
      {
        test   : /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use    : {
          loader : 'babel-loader',
          options: {
            presets       : ['react'],
            plugins       : [require('babel-plugin-transform-class-properties')],
            cacheDirectory: true,
          }
        }
      },
      {
        test: /\.css$/,
        use : ExtractTextPlugin.extract({
          use: [
            {
              loader : 'css-loader',
              options: {
                importLoaders: 1
              },

            },
            'postcss-loader',
          ],
        }),
      }
    ],
  },
  plugins  : [
    new ExtractTextPlugin('[name].bundle.css'),
    new HtmlWebpackPlugin()
  ],

};