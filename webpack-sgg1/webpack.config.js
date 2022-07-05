const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, //处理css资源文件
        use: [
          'style-loader',//将js中的css通过创建style标签添加到html文件中生效
          'css-loader'//将css资源编译成commonjs的模块到js中
        ]
      },
      {
        test:/\.less$/,
        //loader:''  =>这个是一个loader时可以使用
        use:[
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test:/\.s[ac]ss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [],
  mode: "development"
}