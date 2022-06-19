# javascript语言
## 执行上下文-执行上下文栈 
+ 创建变量环境组件： 
  + 变量对象（vo)
+ 创建词法环境组件  词法作用域(lexical scoping)，也就是静态作用域
  + 一个外部环境的引用（作用域链）
  + 环境记录器
+ this

## 执行上下文和执行栈（https://juejin.im/post/5ba32171f265da0ab719a6d7）执行上下文是评估和执行 JavaScript 代码的环境的抽象概念。每当 Javascript 代码在运行的时候，它都是在执行上下文中运行。
+ https://juejin.cn/post/7043408377661095967
+ 怎么创建执行上下文；创建执行上下文有两个阶段：1) 创建阶段 和 2) 执行阶段。创建阶段会
  - this 值的决定，即我们所熟知的 This 绑定。
  - 创建词法环境组件。词法环境是一种规范类型，基于 ECMAScript 代码的词法嵌套结构来定义标识符和具体变量和函数的关联。一个词法环境由环境记录器和一个可能的引用外部词法环境的空值组成。
    - 词法环境的内部有两个组件：(1) 环境记录器和 (2) 一个外部环境的引用。
      - 环境记录器是存储变量和函数声明的实际位置。
        - 声明式环境记录器存储变量、函数和参数。在函数环境中，环境记录器是声明式环境记录器；对于函数环境，声明式环境记录器还包含了一个传递给函数的 arguments 对象（此对象存储索引和参数的映射）和传递给函数的参数的 length。
        - 对象环境记录器用来定义出现在全局上下文中的变量和函数的关系。在全局环境中，环境记录器是对象环境记录器。
      - 外部环境的引用意味着它可以访问其父级词法环境（作用域）。
    - 词法环境有两种类型：
      - 全局环境: 是没有外部环境引用的词法环境。全局环境的外部环境引用是 null。
      - 函数环境: 函数内部用户定义的变量存储在环境记录器中。并且引用的外部环境可能是全局环境，或者任何包含此内部函数的外部函数。
  - 创建变量环境组件。(vo: 变量对象): 
    - 只有 函数声明(function declaration) 会被加入到变量对象中，而 **函数表达式(function expression)**则不会。

+ 执行上下文的类型：
  - 全局执行上下文（GlobalExectionContext
  - 函数执行上下文（FunctionExectionContext）
  - Eval 函数执行上下文
```
let a = 20;
const b = 30;
var c;

function multiply(e, f) {
 var g = 20;
 return e * f * g;
}

c = multiply(20, 30);

GlobalExectionContext = { //  全局执行上下文（GlobalExectionContext
  ThisBinding: <Global Object>, // this
  LexicalEnvironment: { // 词法环境
    EnvironmentRecord: { // 环境记录器
      Type: "Object", // 对象环境记录器
      // 在这里绑定标识符
      a: < uninitialized >,
      b: < uninitialized >,
      multiply: < func >
    }
    outer: <null> // 外部环境引用
  }

  VariableEnvironment: { // 变量环境
    EnvironmentRecord: {  // 环境记录器
      Type: "Object",  // 对象环境记录器
      // 在这里绑定标识符
      c: undefined,
    }
    outer: <null> // 外部环境引用
  }
}



FunctionExectionContext = { // 函数执行上下文（FunctionExectionContext）
  ThisBinding: <Global Object>, // this
 
  LexicalEnvironment: { // 词法环境
    EnvironmentRecord: { // 环境记录器
      Type: "Declarative", // 声明环境记录器
      // 在这里绑定标识符
      Arguments: {0: 20, 1: 30, length: 2},
    },
    outer: <GlobalLexicalEnvironment> // 外部环境引用
  },

  VariableEnvironment: { // 变量环境
    EnvironmentRecord: { // 环境记录器
      Type: "Declarative", // 声明环境记录器
      // 在这里绑定标识符
      g: undefined
    },
    outer: <GlobalLexicalEnvironment> 
  }
}

```

