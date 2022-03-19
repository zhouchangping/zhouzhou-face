## webpack-cli 
## manifest
> 你或你的团队编写的源码。
你的源码会依赖的任何第三方的 library 或 "vendor" 代码。
webpack 的 runtime 和 manifest，管理所有模块的交互。
+ app.js： 团队编写的代码
+ manifest（地图）：webpack 如何管理所有所需模块之间的交互，runtime 会通过 manifest 来解析和加载模块。通过使用 manifest 中的数据，runtime 将能够检索这些标识符，找出每个标识符背后对应的模块。
+ runtime(逻辑): runtime，以及伴随的 manifest 数据，主要是指：在浏览器运行过程中，webpack 用来连接模块化应用程序所需的所有代码。它包含：在模块交互时，连接模块所需的加载和解析逻辑。包括：已经加载到浏览器中的连接模块逻辑，以及尚未加载模块的延迟加载逻辑。



##  hash chunkhash contenthash
+ 采用hash计算的话，每一次构建后生成的哈希值都不一样，即使文件内容压根没有改变。这样子是没办法实现缓存效果，我们需要换另一种哈希值计算方式，即chunkhash
  + 项目总体文件的hash值
+ chunkhash和hash不一样，它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值。我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响
+ 在chunkhash的例子，我们可以看到由于index.css被index.js引用了，所以共用相同的chunkhash值。但是这样子有个问题，如果index.js更改了代码，css文件就算内容没有任何改变，由于是该模块发生了改变，导致css文件会重复构建

## webpack5
+ V5后，使用webpack-cli/serve来代替webpack-dev-server的启动命令：

## module chunk(http://www.alloyteam.com/2020/04/14338/)
+ 默认的 chunk 数量实际上是由你的入口文件的 js 数量决定的，但是如果你配置动态加载或者提取公共包的话，也会生成新的 chunk
+ module：每一个源码 js 文件其实都可以看成一个 module
+ chunk：每一个打包落地的 js 文件其实都是一个 chunk，每个 chunk 都包含很多 module

## optimization
+ minimize: 告知 webpack 使用 TerserPlugin 或其它在 optimization.minimizer 定义的插件压缩 bundle。
+ minimizer: 允许你通过提供一个或多个定制过的 TerserPlugin 实例， 覆盖默认压缩工具(minimizer)
```
minimizer: [
  new TerserPlugin({
    cache: true,
    parallel: true,
    sourceMap: true, // 如果在生产环境中使用 source-maps，必须设置为 true
    terserOptions: {
      // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
    }
  }),
],
```
+ splitChunks: 对于动态导入模块，默认使用 webpack v4+ 提供的全新的通用分块策略(common chunk strategy)。请在 SplitChunksPlugin 页面中查看配置其行为的可用选项
+ runtimeChunk
  + 将 optimization.runtimeChunk 设置为 true 或 'multiple'，会为每个只含有 runtime 的入口添加一个额外 chunk。
  + 值 "single" 会创建一个在所有生成 chunk 之间共享的运行时文件。此设置是如下设置的别
```
runtimeChunk: {
  name: entrypoint => `runtime~${entrypoint.name}`
}
runtimeChunk: {
  name: 'runtime'
}
```
+ 使用 optimization.emitOnErrors 在编译时每当有错误时，就会 emit asset。这样可以确保出错的 asset 被 emit 出来。关键错误会被 emit 到生成的代码中，并会在运行时报错
+ optimization.moduleIds: 在生产模式下，默认启用这些功能chunkIds: "deterministic", moduleIds: "deterministic"
```
 可选值:
 1. false  告诉webpack不应使用任何内置算法，通过插件提供自定义算法
 2.natural 按使用顺序的数字ID。
 3.named 方便调试的高可读性id
 4.deterministic 根据模块名称生成简短的hash值
 5.size 根据模块大小生成的数字id
```
+ optimization.chunkIds: 
```
 可选值:
 1. false  告诉webpack不应使用任何内置算法，通过插件提供自定义算法
 2.natural 按使用顺序的数字ID。
 3.named 方便调试的高可读性id
 4.deterministic 根据模块名称生成简短的hash值
 5.size 根据请求到的初始资源size计算的id
 6..total-size：根据请求到的解析资源size计算的id
 ```



## devServer
+ hot: 要完全启用 HMR ，需要 webpack.HotModuleReplacementPlugin。如果使用 --hot 选项启动 webpack 或 webpack-dev-server，该插件将自动添加，因此你可能不需要将其添加到 webpack.config.js 中
  + webpac-dev-server支持Hot Module Replacement，即模块热替换，在前端代码变动的时候无需整个刷新页面，只把变化的部分替换掉
  ```
  // 1. 不会刷新浏览器
    $ webpack-dev-server
    //2. 刷新浏览器
    $ webpack-dev-server --inline
    //3. 重新加载改变的部分，不会刷新页面
    $ webpack-dev-server --hot
    //4. 重新加载改变的部分，HRM失败则刷新页面
    $ webpack-dev-server  --inline --hot
  ```
+ compress: 为每个静态文件开启 gzip compression：
+ inline/在开发服务器的两种不同模式之间切换。默认情况下，应用程序将启用 inline模式。这意味着将在 bundle 中插入脚本以进行实时重新加载，并且构建消息将出现在浏览器控制台中
  + inline选项会为入口页面添加“热加载”功能，即代码改变后重新加载页面
+ liveReload 默认情况下，检测到文件更改时，开发服务器将重新加载/刷新页面。 必须禁用 devServer.hot 选项或必须启用 devServer.watchContentBase 选项，才能使 liveReload 生效。 通过将其设置为 false 来禁用 devServer.liveReload
+ quiet: 启用 devServer.quiet 后，除了初始启动信息外，什么都不会写入控制台。 这也意味着来自webpack的错误或警告是不可见的。

## devtool
+ 选择一种 source map 格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度