const os = require('os')
const path = require('path')

const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const TerserWebpackPlugin = require('terser-webpack-plugin')

const threads = os.cpus().length //cpu核数

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    //其他chunk命名
    chunkFilename: "[name].[chunkhash:6].js",
    //图片字体等通过type:asset处理的文件名
    assetModuleFilename:"static1/media/[hash:10][ext][query]",
    clean: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/, //处理css资源文件
            use: [
              MiniCssExtractPlugin.loader,//将js中的css通过创建style标签添加到html文件中生效
              'css-loader',//将css资源编译成commonjs的模块到js中
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      'postcss-preset-env',//能解决大部分兼容问题
                    ]
                  }
                }
              }
            ]
          },
          {
            test: /\.less$/,
            //loader:''  =>这个是一个loader时可以使用
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      'postcss-preset-env',//能解决大部分兼容问题
                    ]
                  }
                }
              },
              'less-loader'
            ]
          },
          {
            test: /\.s[ac]ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      'postcss-preset-env',//能解决大部分兼容问题
                    ]
                  }
                }
              },
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
          },
          {
            test: /.(ttf|woff2?)$/,
            type: 'asset/resource',
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,

            use: [
              {
                loader: 'thread-loader',
                options: {
                  works: threads
                }
              },
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true, //开启缓存
                  cacheCompression: false //关闭缓存压缩
                }
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      //检测哪些文件
      context: path.resolve(__dirname, "../src"),
      cache: true,
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/eslintcache'),
      // threads  //开启多进程
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash:6].css'
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin({
        parallel: threads
      })
    ],
    splitChunks: {
      chunks: 'all',
    },
    // runtimeChunk:{  
    //   name: entrypoint => `runtime.${entrypoint.name}.js`
    // }
  },
  mode: "production"
}