+ 对于每个执行上下文，都有三个重要属性：
  - 变量对象(Variable object，VO); 全局上下文中的变量对象就是全局对象呐！函数，则将其活动对象（activation object)当做变量对象
  - 作用域链(Scope chain): 词法环境(词法环境的内部有两个组件：(1) 环境记录器和 (2) 一个外部环境的引用(作用域）。)
  - this

## 执行环境和作用域链(execution context and scope chain)
+ execution context
顾名思义 执行环境/执行上下文。在javascript中，执行环境可以抽象的理解为一个object，它由以下几个属性构成：
```
executionContext：{
    variable object：vars,functions,arguments,
    scope chain: variable object + all parents scopes
    thisValue: context object
}
此外在js解释器运行阶段还会维护一个环境栈，当执行流进入一个函数时，函数的环境就会被压入环境栈，当函数执行完后会将其环境弹出，并将控制权返回前一个执行环境。环境栈的顶端始终是当前正在执行的环境。

```

## 作用域： 词法作用域和动态作用域
+ 作用域是指程序源代码中定义变量的区域。作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。
+ JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。函数的作用域在函数定义的时候就决定了。因为JavaScript采用的是词法作用域，函数的作用域基于函数创建的位置。
+ 与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。词法作⽤域是代码阶段就决定好的，和函 词 数是怎么调⽤的没有关系 数 。
```
var value = 1;
function foo() {
    console.log(value);
}
function bar() {
    var value = 2;
    foo();
}
bar();
// 结果是 ??? 1
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope(); // local scope
```

## scope chain
+ 作用域链，它在解释器进入到一个执行环境时初始化完成并将其分配给当前执行环境。每个执行环境的作用域链由当前环境的变量对象及父级环境的作用域链构成。
作用域链具体是如何构建起来的呢，先上代码：
```
function test(num){
    var a = "2";
    return a+num;
}
test(1);
test.scopeChain = [ test.variableObject, test.[[scope]]];
```

## this (https://juejin.im/post/5aa1eb056fb9a028b77a66fd)
+ this的指向是调用时决定的，而不是创建时决定的,this具有运行期绑定的特性
+ apply call: this指向绑定的对象上
  - say.call(person,"FE"); // axuebin:25 say.apply(person,["FE"]); // axuebin:25
+ bind: this将永久地被绑定到了bind的第一个参数 say.bind(person);
+ 所有的箭头函数都没有自己的this，都指向外层。
```
function Person(name){
  this.name = name;
  this.say = () => {
    var name = "xb";
    return this.name;
  }
}
var person = new Person("axuebin");
console.log(person.say()); // axuebin
```
  
## 变量对象：
+ vo:每一个执行上下文都会分配一个变量对象(variable object)，变量对象的属性由 变量(variable) 和 函数声明(function declaration) 构成。在函数上下文情况下，参数列表(parameter list)也会被加入到变量对象(variable object)中作为属性。变量对象与当前作用域息息相关。不同作用域的变量对象互不相同，它保存了当前作用域的所有函数和变量。
  + - 只有 函数声明(function declaration) 会被加入到变量对象中，而 **函数表达式(function expression)**则不会。
  ```
    // 函数声明
    function a(){}
    console.log(typeof a); // "function"

    // 函数表达式
    var a = function _a(){};
    console.log(typeof a); // "function"
    console.log(typeof _a); // "undefined"
    函数声明的方式下，a会被加入到变量对象中，故当前作用域能打印出 a。
    函数表达式情况下，a作为变量会加入到变量对象中，_a作为函数表达式则不会加入，故 a 在当前作用域能被正确找到，_a则不会。
  ```

## 活动对象： 
+ ao: 当函数被激活，那么一个活动对象(activation object)就会被创建并且分配给执行上下文。活动对象由特殊对象 arguments 初始化而成。随后，他被当做变量对象(variable object)用于变量初始化。
```
function a(name, age){
    var gender = "male";
    function b(){}
}
a(“k”,10);
a被调用时，在a的执行上下文会创建一个活动对象AO，并且被初始化为 AO = [arguments]。随后AO又被当做变量对象(variable object)VO进行变量初始化,此时 VO = [arguments].concat([name,age,gender,b])
```

## ao vo go(https://www.cnblogs.com/TomXu/archive/2012/01/16/2309728.html)
+ 执行环境定义了变量或者函数有权访问的其他数据，决定了它们各自的行为。每个执行环境都有一个与之关联的变量对象（vo)，环境中定义的所有变量和函数都保存在这个对象里。
+ 全局执行环境:window对象；全局变量和函数都是window对象的属性和方法创建的。某个执行环境中的代码执行完毕后，该环境被销毁，保存在其中的函数和变量也被销毁。
+ 每个函数都有自己的执行环境。当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。而在函数执行后，栈将其推出，把控制权交个之前的执行环境
+ 代码在一个环境中执行时，会创建变量对象的一个作用域链（保证对执行环境有权访问的所有变量和函数的有序访问）
+ 作用域链的前端，总是当前执行的代码所在环境的变量对象，如果这个环境是函数，则将其活动对象（ao)当做变量对象
+ 变量对象(缩写为VO)是一个与执行上下文相关的特殊对象，它存储着在上下文中声明的以下内容：变量 (var, 变量声明); 函数声明 (FunctionDeclaration, 缩写为FD) 函数的形参<

