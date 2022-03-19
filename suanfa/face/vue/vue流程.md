## https://juejin.cn/book/6844733705089449991/section/6844733705211084808#heading-3
+ vue init(初始化生命周期、事件、 props、 methods、 data、 computed 与 watch )，Object.defineProperty 进行了绑定data
+ 调用 $mount 会挂载组件
  + compile:运行时编译，即不存在 render function 但是存在 template 的情况，需要进行「编译」步骤
    + parse: 会用正则等方式解析 template 模板中的指令、class、style等数据，形成AST
    + optimize:标记 static 静态节点，后面当 update 更新界面时，会有一个 patch 的过程， diff 算法会直接跳过静态节点
    + generate: 将 AST 转化成 render function 字符串的过程，得到结果是 render 的字符串以及 staticRenderFns 字符串
  + render方法把render function转化为 VNode 节点，Virtual DOM 其实就是一棵以 JavaScript 对象（ VNode 节点）作为基础的树
+ 响应式: 当 render function 被渲染的时候，因为会读取所需对象的值，所以会触发 getter 函数进行「依赖收集」,依赖收集」的目的是将观察者 Watcher 对象存放到当前闭包中的订阅者 Dep 的 subs 中

```
/*
  obj: 目标对象
  prop: 需要操作的目标对象的属性名
  descriptor: 描述符
    enumerable，属性是否可枚举，默认 false。
    configurable，属性是否可以被修改或者删除，默认 false。
    get，获取属性的方法。
    set，设置属性的方法。
  return value 传入对象
*/
Object.defineProperty(obj, prop, descriptor)
```
+ 依赖收集：
```
class Dep {
  constructor() {
    this.subs = [];
  }
  addSup(sub) {
    this.subs.push(sub);
  }
  /* 通知所有Watcher对象更新视图 */
  notify() {
    this.subs.forEach((sub)=> {
      sub.update();
    })
  }
}
```
+ Watcher
```
let uid = 0;
class Watcher {
  constructor() {
    /* 在new一个Watcher对象时将该对象赋值给Dep.target，在get中会用到 */
    Dep.targe = this；
    this.id = ++uid;
  }
  /* 更新视图的方法 */
  update() {
    queueWather(this)
  }
}
```
+ 数据更新视图: 在对 model 进行操作对时候，会触发对应 Dep 中的 Watcher 对象。Watcher 对象会调用对应的 update 来修改视图
  + 最终是将新产生的 VNode 节点与老 VNode 进行一个 patch 的过程，比对得出「差异」
+ 批量异步更新策略及 nextTick 原理:
  + setter -> Dep -> Watcher -> patch -> 视图
  + 每次触发某个数据的 setter 方法后，对应的 Watcher 对象其实会被 push 进一个队列 queue 中，在下一个 tick 的时候将这个队列 queue 全部拿出来 run（ Watcher 对象的一个方法，用来触发 patch 操作） 一
  + Vue.js 实现了一个 nextTick 函数，传入一个 cb ，这个 cb 会被存储到一个队列中，在下一个 tick 时触发队列中的所有 cb 事件。
  + 分别用 Promise、setTimeout、setImmediate 等方式在 microtask（或是task）中创建一个事件，目的是在当前调用栈执行完毕以后（不一定立即）才会去执行这个事件
```
let padding = false;
let callBacks = [];
function nextTick(cb) {
  callBacks.push(cb);
  if (!padding) {
    padding = true;
    setTimeout(flushCallbacks, 0)
  }
}
function flushCallbacks() {
  padding = false;
  const copies = callBacks.slice(0);
  for (let i = 0; i < copies.length; i++) {
      copies[i]();
  }
}
```


创建Vue实例对象
init过程会初始化生命周期，初始化事件中心，初始化渲染、执行beforeCreate周期函数、初始化 data、props、computed、watcher、执行created周期函数等。
初始化后，调用$mount方法对Vue实例进行挂载（挂载的核心过程包括模板编译、渲染以及更新三个过程）。
如果没有在Vue实例上定义render方法而是定义了template，那么需要经历编译阶段。需要先将template 字符串编译成 render function，template 字符串编译步骤如下 ：

parse正则解析template字符串形成AST（抽象语法树，是源代码的抽象语法结构的树状表现形式）
optimize标记静态节点跳过diff算法（diff算法是逐层进行比对，只有同层级的节点进行比对，因此时间的复杂度只有O(n)。如果对于时间复杂度不是很清晰的，可以查看我写的文章ziyi2/algorithms-javascript/渐进记号）
generate将AST转化成render function字符串


编译成render function 后，调用$mount的mountComponent方法，先执行beforeMount钩子函数，然后核心是实例化一个渲染Watcher，在它的回调函数（初始化的时候执行，以及组件实例中监测到数据发生变化时执行）中调用updateComponent方法（此方法调用render方法生成虚拟Node，最终调用update方法更新DOM）。
调用render方法将render function渲染成虚拟的Node（真正的 DOM 元素是非常庞大的，因为浏览器的标准就把 DOM 设计的非常复杂。如果频繁的去做 DOM 更新，会产生一定的性能问题，而 Virtual DOM 就是用一个原生的 JavaScript 对象去描述一个 DOM 节点，所以它比创建一个 DOM 的代价要小很多，而且修改属性也很轻松，还可以做到跨平台兼容），render方法的第一个参数是createElement(或者说是h函数)，这个在官方文档也有说明。
生成虚拟DOM树后，需要将虚拟DOM树转化成真实的DOM节点，此时需要调用update方法，update方法又会调用pacth方法把虚拟DOM转换成真正的DOM节点。需要注意在图中忽略了新建真实DOM的情况（如果没有旧的虚拟Node，那么可以直接通过createElm创建真实DOM节点），这里重点分析在已有虚拟Node的情况下，会通过sameVnode判断当前需要更新的Node节点是否和旧的Node节点相同（例如我们设置的key属性发生了变化，那么节点显然不同），如果节点不同那么将旧节点采用新节点替换即可，如果相同且存在子节点，需要调用patchVNode方法执行diff算法更新DOM，从而提升DOM操作的性能。



在init的时候会利用Object.defineProperty方法（不兼容IE8）监听Vue实例的响应式数据的变化从而实现数据劫持能力（利用了JavaScript对象的访问器属性get和set，在未来的Vue3中会使用ES6的Proxy来优化响应式原理）。在初始化流程中的编译阶段，当render function被渲染的时候，会读取Vue实例中和视图相关的响应式数据，此时会触发getter函数进行依赖收集（将观察者Watcher对象存放到当前闭包的订阅者Dep的subs中），此时的数据劫持功能和观察者模式就实现了一个MVVM模式中的Binder，之后就是正常的渲染和更新流程。
当数据发生变化或者视图导致的数据发生了变化时，会触发数据劫持的setter函数，setter会通知初始化依赖收集中的Dep中的和视图相应的Watcher，告知需要重新渲染视图，Wather就会再次通过update方法来更新视图。


可以发现只要视图中添加监听事件，自动变更对应的数据变化时，就可以实现数据和视图的双向绑定了。

```
MVVM的实现演示
MVVM的流程设计
中介者模式的实现
数据劫持的实现
数据双向绑定的实现
简易视图指令的编译过程的实现
ViewModel的实现
MVVM的实现
```

## vue nextTick   
### Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。
+ Promise
+ MutationObserver
+ setTimeout

## vue.use



