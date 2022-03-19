<!--
 * @Author: zhouchangping
 * @Date: 2022-02-24 17:19:53
 * @LastEditTime: 2022-03-07 20:03:36
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/项目/vue.md
 * 可以输入预定的版权声明、个性签名、空行等
-->
vue.init->vue.mount->vue.render->createElement->creatComponent->vue-update->patch
## 入口
+ initGlobalAPI(Vue)
  ```
  initMixin(Vue)
  stateMixin(Vue)
  eventsMixin(Vue)
  lifecycleMixin(Vue)
  renderMixin(Vue)
  ```
## 数据驱动
### new Vue 发生了什么
+ vue init（Vue 初始化主要就干了几件事情，合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher 等等）
  + 在 Vue 2.0 版本中，所有 Vue 的组件的渲染最终都需要 render 方法，无论我们是用单文件 .vue 方式开发组件，还是写了 el 或者 template 属性，最终都会转换成 render 方法
### Vue 实例挂载的实现
  + vue挂载，$mount, 
    + compileToFunctions转化为render函数
    + return mount.call(this, el, hydrating)
      + return mountComponent(this, el, hydrating)
        + mountComponent 核心就是先实例化一个渲染Watcher，在它的回调函数中会调用 updateComponent 方法，在此方法中调用 vm._render 方法先生成虚拟 Node，最终调用 vm._update 更新 DOM。
        ```
        new Watcher(vm, updateComponent, noop, {
          before () {
            if (vm._isMounted) {
              callHook(vm, 'beforeUpdate')
            }
          }
        }, true /* isRenderWatcher */)
        updateComponent = () => {
              vm._update(vm._render(), hydrating)
            }
        ```
### render: Vue.prototype._render,它用来把实例渲染成一个虚拟 Node
  + vnode = render.call(vm._renderProxy, vm.$createElement)
  + vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false) // 它是被模板编译成的 render 函数使用,  内部
  + vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true) // 用户手写 render 方法使用的
  + vm._render 最终是通过执行 createElement 方法并返回的是 vnode，它是一个虚拟 Node
    + render 函数的第一个参数是 createElement
      + createElement 创建 VNode 的过程，每个 VNode 有 children，children 每个元素也是一个 VNode，这样就形成了一个 VNode Tree
  + update
    + 它被调用的时机有 2 个，一个是首次渲染，一个是数据更新的时候
    + _update 的核心就是调用 vm.__patch__ 方法
## 组件化
+ 构造子类构造函数，
  + Vue.extend 的作用就是构造一个 Vue 的子类，它使用一种非常经典的原型继承的方式把一个纯对象转换一个继承于 Vue 的构造器 Sub 并返回，然后对 Sub 这个对象本身扩展了一些属性，如扩展 options、添加全局 API 等；并且对配置中的 props 和 computed 做了初始化工作；最后对于这个 Sub 构造函数做了缓存，避免多次执行 Vue.extend 的时候对同一个子组件重复构造
  + createComponent ()
    + const baseCtor = context.$options._base
    + baseCtor.extend(Ctor)
    + Sub 构造函数做了缓存，避免多次执行 Vue.extend 的时候对同一个子组件重复构造
    + 组件的 vnode 是没有 children
    + installComponentHooks 的过程就是把 componentVNodeHooks 的钩子函数合并到 data.hook
    + 子组件初始化过程通过 initInternalComponent 方式要比外部初始化 Vue 通过 mergeOptions 的过程要快，合并完的结果保留在 vm.$options 
+ 安装组件钩子函数
  + Vue.js 使用的 Virtual DOM 参考的是开源库 snabbdom
  + Vue.js 也是充分利用这一点，在初始化一个 Component 类型的 VNode 的过程中实现了几个钩子函数
+ 实例化 vnode
+ 生命周期
  + 各个阶段的生命周期的函数也被合并到 vm.$options 里，并且是一个数组。因此 callhook 函数的功能就是调用某个生命周期钩子注册的所有回调函数
  + 最终执行生命周期的函数都是调用 callHook 
  + beforeCreate 和 created 的钩子调用是在 initState 的前后，initState 的作用是初始化 props、data、methods、watch、computed 等属性，之后我们会详细分析。那么显然 beforeCreate 的钩子函数中就不能获取到 props、data
  + 在执行 vm._render() 函数渲染 VNode 之前，执行了 beforeMount 钩子函数，在执行完 vm._update() 把 VNode patch 到真实 DOM 后，执行 mounted 钩子
  + beforeUpdate 的执行时机是在渲染 Watcher 的 before
  + update 的执行时机是在flushSchedulerQueue 函数调用的时候
  + destroy 钩子函数执行顺序是先子后父，和 mounted 过程一样
  + activated 和 deactivated 钩子函数是专门为 keep-alive 组件定制的钩子
+ 组件组册
  + 局部注册和全局注册不同的是，只有该类型的组件才可以访问局部注册的子组件，而全局注册是扩展到 Vue.options 下，所以在所有组件创建的过程中，都会从全局的 Vue.options.components 扩展到当前组件的 vm.$options.components 
  + 而全局注册是扩展到 Vue.options 下，所以在所有组件创建的过程中，都会从全局的 Vue.options.components 扩展到当前组件的 vm.$options.components 下
+ 异步组件
  + 但是在整个异步组件加载过程中是没有数据发生变化的，所以通过执行 $forceUpdate 可以强制组件重新渲染一次