## 词法分析，语法分析


## 闭包：闭包是指那些能够访问自由变量的函数。闭包 = 函数 + 函数能够访问的自由变量；《JavaScript权威指南》中就讲到：从技术的角度讲，所有的JavaScript函数都是闭包。

## prototype（https://www.cnblogs.com/Nancy-wang/p/6903221.html?utm_source=itdadao&utm_medium=referral）
+ prototype 自己也是对象，只是被用以承担某个职能罢
+ 1）通过 Object.getPrototypeOf(obj) 间接访问指定对象的 prototype 对象。
2）通过 Object.setPrototypeOf(obj, anotherObj) 间接设置指定对象的 prototype 对象。
3）部分浏览器提前开了 __proto__ 的口子，使得可以通过 obj.__proto__ 直接访问原型，通过 obj.__proto__ = anotherObj 直接设置原型。
4）ECMAScript 2015 规范只好向事实低头，将 __proto__ 属性纳入了规范的一部分。

## 正则(https://www.runoob.com/regexp/regexp-metachar.html)
```
function isType(content,type,fn){
    // 类型判断
    let t = Object.prototype.toString
            .call(content)
            .replace(/\[object\s|\]/g,'')
            console.log(t)
    fn(type,t)
}
isType('hello swr','String',function(type,t){
    console.log(type === t) // true
})
```





## ...
+ var args = [1,2,3,4] [...args]

## 跨域(https://segmentfault.com/a/1190000011145364) https://juejin.im/post/5c23993de51d457b8c1f4ee1
+ 1、 通过jsonp跨域
+ 2、 document.domain + iframe跨域
+ 3、 location.hash + iframe
+ 4、 window.name + iframe跨域
+ 5、 postMessage跨域
```
// a.html
  <iframe src="http://localhost:4000/b.html" frameborder="0" id="frame" onload="load()"></iframe> //等它加载完触发一个事件
  //内嵌在http://localhost:3000/a.html
    <script>
      function load() {
        let frame = document.getElementById('frame')
        frame.contentWindow.postMessage('我爱你', 'http://localhost:4000') //发送数据
        window.onmessage = function(e) { //接受返回数据
          console.log(e.data) //我不爱你
        }
      }
    </script>
// b.html
  window.onmessage = function(e) {
    console.log(e.data) //我爱你
    e.source.postMessage('我不爱你', e.origin)
 }

```
+ 6、 跨域资源共享（CORS）
  + 简单请求： https://blog.csdn.net/luanxiyuan/article/details/100137496
    + origin(源（协议 + 域名 + 端口）) 如果Origin指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。都以Access-Control- 开头（Access-Control-Allow-Origin Access-Control-Allow-Credentials Access-Control-Expose-Headers）
  + 复杂请求： 非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）Access-Control-Request-Method; 符合简单请求就没有option请求；
+ 7、 nginx代理跨域
```
```
+ 8、 nodejs中间件代理跨域
+ 9、 WebSocket协议跨域
```
WebSocket和HTTP都是应用层协议，都基于 TCP 协议。但是 WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据。同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了
```

## 浏览器多个标签页之间的通信(https://juejin.im/post/5b0d0a3cf265da092767917f)

## 你应该知道的requestIdleCallback https://juejin.im/post/5ad71f39f265da239f07e862(https://www.jianshu.com/p/2771cb695c81?tt_from=weixin)

## js原生（http://www.runoob.com/jsref/dom-obj-document.html）

## JavaScript 函数有两个内部方法：[[Call]] 和 [[Construct]]。
+ 当通过 new 调用函数时，执行 [[Construct]] 方法，创建一个实例对象，然后再执行函数体，将 this 绑定到实例上。当直接调用的时候，执行 [[Call]] 方法，直接执行函数体。

## typescript

## vue和react区别

