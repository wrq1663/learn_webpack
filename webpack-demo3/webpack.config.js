const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: './dist',
    hot:true
  },
  optimization: {
    moduleIds: 'named',
    runtimeChunk: 'single'
 },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '吴润泉'
    }),
    // new webpack.HotModuleReplacementPlugin()
  ]
};