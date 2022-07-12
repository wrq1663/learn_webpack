# webpack

### 高级部分

#### source-map

https://webpack.docschina.org/configuration/devtool/#devtool

#### HMR热模块替换

提高开发打包速度

```
if(module.hot){
  module.hot.accept('./test')
}
```

#### oneOf

提高打包速度

会让一个文件只被一个loader处理

#### eslint babel缓存

#### 多进程打包

#### 代码压缩

#### 代码分割