## 图片懒加载
+ 懒加载也叫延迟加载，指的是在长网页中延迟加载图像，是一种很好优化网页性能的方式。用户滚动到它们之前，可视区域外的图像不会加载。
+ 首先将页面上的图片的 src 属性设为空字符串，而图片的真实路径则设置在data-original属性中，当页面滚动的时候需要去监听scroll事件，在scroll事件的回调中，判断我们的懒加载的图片是否进入可视区域,如果图片在可视区内将图片的 src 属性设置为data-original 的值，这样就可以实现延迟加载。
+ getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。

## 预加载简单来说就是将所有所需的资源提前请求加载到本地，这样后面在需要用到时就直接从缓存取资源

## runtime-compiler 创建的项目中的参数是 components 和 template，而在 runtime-only创建的项目中，参数是 render函数，
+ template --> ast --> render --> vDom --> 真实的Dom --> 页面
+ runtime-only：准备好了render供使用
> 在使用 runtime-only 的时候，需要借助 webpack的loader工具，将 .vue 文件编译为JavaScript，因为是在编译阶段做的，所以它只包含运行时的 Vue.js 代码，所以代码体积会更轻量。
> template 会通过 vue-template-compiler 转换为 render 函数
> 在将 .vue 文件编译为 JavaScript文件的过程中会将组件中的 template 模版编译为 render 函数，所以我们得到的是 render 函数的版本。所以运行的时候是不带编译的，编译是在离线的时候做的
+ runtime-compiler：运行时才生成render函数
> 因为在Vue中，最终渲染都是通过 render函数，如果写 template 属性，则会编译为 render 函数，那么这个编译过程会发生在运行时，所以需要带有编译器的版本,编译过程会对性能有一定的损耗

runtime-only： 将template在打包的时候，就已经编译为 render函数

runtime-compiler： 在运行的时候，才去编译 template

结果： 发布生产的时候，runtime-only 构建的项目代码体积更小，运行速度更


