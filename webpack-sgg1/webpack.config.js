const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.js',
    clean: true
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
        test: /\.less$/,
        //loader:''  =>这个是一个loader时可以使用
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /.(png|jpg?g|gif|webp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
        generator: {
          filename: "static1/[hash:6][ext][query]"
        }
      },
      {
        test: /.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: "static1/media/[hash:10][ext][query]"
        }
      },
      {
        test:/\.js$/,
        use:{
          loader:"babel-loader",
          options:{
            presets:['@babel/perset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      //检测哪些文件
      context:path.resolve(__dirname, "src")
    })
  ],
  mode: "development"
}