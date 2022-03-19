# babel(https://zhuanlan.zhihu.com/p/147083132)
+ Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法以便能够运行在当前和旧版本的浏览器或其他环境中
+ Babel 是一个编译器（输入源码 => 输出编译后的代码）。就像其他编译器一样，编译过程分为三个阶段：解析、转换和打印输出。如果想要 Babel 做一些实际的工作，就需要为其添加插件
+ Babel 把 Javascript 语法 分为 syntax 和 api(https://zhuanlan.zhihu.com/p/58624930)
+ 先说 api , api 指那些我们可以通过 函数重新覆盖的语法 ，类似 includes,map,includes,Promise,凡是我们能想到重写的都可以归属到 api啥子是 syntax ,像 箭头函数，let,const,class, 依赖注入 Decorators,等等这些，我们在 Javascript 在运行是无法重写的，想象下，在不支持的浏览器里不管怎么样，你都用不了 let 这个关键字
+ Babel 只负责 转换 syntax , includes,map,includes单独放在了 polyfill 这个模块处理
+ 语法转换
+ 通过 Polyfill 方式在目标环境中添加缺失的特性 (通过 @babel/polyfill 模块)
+ 源码转换 (codemods)
+ Babel 能够转换 JSX 语法:  
  + npm install --save-dev @babel/preset-react
+ Babel 可以删除类型注释;Babel 不做类型检查，你仍然需要安装 Flow 或 TypeScript 来执行类型检查的工作
  + npm install --save-dev @babel/preset-flow
  + npm install --save-dev @babel/preset-typescript
+ Babel 构建在插件之上。使用现有的或者自己编写的插件可以组成一个转换管道。通过使用或创建一个 preset 即可轻松使用一组插件
+ 由于 Babel 支持 Source map，因此你可以轻松调试编译后的代码
+ Babel 尽最大可能遵循 ECMAScript 标准。不过，Babel 还提供了特定的选项来对标准和性能做权衡。
+ 代码紧凑: Babel 尽可能用最少的代码并且不依赖太大量的运行环境。
+ Babel 默认只转换新的 JavaScript 语法，而不转换新的 API。例如，Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转译。如果想使用这些新的对象和方法，必须使用 babel-polyfill，为当前环境提供一个垫片。
+ 我们使用 @babel/cli 从终端运行 Babel，利用 @babel/polyfill 来模拟所有新的 JavaScript 功能，而 env preset 只对我们所使用的并且目标浏览器中缺失的功能进行代码转换和加载 polyfill。

## 使用
+ install
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill // webpack 不论怎样都要引入

// babel.config.json
{
  "presets": [
    [
      "@babel/env", env预设将仅加载目标浏览器中不提供的功能的转换插件
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
        "useBuiltIns": "usage",
      }
    ]
  ]
}
```

## @babel/preset-env
+ @babel/preset-env利用你指定的任何目标环境, 检查它们对应的插件并传给Babel;// 我们不需要一个接一个地添加所有需要的插件，我们可以使用一个 "preset" （即一组预先设定的插件）

## 插件和预设: @babel/plugin-transform-arrow-functions
+ @babel/preset-env没有任何配置，此预设将包括所有插件以支持现代JavaScript（ES2015，ES2016等）
+ 插件开发：

## Babel的核心功能位于@ babel/core模块中
```
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-arrow-functions"]
});
```

## core.js
+ 部分引入： import 'core-js/features/array/from';
```
es5、es6的polyfills，包括promises、symbols、collections、iterators、typed arrays、ECMAScript 7+ proposals、setImmediate 等等。
如果使用了 babel-runtime、babel-plugin-transform-runtime 或者 babel-polyfill，你就可以间接的引入了 core-js 标准库
```

## @ babel/cli是允许您从终端使用babel的工具
```
./node_modules/.bin/babel src --out-dir lib
```

## @babel/polyfill: Ba从Babel 7.4.0开始，不推荐使用此软件包，而直接包括core-js/stable（包括regenerator-runtime/runtimepolyfill ECMAScript功能）和（需要使用转译的生成器函数）（https://www.babeljs.cn/docs/babel-polyfill）
+ 由于这是一个polyfill（将在您的源代码之前运行），因此我们需要将其设置为dependency，而不是devDependency
+ 提供polyfill是为了方便起见，但您应该将其与@babel/preset-env和useBuiltIns选项一起使用，以便它不包括并非总是需要的整个polyfill。否则，我们建议您手动导入各个polyfill
+ 我们所使用的 env preset 提供了一个 "useBuiltIns" 参数，当此参数设置为 "usage" 时，就会加载上面所提到的最后一个优化措施，也就是只包含你所需要的 polyfill
+  @babel/polyfill 这个库（该库一共分为两部分，第一部分是 core-js，第二部分是 regenerator-runtime

```
老版本
npm install --save @babel/polyfill