## es6 commonjs AMD (https://github.com/muwoo/blogs/issues/28)
+ https://zhuanlan.zhihu.com/p/33843378?group_id=947910338939686912
+ es6 modules 是一个编译时就会确定模块依赖关系的方式
+ CommonJS的模块规范中，Node 在对 JS 文件进行编译的过程中，会对文件中的内容进行头尾包装，在头部添加(function (export, require, modules, __filename, __dirname){\n 在尾部添加了\n};。这样我们在单个JS文件内部可以使用这些参数
  + 四个重要的环境变量为模块化的实现提供支持 :module、exports、require、global,
  + module.exports定义当前模块对外输出的接口，用require加载模块。
  + CommonJS 的一个模块，就是一个脚本文件
  + require命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象。
  + 即使再次执行require命令，也不会再次执行该模块，而是到缓存之中取值。
  + commonJS用同步的方式加载模块，只有在代码执行到require的时候，才回去执行加载。
  + 在服务端，模块文件都存在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。
```
(function(exports, require, modules, __filename, __dirname)) {
  ...
})
```
+ AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。AMD 规范采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。说了这么多，来看一下一个AMD规范的RequireJS 是如何定义的：
```
// 定义 moduleA 依赖 a, b模块
define(['./a','./b'],function(a,b){
   a.doSomething()
   b.doSomething()
}) 

// 使用
require(['./moduleA'], function(moduleA) {
  // ...
})
```
+ CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。AMD 推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行。
  + require.js在申明依赖的模块时会在第一之间加载并执行模块内的代码，而CMD则是在使用的时候就近定义
+ ES6: ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为浏览器和服务器通用的模块解决方案。其模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。
  + ES6 Modules不是对象，import命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载。也正因为这个，使得静态分析成为可能
+ CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
  + 运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
  + 编译时加载: ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，import时采用静态命令的形式。即在import时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”
  + CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。


## path.join path.resolve(https://juejin.im/post/5cfc96c5f265da1b8333805a)
+ const path3 = path.resolve('/a/b', '../c/d'); // acd
+ path.join('/a', '/b'); 

## Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
+ Object.defineProperty(obj, prop, descriptor(属性描述符))
```
```

## evenloop:事件，用户交互，脚本，渲染，网络这些都是我们所熟悉的东西，他们都是由event loop协调的
+ 主线程
+ 任务队列
+ 一个evenloop有多个task;
  - setTimeout
  - setInterval
  - setImmediate
  - I/O
  - UI rendering
+ microtask: 每一个event loop都有一个microtask队列，一个microtask会被排进microtask队列而不是task队列
  - process.nextTick
  - promises
  - Object.observe
  - MutationObserver

## script async和defer的区别
+ defer属性，相当于告诉浏览器立即下载，但延迟执行
  + 因此第一个延迟脚本会先于第二个延迟脚本执行，而这两个脚本会先于DOMContentLoaded事件执行。在现实当中，延迟脚本并不一定会按照顺序执行，也不一定会在DOMContentLoad时间触发前执行，因此最好只包含一个延迟脚本。
+ 同样与defer类似，async只适用于外部脚本文件，并告诉浏览器立即下载文件。但与defer不同的是，标记为async的脚本并不保证按照它们的先后顺序执行。会在下载后立即执行，阻止页面渲染。
  + 第二个脚本文件可能会在第一个脚本文件之前执行。因此确保两者之间互不依赖非常重要。指定async属性的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容。
  + 异步加载资源，且加载完JS资源立即执行，并不会按顺序，谁快谁先上
+ 同时使用async和defer；表现和async一致
+ 上caniuse，async在IE<=9时不支持，其他浏览器OK；defer在IE<=9时支持但会有bug，其他浏览器OK；现象在这个issue里有描述，这也就是“望远镜”里建议只有一个defer的原因。所以两个属性都指定是为了在async不支持的时候启用defer，但defer在某些情况下还是有bug。
+ async属性就相当于单独开了一个进程去独立加载和执行，而defer是和将<script>放到<body>底部一样的效果

## 借助 url-loader 或是 file-loader完成对 webpack 编译图片的配置
+ 新版file-loader: src="[object Module]"

## src：url ：不会被webpack处理
- src：require（）：会被webpack处理
- background：url：会被webpack处理

## 当一个对象实现了Symbol.iterator属性时

## // 如何搭建一个npm仓库

## % / 10/2   余数0；商5
+ %取模，余     /取商

## 手写ajax
+ suanfa/face/jsDemo/ajax

## 手写promise.all

## [] == (![])的结果是
> 根据运行符优先级，取反号优先，所以步骤拆解为var a = [];  // Arrayvar b = [];  // Arrayvar c = !b;  // boolean求  a == c  的值首先，求c的值，因为是取反操作，所以确定c的值是boolean，根据犀牛书49页，空数组转boolean值为true，根据题设再取反，所以 c=false;其次，进行a 与 c的比较，即 数组对象 与 boolean型的比较!最终都是用数字进行比较的。JavaScript核心内置类会首先尝试使用valueOf(),再尝试使用toString()输出对象原型。所以根据规则，空数组输出的对象原型是长度为0的空字符串"";则 a与c的比较变为了：“” == false""转数字，值为0;false转数字，值为0，最后比较的是：0 == 0.

## 302跳转时，原生ajax和服务端分别做了什么
+ 原来，当服务器将302响应发给浏览器时，浏览器并不是直接进行ajax回调处理，而是先执行302重定向——从Response Headers中读取Location信息，然后向Location中的Url发出请求，在收到这个请求的响应后才会进行ajax回调处理。大致流程如下：
+ ajax -> browser -> server -> 302 -> browser(redirect) -> server -> browser -> ajax callback
+ 而在我们的测试程序中，由于302返回的重定向URL在服务器上没有相应的处理程序，所以在ajax回调函数中得到的是404状态码；如果存在对应的URL，得到的状态码就是200
+ 所以，如果你想在ajax请求中根据302响应通过location.href进行重定向是不可行的
```
return Json(new { status = 302, location = "/oauth/respond" });
$.ajax({
    url: '/oauth/respond',
    type: 'post',
    data: data,
    dataType: 'json',
    success: function (data) {
        if (data.status == 302) {
            location.href = data.location;
        }
    }
});        

```

## www.baidu.com已经登陆了，如何让tieba.baidu.com直接登陆
```
.com 顶级域名
baidu.com 一级域名
www.baidu.com 二级域名
bbs.baidu.com 二级域名
tieba.baidu.com 二级域名
```

## 扫码登陆的基本原理
+ https://cloud.tencent.com/developer/article/1347341

## vue和react的区别

## canvas常见的性能优化方法

## 一个无侵入的pv上报sdk如何实现

## 函数对象和普通对象(https://juejin.cn/post/6844903984335945736)
+ 所有 Function 的实例都是函数对象，其他的均为普通对象，其中包括 Function 实例的实例。typpeof new Function ({}) === function
+ __proto__: foo.__proto__ = Foo.prototype.__proto__ =Object.prototype
+ __proto__和constructor是对象独有的。prototype属性是函数独有的；
+ prototype是函数所独有的。**它的作用就是包含可以给特定类型的所有实例提供共享的属性和方法
+ constructor属性也是对象所独有的，它是一个对象指向一个函数，这个函数就是该对象的构造函数。  f.constructor === F; F.prototype.constructor ===  F
  + 单从constructor这个属性来讲，只有prototype对象才有。
  + 每个函数在创建的时候，JavaScript 会同时创建一个该函数对应的prototype对象，而函数创建的对象.__proto__ === 该函数.prototype，该函数.prototype.constructor===该函数本身，故通过函数创建的对象即使自己没有constructor属性，它也能通过__proto__找到对应的constructor
```
function fun1(){};
const fun2 = function(){};
const fun3 = new Function('name','console.log(name)');

const obj1 = {};
const obj2 = new Object();
const obj3 = new fun1();
const obj4 = new new Function();

console.log(typeof Object);//function
console.log(typeof Function);//function
console.log(typeof fun1);//function
console.log(typeof fun2);//function
console.log(typeof fun3);//function
console.log(typeof obj1);//object
console.log(typeof obj2);//object
console.log(typeof obj3);//object
console.log(typeof obj4);//object

obj1，obj2，obj3，obj4都是普通对象，fun1，fun2，fun3 都是 Function 的实例，也就是函数对象
Function.__proto__ === Function.prototype//true


var f1 = new Foo() ->__proto__ = Foo.prototype 
Foo.prototype -> __proto__= Object.prototype 
Object.prototype -> __proto__ = null;

function Foo(){} -> __proto__ = Function.prototype
Function.prototype -> __proto__ = Object.prototype
Object.prototype-> __proto__  = null;

var obj1 = new Object() -> __proto__ Object.prototype
Object.prototype-> __proto__  = null;

functio Object() {}-> __proto__ = Function.prototype
Function.prototype -> __proto__ = Object.prototype
Object.prototype-> __proto__  = null;

function Function (){}-> __proto__ = Funciton.prototype
Function.prototype -> __proto__ = Object.prototype
Object.prototype-> __proto__  = null;

object.prototype.constructor = function Object(){}
Function.prototype.constructor = function Function (){}
```

## constructor
```
function Animal(){
　this.species = "动物";
}
function Cat(name,color){
　　this.name = name;
　　this.color = color;
}
Cat.prototype = new Animal();
console.log(cat1.constructor === Cat) // true
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛","黄色");
alert(cat1.species); // 动物
```

## instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
auto.__proto__ == Car.prototype // true
// expected output: true

console.log(auto instanceof Object);
// expected output: true


console.log(Object instanceof Object);//true 
console.log(Function instanceof Function);//true 
console.log(Number instanceof Number);//false 
console.log(String instanceof String);//false 

console.log(Function instanceof Object);//true 

console.log(Foo instanceof Function); // true 
console.log(Foo instanceof Foo); // false
```

## prototype
+ 每个函数内部都有一个prototype属性，

## String.replace()
```
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
// Smith, John
console.log(newstr);

function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%
```
## module.exports和export区别 // https://juejin.im/post/597ec55a51882556a234fcef

## 类数组和数组的区别
### 区别：
+ 数组在新增元素后，自动更新length
+ 设置length,可以截断数组
+ 从Array.prototype中继承方法
+ 属性为Array
+ 类数组拥有length,不能直接调用数组方法
### 转化方法：仅考虑0或者正整数 长度由length决定，索引不连续时转换结果时连续的，会自动补位
+ Array.from() 
+ Array.prototype.slice.call() 产生稀疏数组 [empty]
+ Array.prototype.forEach()
+ ...

## set和map区别

## 深浅拷贝原理和区别

## 实例修改会影响其他模块的

## let const
### let 
```
for (let i = 0; i < 10; i++) {
  // ...
}
console.log(i);

// ReferenceError: i is not defined
// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;

var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}

