import path from "path";
import webpack from "webpack";
import htmlPlugin from "html-webpack-plugin";
module.exports = {
  mode:'development',
  devtool:"source-map",
  entry: {
    main: path.resolve(__dirname, 'src/index'),
    vendor: path.resolve(__dirname, 'src/vendor')
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath:'/',
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude:/node_modules/ },
      { test: /\.css$/, use: ['style-loader','css-loader'] },
    ]
  },
  plugins: [
      new htmlPlugin({
      template: 'src/index.html',
      inject: true
    })
  ]

};