## 响应式
+ 响应式对象
  + Vue 的初始化阶段，_init 方法执行的时候，会执行 initState(vm)
  + initState 方法主要是对 props、methods、data、computed 和 wathcer 等属性做了初始化操作
  + props
    + props 的初始化主要过程，就是遍历定义的 props 配置。遍历的过程主要做两件事情：一个是调用 defineReactive 方法把每个 prop 对应的值变成响应式，可以通过 vm._props.xxx 访问到定义 props 中对应的属性
    + 另一个是通过 proxy 把 vm._props.xxx 的访问代理到 vm.xxx 上
  + initData
    + 一个是对定义 data 函数返回对象的遍历，通过 proxy 把每一个值 vm._data.xxx 都代理到 vm.xxx 上；另一个是调用 observe 方法观测整个 data 的变化，把 data 也变成响应式，可以通过 vm._data.xxx 访问到定义 data
  + proxy
    + 代理的作用是把 props 和 data 上的属性代理到 vm 实例上
  + observe
    + observe 的功能就是用来监测数据的变化
    + ob = new Observer(value)
      + this.dep = new Dep()
      + this.observeArray(value)
        + observe()
      + this.walk(value)
        + defineReactive(obj, keys[i])(defineReactive 的功能就是定义一个响应式对象，给对象动态添加 getter 和 setter)
          + get ()
            + dep.depend()  Dep 实际上就是对 Watcher 的一种管理
              + Dep.target.addDep(this) (一个静态属性 target，这是一个全局唯一 Watcher)
          + set()
            + dep.notify()
              + subs[i].update()
+ 依赖收集，new wather
  + 去实例化一个渲染 watcher 的时候，首先进入 watcher 的构造函数逻辑，然后会执行它的 this.get() 方法,
    + pushTarget(this),
      + Dep.target = _target
    + value = this.getter.call(vm, vm)
    + this.getter 对应就是 updateComponent 函数
      + vm._update(vm._render(), hydrating)
        + vm._render() 方法，因为之前分析过这个方法会生成 渲染 VNode，并且在这个过程中会对 vm 上的数据访问，这个时候就触发了数据对象的 getter
+ 派发更新
  + 引入了一个队列的概念，这也是 Vue 在做派发更新的时候的一个优化的点，它并不会每次数据改变都触发 watcher 的回调，而是把这些 watcher 先添加到一个队列里，然后在 nextTick 后执行 flushSchedulerQueue
  + queueWatcher(this)
    + has 对象保证同一个 Watcher 只添加一次
    + 最后通过 waiting 保证对 nextTick(flushSchedulerQueue) 的调用逻辑只有一次
    + flushSchedulerQueue(watcher收集)
      + 队列排序（组件的更新由父到子；因为父组件的创建过程是先于子的，所以 watcher 的创建也是先父后子，执行顺序也应该保持先父后子）
      + 用户的自定义 watcher 要优先于渲染 watcher 执行；因为用户自定义 watcher 是在渲染 watcher 之前创建的
      + 如果一个组件在父组件的 watcher 执行期间被销毁，那么它对应的 watcher 执行都可以被跳过，所以父组件的 watcher 应该先执行
    + watcher.run
      + 先通过 this.get() 得到它当前的值，然后做判断，如果满足新旧值不等、新值是对象类型、deep 模式任何一个条件，则执行 watcher 的回调，注意回调函数执行的时候会把第一个和第二个参数传入新值 value 和旧值 oldValue，这就是当我们添加自定义 watcher 的时候能在回调函数的参数中拿到新旧值的原因
+ nexttick
  + next-tick.js 申明了 microTimerFunc 和 macroTimerFunc 2 个变量，它们分别对应的是 micro task 的函数和 macro task 的函数
    + setImmediate MessageChannel setTimeout 0
    + Promise，不支持的话直接指向 macro task 的实现
    + 把传入的回调函数 cb 压入 callbacks 数组，最后一次性地根据 useMacroTask 条件执行 macroTimerFunc 或者是 microTimerFunc
    + 它们都会在下一个 tick 执行 flushCallbacks，flushCallbacks 的逻辑非常简单，对 callbacks 遍历，然后执行相应的回调函数
    + next-tick.js 还对外暴露了 withMacroTask 函数，它是对函数做一层包装，确保函数执行过程中对数据任意的修改，触发变化执行 nextTick 的时候强制走 macroTimerFunc
    + 我们了解到数据的变化到 DOM 的重新渲染是一个异步过程，发生在下一个 tick
  + macro task 有 setTimeout、MessageChannel、postMessage、setImmediate
+ 计算属性和wather
  + 接着对 computed 对象做遍历，拿到计算属性的每一个 userDef，然后尝试获取这个 userDef 对应的 getter 函数，拿不到则在开发环境下报警告。接下来为每一个 getter 创建一个 watcher，这个 watcher 和渲染 watcher 有一点很大的不同，它是一个 computed watcher  
  + computed watcher 会并不会立刻求值，同时持有一个 dep 实例
  + Dep.target 是渲染 watcher，所以 this.dep.depend() 相当于渲染 watcher 订阅了这个 computed watcher 的变化
  +   + render 函数执行访问到 this.fullName 的时候，就触发了计算属性的 getter，它会拿到计算属性对应的 watcher，然后执行 watcher.depend()
  +   getAndInvoke 函数会重新计算，然后对比新旧值，如果变化了则执行回调函数，那么这里这个回调函数是 this.dep.notify()，在我们这个场景下就是触发了渲染 watcher 重新渲染

## vue-router