function func(arg) {
  let arg;
}
func() // 报错

function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
```
+ 不存在变量提升
+ let命令所在的代码块内有效
+ 暂时性死区 
+ 不允许重复声明
+ ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景

### const 
```
const PI = 3.1415;
PI // 3.1415
PI = 3;
// TypeError: Assignment to constant variable.

const foo;
// SyntaxError: Missing initializer in const declaration

if (true) {
  console.log(MAX); // ReferenceError
  const MAX = 5;
}

var message = "Hello!";
let age = 25;

// 以下两行都会报错
const message = "Goodbye!";
const age = 30;
```
+ const声明一个只读的常量。一旦声明，常量的值就不能改变
+ const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值
+ const的作用域与let命令相同：只在声明所在的块级作用域内有效。
+ const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
+ const声明的常量，也与let一样不可重复声明


## 单点登陆: 用户在一个系统登陆，在其他系统也登陆
+ 门户系统设置cookies的domain为一级域名也是zlt.com。这样可以共享门户的cookie给所有使用该域名xxx.alt.com的系统
+ 使用spring session等技术让所有系统共享session
+ 这样只要门户系统登陆之后，无论跳到应用1或者2，都能通过门户的cookie中的sessionid读取session中的登陆信息实现登陆

## promise
+ then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）

## node事件循环机制

## promise.all
+ 接受一个promise实例的数组或具有interator接口的对象作为参数
+ 返回一个promise对象
+ 遍历传入的参数，用primise.resolve()将参数包一层，使其变成一个promise对象
+ 参数所有回调成功才是成功，返回值数组与参数顺序一致
+ 参数数组中其中一个失败，则触发失败状态，第一个失败的promise信息作为promise.all的错误信息

## 前端手机错误信息上报
### 代码错误捕获
+ try...catch：异步不行,语法错误不行，promise async不行
+ window.onerror: 语法错误不行，异步非异步都行，监听不到加载资源报错，事件处理函数只能申明一次，不会重复执行多个回调
+ window.addEventListener('error') 监听多处资源报错， new Image不行，fetch不行
+ window.addEventListener('unhandledrejection') 捕获promise
+ catch：捕获promise async   import chunk错误
+ window.addEventListener("unhandledrejection", function (e) {})
+ vue.config.errorHandler = function(err) {}
### 资源加载
+ imgObj.onerror()
+ performance.getEntries();获取到成功加载的资源，对比可以间接的捕获错误
+ window.addEventListener('error', fn, true)会捕获，不会冒泡，
+ 加载远端跨域的js,使用window.onerror能够匹配到script加上try catch能够定义到方法里的错误
### 上传
+ new Image()，可以进行跨域，不会携带cookies，不需要等待服务器返回数据，使用1*1的gif，小

## preload prefetch(https://www.cnblogs.com/cangqinglang/p/11308243.html)(https://segmentfault.com/a/1190000000633364)
### preload 提供了一种声明式的命令，让浏览器提前加载指定资源(加载后并不执行)，在需要执行的时候再执行；preload 是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源；
+ 将加载和执行分离开，可不阻塞渲染和 document 的 onload 事件
+ 提前加载指定资源，不再出现依赖的font字体隔了一段时间才刷出
+ preload 加载页面必需的资源如 CDN 上的字体文件，
+ 利用浏览器的空闲时间去先下载用户指定需要的内容,然后缓存起来,这样用户下次加载时,就直接从缓存中取出来,效率就快了
+ 预加载查询在页面（html）请求到达服务端之后执行
```
使用 link 标签创建
<!-- 使用 link 标签静态标记需要预加载的资源 -->
<link rel="preload" href="/path/to/style.css" as="style">
<!-- 或使用脚本动态创建一个 link 标签后插入到 head 头部 -->
<script>
 const link = document.createElement('link');
 link.rel = 'preload';
 link.as = 'style';
 link.href = '/path/to/style.css';
 document.head.appendChild(link);
