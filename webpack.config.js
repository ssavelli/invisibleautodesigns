'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/main.js',
  output: { path: __dirname, filename: './client/bundle.js' },
  module: {
    loaders: [
      //{
      //  test: /\.css$/,
      //  loaders: ['style', 'css'],
      //  include: /client/
      //},
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
