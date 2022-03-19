## redux 
+ npm install -S redux react-redux @types/react-redux
+ createStroe(reducer(action.type)=>修改state)-> provider(store)->connect(counter => counter, dispatch => ({ increment: () => {dispatch(increment())})
+ 点击->connect->dispatch->reducers->action.type->修改state
```
// React-Redux 提供Provider组件;connect方法生成容器组件以后，需要让容器组件拿到state对象，才能生成 UI 组件的参数。React-Redux 提供Provider组件，可以让容器组件拿到state。
// connect生成容器组件, mapStateToProps(state),ui组件,处理state-props,执行后应该返回一个对象； 
// mapDispatchToProps(dispatch, ownProps容器组件的props对象): 第二个函数参数的参数，处理dispatch-props,应该返回一个对象,它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator ，返回的 Action 会由 Redux 自动发出

// reducer->stroe
// click->dispatch(action)->reducer->state

// shouldComponentUpdate函数是重渲染时render()函数调用前被调用的函数，它接受两个参数：nextProps和nextState，分别表示下一个props和下一个state的值。并且，当函数返回false时候，阻止接下来的render()函数的调用，阻止组件重渲染，而返回true时，组件照常重渲染。
```

## ReactDOM.render(
  
## 组件 props
```
<Greeting isLoggedIn={false} />,
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## 事件处理
```
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

## this
+ class this.handleToggleClick = this.handleToggleClick.bind(this); // 为了在回调中使用 `this`，这个绑定是必不可少的
+ function 不需要绑定
+ <button onClick={() => this.handleClick()}>
+ Create React App 默认启用此语法。
+ 正在使用实验性的 public class fields 语法
```
handleClick = () => { // public class fields 
    console.log('this is:', this);
  }
```

## 条件渲染

## 列表 key

## 表单 受控组件：  React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

## 状态提升

## props 是传递给组件的（类似于函数的形参），而 state 是在组件内被组件自己管理的（类似于在一个函数内声明的变量）。

## className
+ return <span className="menu navigation-menu">Menu</span>
+ return <span className={className}>Menu</span>

## react src里面引入图片的几种方式es6不支持在<img />标签内直接写图片的路径，即<img src="../images/photo.png"/>
+ <img src={require('../img/test.png')} alt="" />
+ import imgSrc from '../img/test.png' <img src={imgSrc} alt="" />
+ <img src='http://***.com/test.png' alt="" />

## 可以继承 React.PureComponent 以代替手写 shouldComponentUpdate()。它用当前与之前 props 和 state 的浅比较覆写了 shouldComponentUpdate() 的实现

## 默认情况，只要父组件状态变了（不管子组件依不依赖该状态），子组件也会重新渲染

## 原理
+ React.createElement：创建虚拟dom
+ React.Component：实现自定义组件
+ ReactDOM.render：渲染真实DOM

## hooks
+ 

## context
+ React.createContext
  + const MyContext = React.createContext(defaultValue);创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
+ Context.Provider
  + <MyContext.Provider value={/* 某个值 */}>每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，
+ Class.contextType
  + MyClass.contextType = MyContext;
  + 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值
  ```
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  ```
+ Context.Consumer
+ Context.displayName

## 申明文件
+ declare var 声明全局变量
+ declare function 声明全局方法
+ declare class 声明全局类
+ declare enum 声明全局枚举类型
+ declare namespace 声明（含有子属性的）全局对象
+ interface 和 type 声明全局类型
+ export 导出变量
+ export namespace 导出（含有子属性的）对象
+ export default ES6 默认导出
+ export = commonjs 导出模块
+ export as namespace UMD 库声明全局变量
+ declare global 扩展全局变量
+ declare module 扩展模块
+ /// <reference /> 三斜线指令

## 装饰器：装饰器是对类、函数、属性之类的一种装饰，可以针对其添加一些额外的行为。
+ 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
+ 在TypeScript里，当多个装饰器应用在一个声明上时会进行如下步骤的操作：
  + 由上至下依次对装饰器表达式求值。
  + 求值的结果会被当作函数，由下至上依次调用。
```
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {}
}
f(): evaluated
g(): evaluated
g(): called
f(): called
```

## react-hooks原理
## react 中为什么不能在 for 循环、if 语句里使用 hooks，说下 react hooks 实现原理。
## 说下 react fiber。
## 看你之前做过 RN 开发，说下 RN 的原理。
## react中this.setState,和useState原理

## 生命周期
+ 挂载及卸载：
  + constructor
  + componentWillMount
  + componentDidMount
  + componentWillUnmount
+ 更新
  + componentWillReceiveProps: 在 componentWillReceiveProps 中，我们一般会做以下两件事，一是根据 props 来更新 state，二是触发一些回调，如动画或页面跳转
    + 官方将更新 state 与触发回调重新分配到了 getDerivedStateFromProps 与 componentDidUpdate 中
    +  getDerivedStateFromProps(nextProps, prevState) 中还禁止了组件去访问 this.props，强制让开发者去比较 nextProps 与 prevState 中的值，以确保当开发者用到 getDerivedStateFromProps 这个生命周期函数时，就是在根据当前的 props 来更新组件的 state，而不是去做其他一些让组件自身状态变得更加不可预测的事情。
  + shouldComponentUpdate
  + componentWillUpdate
  + componentDiUpdate
  + render
+ getDerivedStateFromProps(nextProps, prevState)
+ getSnapshotBeforeUpdate(preProps, prevState): 在 React 开启异步渲染模式后，在 render 阶段读取到的 DOM 元素状态并不总是和 commit 阶段相同，这就导致在componentDidUpdate 中使用 componentWillUpdate 中读取到的 DOM 元素状态是不安全的，因为这时的值很有可能已经失效了。
  + getSnapshotBeforeUpdate 会在最终的 render 之前被调用