新
import "core-js/stable";
import "regenerator-runtime/runtime";
```

## 对于有env，的场景，正在使用env预设，该预设具有一个"useBuiltIns"选项，当设置"usage"为时，它将实际上应用上述的最后一个优化，其中您仅包含所需的polyfills
+ 使用webpack，有多种方法可以包含polyfill：
  + 当与一起使用时@babel/preset-env，
    + useBuiltIns: 'usage'在中指定，.babelrc则不包括@babel/polyfill在webpack.config.js输入数组或源中。注意，@babel/polyfill仍然需要安装
    + useBuiltIns: 'entry'在中指定，.babelrc则@babel/polyfill通过require或import如上所述，将其包含在应用程序入口点的顶部
    + useBuiltIns未指定key或useBuiltIns: false在.babelrc中明确设置了key，则@babel/polyfill直接将其添加到的入口数组中webpack.config.js
  + 如果@babel/preset-env未使用，则@babel/polyfill如上所述将其添加到webpack条目数组。仍然可以通过import或将其添加到应用程序的入口点的顶部require，但是不建议这样做

## 配置
+ babelrc.json（配置仅适用于项目的单个部分） 
+ babel.config.json（译node_modules）

## babel-runtime babel-plugin-transform-runtime:  runtime 机制，为组件开发而生
```
// .babelrc
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "debug": true,
                "useBuiltIns": "false",
                "targets":{
                    "browsers":["> 1%", "last 2 versions", "not ie <= 8"]
                }
            }
        ]
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": 2 // 参考官方文档
              }
        ]
    ],
}
npm install --save @babel/runtime
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime-corejs2 --save  // 官方文档 说这个可以不加，我试了不加，没起作用
```

## 总结
```
Babel 只是转换 syntax 层语法,所有需要 @babel/polyfill 来处理API兼容,又因为 polyfill 体积太大，所以通过 preset的 useBuiltIns 来实现按需加载,再接着为了满足 npm 组件开发的需要 出现了 @babel/runtime 来做隔离

babel 在转译的过程中，对 syntax 的处理可能会使用到 helper 函数，对 api 的处理会引入 polyfill。
默认情况下，babel 在每个需要使用 helper 的地方都会定义一个 helper，导致最终的产物里有大量重复的 helper；引入 polyfill 时会直接修改全局变量及其原型，造成原型污染。
@babel/plugin-transform-runtime 的作用是将 helper 和 polyfill 都改为从一个统一的地方引入，并且引入的对象和全局变量是完全隔离的，这样解决了上面的两个问题。
```


## 历史记录
+ babel: https://www.babeljs.cn/docs/usage
+ babel-runtimne: https://segmentfault.com/q/1010000005596587?from=singlemessage&isappinstalled=1;https://segmentfault.com/q/1010000012041869/a-1020000012044930;
> Babel 默认只转换新的 JavaScript 语法，而不转换新的 API。例如，Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转译。如果想使用这些新的对象和方法，必须使用 babel-polyfill，为当前环境提供一个垫片。
> transform-runtime只会对es6的语法进行转换，而不会对新api进行转换。babel-runtime 是供编译模块复用工具函数。
如果需要转换新api，就要引入babel-polyfill

> 避免 babel 编译的工具函数在每个模块里重复出现，减小库和工具包的体积；
在没有使用 babel-runtime 之前，库和工具包一般不会直接引入 polyfill。否则像 Promise 这样的全局对象会污染全局命名空间，这就要求库的使用者自己提供 polyfill。这些 polyfill 一般在库和工具的使用说明中会提到，比如很多库都会有要求提供 es5 的 polyfill。在使用 babel-runtime 后，库和工具只要在 package.json 中增加依赖 babel-runtime，交给 babel-runtime 去引入 polyfill 就行了；

+ babel-core 的作用是把 js 代码分析成 ast ，方便各个插件分析语法进行相应的处理。有些新语法在低版本 js 中是不存在的，如箭头函数，rest 参数，函数默认值等，这种语言层面的不兼容只能通过将代码转为 ast，分析其语法后再转为低版本 js。
+ Babel 的 CLI 是一种在命令行下使用 Babel 编译文件的简单方法。
+ 插件和预设（preset）
+  "@babel/env", (@babel/preset-env)名为 env 的 preset 只会为目标浏览器中没有的功能加载转换插件

> npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill