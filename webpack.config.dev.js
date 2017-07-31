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
          plugins       : [require('babel-plugin-transform-class-properties')],
          cacheDirectory: true,
        },
      },
    ]
  }

};