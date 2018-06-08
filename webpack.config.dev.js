import path from "path";
module.exports = {
  mode:'development',
  devtool:"source-map ",
  entry: [path.resolve(__dirname,'src/index')],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath:'/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude:/node_modules/ },
      { test: /\.css$/, use: ['style-loader','css-loader'] },
    ]
  },
  plugins:[]

};
