import path from "path";
import webpack from "webpack";
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MinifyPlugin = require("babel-minify-webpack-plugin")
import hashBundle from "webpack-md5-hash"

import htmlPlugin from "html-webpack-plugin";
module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: {
    main: path.resolve(__dirname, 'src/index'),
    vendor: path.resolve(__dirname, 'src/vendor')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new MinifyPlugin(),
    new htmlPlugin({
      template:'src/index.html',
      inject:true
    }),
    new hashBundle()
  ]
};
