const path = require('path');

const paths = {
  appSrc: 'src'
};

module.exports = {
  devtool: 'cheap-module-source-map',
  entry  : './src/index.js',
  output : {
    filename: 'bundle.js',
    path    : path.resolve(__dirname, 'dist')
  },
  module : {
    rules: [
      {
        test   : /\.js$/,
        loader : require.resolve('babel-loader'),
        options: {
          babelrc       : false,
          presets       : ['react'],
          // babel-plugin-transform-class-properties
          // This plugin transforms es2015 static class properties as well as
          // properties declared with the es2016 property initializer syntax.
          plugins       : [require('babel-plugin-transform-class-properties')],
          cacheDirectory: true,
        },
      },
    ]
  }

};


/*

https://blog.madewithenvy.com/webpack-2-postcss-cssnext-fdcd2fd7d0bd

 */