# webpack: 

## webpack代码构建流程
+ getAst -> 依赖关系 -> 依赖图谱 { ast code dependence} -> 深度依赖 -> bundle func（webpack结果-自执行函数）

## webpack（https://mp.weixin.qq.com/s?__biz=MzI0MTUxOTE5NQ==&mid=2247484030&idx=1&sn=d630d4b3995bbfd50f99e781074acfeb）
+ Webpack是基于事件流的插件集合，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是Tapable，Tapable是一个类似Node.js的EventEmitter的库,主要是控制钩子函数的发布与订阅，控制着webpack的插件系统
+ Tapable提供了同步和异步绑定钩子的方法，并且他们都有绑定事件以及执行事件对应的方法
+ Webpack首先会把配置参数和命令行的参数及默认参数合并，并初始化需要使用的插件和配置插件等执行环境所需要的参数；初始化完成后会调用Compiler的run来真正启动webpack编译构建过程，webpack的构建流程包括compile、make、build、seal、emit阶段，执行完这些阶段就完成了构建过程。
+ 流程
  + 初始化参数-初始化默认参数配置（new WebpackOptionsDefaulter().process(options)-
  + 实例化compiler对象-
  + 加载插件-
  + 处理入口（每个入口生成对应entryPlugin)
  + run阶段(启动一次新的编译)
  + compile
  + compilation
  + make
  + addEntry
  + _addMouduleChain
  + buildMoudules
  + build
  + normal-module-loader
  + program 从入口模块开始，分析ast，依赖模块列表
  + seal 封装
  + addChunk....

## webpack代码类型
+ 你或你的团队编写的源码。
+ 你的源码会依赖的任何第三方的 library 或 "vendor" 代码。
+ webpack 的 runtime 和 manifest，管理所有模块的交互。
+ runtime，以及伴随的 manifest 数据，主要是指：在浏览器运行过程中，webpack 用来连接模块化应用程序所需的所有代码。它包含：在模块交互时，连接模块所需的加载和解析逻辑。包括：已经加载到浏览器中的连接模块逻辑，以及尚未加载模块的延迟加载逻辑。
+ manifest 当 compiler 开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "manifest"，当完成打包并发送到浏览器时，runtime 会通过 manifest 来解析和加载模块。

## 按需引入第三方库
+ moment.js->time.js
+ lodash.js按需引入
+ es6 {} common.js引入是否会被打包全部。如何处理
+ 构建自己的脚手架

## 分析工具：
+ webpack-bundle-analyzer

## 路由懒加载
+ 路由懒加载分组合并： webpackChunkName

## babel-plugin-transform-runtime

## compression-webpack-plugin gzip压缩配合nginx开启

## webpack externals告诉webpack第三方库不需要打包。
```
externals: {
  'vue': vue // 插件名：全局变量
}
```

## image-webpack-loader


