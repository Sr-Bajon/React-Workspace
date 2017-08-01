const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  appSrc: 'src'
};

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['./src/index.js'],
  output : {
    filename: 'bundle.js',
    path    : path.resolve(__dirname, 'dist')
  },
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react'],
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
              options: {importLoaders: 1},
            },
            'postcss-loader',
          ],
        }),
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'extract-loader',
      //     'css-loader'
      //   ]
      // },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].bundle.css'),
  ],

};


/*

https://blog.madewithenvy.com/webpack-2-postcss-cssnext-fdcd2fd7d0bd

 */