</script>
```
### prefetch 是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源。  为了提示浏览器，用户未来的浏览有可能需要加载目标资源，所以浏览器有可能通过事先获取和缓存对应资源，优化用户体验
+ preload 和 prefetch 混用的话，并不会复用资源，而是会重复加载。
+ prefetch 是一种 resource hint，用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容。
```
<link rel="prefetch" href="https://at.alicdn.com/t/font_zck90zmlh7hf47vi.woff" as="font">
```
### DNS prefetch 
+ 当我们访问一个网站如 www.amazon.com 时，需要将这个域名先转化为对应的 IP 地址，这是一个非常耗时的过程
+ 分析这个页面需要的资源所在的域名，浏览器空闲时提前将这些域名转化为 IP 地址，真正请求资源时就避免了上述这个过程的时间
```
// 我们的资源存在在不同的 CDN 中，那提前声明好这些资源的域名，就可以节省请求发生时产生的域名解析的时间。
// 如果我们知道用户接下来的操作一定会发起一起资源的请求，那就可以将这个资源进行 DNS-Prefetch，加强用户体验
<meta http-equiv='x-dns-prefetch-control' content='on'>
<link rel='dns-prefetch' href='http://g-ecx.images-amazon.com'>
<link rel='dns-prefetch' href='http://z-ecx.images-amazon.com'>
<link rel='dns-prefetch' href='http://ecx.images-amazon.com'>
<link rel='dns-prefetch' href='http://completion.amazon.com'>
<link rel='dns-prefetch' href='http://fls-na.amazon.com'>
```
### Resource prefetch
+ 在 Chrome 下，我们可以用 link标签声明特定文件的预加载：
  + <link rel='subresource' href='critical.js'>
+ rel='subresource' 表示当前页面必须加载的资源，应该放到页面最顶端先加载，有最高的优先级。
+ rel='prefetch' 表示当 subresource 所有资源都加载完后，开始预加载
  + <link rel='prefetch' href='secondary.js'>

### Pre render: 预解析DNS、预加载资源已经够强悍了有木有，可还有更厉害的预渲染（Pre-rendering）
+ 预渲染意味着我们提前加载好用户即将访问的下一个页面，否则进行预渲染这个页面将浪费资源，慎用！
+ <link rel='prerender' href='http://www.pagetoprerender.com'>
```
// 手动预渲染
var hint =document.createElement("link")
hint.setAttribute(“rel”,”prerender”)
hint.setAttribute(“href”,”next-page.html”)
document.getElementsByTagName(“head”)[0].appendChild(hint)
```


## 跨域
+ 跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了
+ http://(协议）www（子域名）.abc.com（主域名）:8080（端口）/script/jquery.js（请求资源地址）
+ 同源：同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源
+ JSONP只支持GET请求，JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。
+ 同源策略限制内容有： 
  + cookie
  + localStorage 
  + indexedDB
  + dom节点
  + AJAX 请求发送后，结果被浏览器拦截了
+ 但是有三个标签是允许跨域加载资源：
  + <img src=XXX>
  + <link href=XXX>
  + <script src=XXX>
### jsonp
### Access-Control-Allow-Origin
+ 复杂请求
  + put
+ 简单请求
  + get post head
### postMessage: postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递
+ 且是为数不多可以跨域操作的window属性之一
+ otherWindow.postMessage(message, targetOrigin, [transfer]);
+ window.onmessage
### websocket
+ new WebSocket('ws://localhost:3000');
+ onopen
+ onmessage
### Node中间件代理(两次跨域)
+ 服务器向服务器请求就无需遵循同源策略
### nginx反向代理: 只需要修改nginx的配置即可解决跨域问题，支持所有浏览器，支持session，不需要修改任何代码，并且不会影响服务器性能
### window.name + iframe: name值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）

## JavaScript 标准内置对象
### 函数属性
+ encodeURI()
+ decodeURI()
+ eval():
+ isFinite()
+ isNaN
+ parseInt(string, radix)
+ decodeURIComponent()
+ encodeURIComponent()
### 值属性
+ Infinity
+ undefined
+ NaN
+ globalThis
### 基本对象
+ object
+ Function
+ boolean
+ symbol
### 错误对象
+ Error: new Error(
+ ReferenceError: 对象代表当一个不存在的变量被引用时发生的错误。
+ InternalError)
+ TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。
+ SyntaxError 对象代表尝试解析语法上不合法的代码的错误。
### 数字和日期对象
+ Number
+ BigInt: 它提供了一种方法来表示大于 253 - 1 的整数
  + 一个整数字面量后面加 n 的方式定义一个 BigInt ，如：10n;调用函数BigInt()。
  ```
  const theBiggestInt = 9007199254740991n;
  const alsoHuge = BigInt(9007199254740991);
  // ↪ 9007199254740991n
  ```
+ Math
+ Date： new Date()
### 字符串
+ String
+ RegExp
### 可索引的集合对象
+ Array
### 使用键的集合对象
+ Map: for (let [key, value] of myMap);
  + let kvArray = [["key1", "value1"], ["key2", "value2"]]; let myMap = new Map(kvArray);
+ Set
  + for (let item of mySet) console.log(item);
  + let myArray = ["value1", "value2", "value3"]; let mySet = new Set(myArray);
+ WeakMap
+ WeakSet
### 结构化数据
+ JSON
```
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(JSON.stringify({ x: 5, y: 6 }));
stringify parse
```