## webpack实现: 
> Webpack可以将其理解是一种基于事件流的编程范例，一个插件合集。而将这些插件控制在webapck事件流上的运行的就是webpack自己写的基础类Tapable
> Webpack 的事件流机制应用了观察者模式，和 Node.js 中的 EventEmitter非常相似。
+ tapable: 发布订阅模式
  + plugin(name:string, handler:function):允许将一个自定义插件注册到 Tapable 实例 的事件中。它的行为和 EventEmitter 的 on() 方法相似，用来注册一个处理函数/监听器，来在信号/事件发生时做一些事情
  + apply(…pluginInstances: (AnyPlugin):pply(…pluginInstances: (AnyPlugin|function)[])：AnyPlugin 应该是一个拥有 apply 方法的类（也可以是一个对象，但是不常见），或者只是一个包含注册代码的函数;这个方法只调用插件的定义，从而将真正的事件监听器可以注册到 Tapable 实例的注册列表中
  + applyPlugins(name:string, …)*：Tapable 实例可以通过使用这些函数，在指定的 hash 下应用所有的插件。这一组方法的行为和 EventEmitter 的 emit() 方法相似，使用多种策略细致地控制事件的触发。
  + mixin(pt: Object)：一个简单地方法，使用混入而不是继承的方式扩展 Tapable 的原型。
+ 转换ES6语法成ES5
  + 通过babylon生成AST
  + 通过babel-core将AST重新生成源码
+ 处理模块加载依赖
+ 生成一个可以在浏览器加载执行的 js 文件

# webpack流程
```
参数解析
找到入口文件
调用 Loader 编译文件
遍历 AST，收集依赖
生成 Chunk
输出文件
```
+ 概念：
  + entry 
  + output 
  + 模式(mode)
  + 模块（module)
  + chunk: 公共模块，去重，更好的利用缓存;单独的chunk;需加载某些功能模块，优化加载时间
  + loader
  + resolve(解析)
  + optimization(优化)
  + devserver开发服务器
  + devtool
  + target
  + externals
  + watch/watchoptions
  + performance
  + node
  + 
  + plugins:在 Webpack 构建流程中的特定时机会广播出对应的事件，插件可以监听这些事件的发生，在特定时机做对应的事情
  + webpack编译过程中一个比较重要的概念compiler、compilation
    + Compiler 对象：负责文件监听和启动编译。Compiler 实例中包含了完整的 webpack 配置，全局只有一个 Compiler 实例
    + Compilation 对象：当 webpack 以开发模式运行时，每当检测到文件变化，一次新的 Compilation 将被创建。一个 Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。Compilation 对象也提供了很多事件回调供插件做扩展。
    + 核心的对象 Compiler、Compilation等都是继承于Tabable类。可以直接在 Compiler 和 Compilation 对象上广播和监听器，  
    ```
    /**
    * 广播出事件
    * event-name 为事件名称，注意不要和现有的事件重名
    * params 为附带的参数
    */
    compiler.apply('event-name',params);

    /**
    * 监听名称为 event-name 的事件，当 event-name 事件发生时，函数就会被执行。
    * 同时函数中的 params 参数为广播事件时附带的参数。
    */
    compiler.plugin('event-name',function(params) {
      doSomeThing();
    });
    ```
