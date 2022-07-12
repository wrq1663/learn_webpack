const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {       //多入口
    index: './src/index.js',
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    //入口文件命名
    filename: "[name].[chunkhash:6].js",
    //其他chunk命名
    chunkFilename: "[name].[chunkhash:6].js",
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    // runtimeChunk:{
    //   name: entrypoint => `runtime.${entrypoint.name}.js`
    // }
  },
}