+ 流程
  + 初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler。  
    > 合并shell和配置文件文件的参数并且实例化Complier对象。加载插件 处理入口
    + 初始化参数: 从配置文件和 Shell 语句中读取与合并参数，得出最终的参数。 这个过程中还会执行配置文件中的插件实例化语句 new Plugin()。---------
    + 实例化 Compiler: 用上一步得到的参数初始化 Compiler 实例，Compiler 负责文件监听和启动编译。Compiler 实例中包含了完整的 Webpack 配置，全局只有一个 Compiler 实例。-------
    + 加载插件: 依次调用插件的 apply 方法，让插件可以监听后续的所有事件节点。同时给插件传入 compiler 实例的引用，以方便插件通过 compiler 调用 Webpack 提供的 API-------
    + environment: 开始应用 Node.js 风格的文件系统到 compiler 对象，以方便后续的文件寻找和读取。-----------
    + entry-option: 读取配置的 Entrys，为每个 Entry 实例化一个对应的 EntryPlugin，为后面该 Entry 的递归解析工作做准备。
    + after-plugins: 调用完所有内置的和配置的插件的 apply 方法。完成了事件订阅) ---------
    + after-resolvers: 根据配置初始化完 resolver，resolver 负责在文件系统中寻找指定路径的文件。
  + 编译：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理。
    + before-run事件: 清除缓存
    + run事件: 启动一次新的编译。-------
    + watch-run事件: 和 run 类似，区别在于它是在监听模式下启动的编译，在这个事件中可以获取到是哪些文件发生了变化导致重新启动一次新的编译
    + compile事件: 该事件是为了告诉插件一次新的编译将要启动，同时会给插件带上 compiler 对象。----------
    + compilation: 当 Webpack 以开发模式运行时，每当检测到文件变化，一次新的 Compilation 将被创建。一个 Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。Compilation 对象也提供了很多事件回调供插件做扩展---------
      + compilation 实际上就是调用相应的 loader 处理文件生成 chunks并对这些 chunks 做优化的过程。
      + build-module： 使用对应的 Loader 去转换一个模块。
      + normal-module-loader： 在用 Loader 对一个模块转换完后，使用 acorn 解析转换后的内容，输出对应的抽象语法树（AST），以方便 Webpack 后面对代码的分析
      + program: 从配置的入口模块开始，分析其 AST，当遇到 require 等导入其它模块语句时，便将其加入到依赖的模块列表，同时对新找出的依赖模块递归分析，最终搞清所有模块的依赖关系
      + seal: 所有模块及其依赖的模块都通过 Loader 转换完成后，根据依赖关系开始生成 Chunk。
    + make： 一个新的 Compilation 创建完毕，即将从 Entry 开始读取文件，根据文件类型和配置的 Loader 对文件进行编译，编译完后再找出该文件依赖的文件，递归的编译和解析。-------
    + after-compile： 一次 Compilation 执行完成。这里会根据编译结果 合并出我们最终生成的文件名和文件内容。
    + invalid： 当遇到文件不存在、文件编译错误等异常时会触发该事件，该事件不会导致 Webpack 退出。
  + 输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统。
    + should-emit: 所有需要输出的文件已经生成好，询问插件哪些文件需要输出，哪些不需要。
    + emit: 确定好要输出哪些文件后，执行文件输出，可以在这里获取和修改输出内容。
    + after-emit: 文件输出完毕。
    + done: 成功完成一次完成的编译和输出流程。
    + failed: 如果在编译和输出流程中遇到异常导致 Webpack 退出时，就会直接跳转到本步骤，插件可以在本事件中获取到具体的错误原因。
  + 总结：
  > 
  初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
  开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
  确定入口：根据配置中的 entry 找出所有的入口文件；
  编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
  完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
  输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
  输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。



## loader: string->loader->string -> acorn->ast->webpack----vue-loader(https://mp.weixin.qq.com/s/NO5jZfoHZbjOwR8qiWnXmw);l
+ loader 是导出为一个函数的 node 模块。该函数在 loader 转换资源的时候调用。给定的函数将调用 loader API，并通过 this 上下文访问。(https://juejin.im/post/5a698a316fb9a01c9f5b9ca0)
+ 最后一个的 loader，那么它的返回值将最终交给 webpack 的 require，换句话说，它一定是一段可执行的 JS 脚本 （用字符串来存储），更准确来说，是一个 node 模块的 JS 脚本
+ 作用： 通过babylon生成AST，通过babel-core将AST重新生成源码
+ module.exports = function (source) {} // vue-loader 接收一个 source 字符串，值是 vue 文件的内容
+ const stringifyRequest = r => loaderUtils.stringifyRequest(loaderContext, r) // loaderUtils.stringifyRequest 作用是将绝对路径转换成相对路径。
```
vue-loader: string->string // templete script style三部分；loader 会导出一个可执行的 node 模块，也就是说上面提到的 code 是会被 webpack 识别到然后执行的
let code = `
${templateImport}
${scriptImport}
${stylesCode}`.trim() + `\n`
code += `\nexport default component.exports`
return 
code
```
+ 假设现在我们要实现通过 loader 的配置和 query 参数来渲染模版的功能。(我们在 “apply-loader” 里面实现这个功能，它负责编译源模版，最终输出一个导出 HTML 字符串的模块)
  + jade-loader 把模版源文件转化为导出一个函数的模块。
  + apply-loader 把 loader options 传给上面的函数并执行，返回 HTML 文本。
  + html-loader 接收 HTMl 文本文件，转化为可被引用的 JS 模块。
+ 最后一个loader
```
// 处理顺序排在最后的 loader
module.exports = function (source) {
    // 这个 loader 的功能是把源模块转化为字符串交给 require 的调用方
    return 'module.exports = ' + JSON.stringify(source);
}
然后交给webpackrequire
```

## 插件是往钩子中注册回调的函数。通过
+ webpack执行各个插件的apply，传递compile,插件通过compile订阅webpack事件，传递回调。当webpack执行到事件，广播事件，执行插件回调，使得插件静听到。
```
function FileListPlugin(options) {}
FileListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    // 在生成文件中，创建一个头部字符串：
    var filelist = 'In this build:\n\n';

    // 遍历所有编译过的资源文件，
    // 对于每个文件名称，都添加一行内容。
    for (var filename in compilation.assets) {
      filelist += ('- '+ filename +'\n');
    }

    // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
    compilation.assets['filelist.md'] = {
      source: function() {
        return filelist;
      },
      size: function() {
        return filelist.length;
      }
    };

    callback();
  });
};

module.exports = FileListPlugin;
```
```
#! /usr/bin/env node    
const path = require('path');
const fs = require('fs');
const root = process.cwd();
const Compiler = require('../lib/Compiler');
let options = require(path.resolve('webpack.config.js'));
let compiler = new Compiler(options); 
compiler.hooks.entryOption.call();     //触发entryOptions
let {plugins} = options;        //获取webpack.config.js中的plugns进行注册
plugins.forEach(plugin => { // 执行各个插件的apply，传递compile,使得插件能够监听webpack回调。
    plugin.apply(compiler)
});
compiler.hooks.afterPlugins.call(),     //触发afterPlugins
compiler.run();

// class方式
class xxxxPlugin{
    //new xxxxPlugin(options)
    constructor(options) {
        this.options=options;
    }
    apply(compiler) {
        //往钩子上注册回调 =-----往那个钩子则监听那个钩子变化，然后执行回调
        compiler.hooks.xxxx.tap('xxxxPlugin', ()=> {
            //TODO执行的逻辑
        });
    }
}
module.exports=xxxxPlugin;

```

## 勾子
> 
Compiler 对象/继承tabale。发布订阅-----插件通过提供apply，给他调用，然后插件拥有监听这些钩子；
run,compile,compilation,make,emit,done 钩子/事件

Compilation的钩子  compilation.hooks.buildMo....,webpack4+
buildModule,normalModuleLoader,succeedModule,finishModule,seal,optimize,after-seal

Module Factory
beforeResolver,afterResolver,module,parser

Parser
program,statement,call,expression

Template Factory
hash,bootstrap,localVars,render


## htmlWebpack
```
HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
  'MyPlugin', // <-- Set a meaningful name here for stacktraces
  (data, cb) => {
    // console.log(data)
    // Manipulate the content
    data.html += 'The Magic Footer'
    // Tell webpack to move on
    cb(null, data)
  }
)
```
+ 在htmlweb的某个钩子上注册myplugin，等到执行到htmlwebpackplugin时候的钩子时去执行myplugin,然后把结果传给回调执行，然后执行后续webpack
+ htmlweb内部执行了weakMap(complication, hooks，htmlweb自身的hooks,继承自tabable，发布订阅，提供钩子给其他订阅)
+ weakMap弱缓存。
  + beforeAssetTagGeneration
  + alterAssetTags
  + alterAssetTagGroups
  + afterTemplateExecution
  + beforeEmit
  + afterEmit


## 
+ dllplugin和splitchunks区别: dll优化是把第三方库单独提取出来，而不是放在vendor.js里面，和cdn(externals)的区别是它们存在本地，比较稳定。

## hash chunkhash contenthash
+ 一、hash（所有文件哈希值相同，只要改变内容跟之前的不一致，所有哈希值都改变，没有做到缓存意义）
+ 二、chunkhash（同一个模块，就算将js和css分离，其哈希值也是相同的，修改一处，js和css哈希值都会变，同hash，没有做到缓存意义）
+ 三、contenthash（只要文件内容不一样，产生的哈希值就不一样）

## HashedModuleIdsPlugin   moduleid和chunkid区别

## speed-measure-webpack-plugin如何使用





