/*
 * @Author: zhouchangping
 * @Date: 2020-07-01 10:55:52
 * @LastEditTime: 2022-01-19 22:37:44
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/bind.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用
1. 函数有返回值 return
2. 修改this; apply
3. 有参数: 初始化传递，执行传递
4. 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。


// 返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。
const module = {
  x: 42,
  getX: function () {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42


// 方法一：返回一个函数 可以传入参数
Function.prototype._bind = function () {
  var self = this   //原函数
  var context = [].shift.call(arguments)  //this上下文
  var args = [].slice.call(arguments)  //参数
  return function () {
    self.apply(context, args.concat([].slice.call(arguments)))
  }
}

// 方法二： bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效。
Function.prototype._bind = function (context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fNOP = function () { };
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
  }
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  fBound.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}

var obj = {
  name: 123,
  age: 234
}
function say (x, y) {
  console.log(this.name + 'he' + x + y)
}
var test = say._bind(obj, 1);
test(2)


Function.prototype.bind2 = function () {
  let self = this;
  let context = [].shift.call(arguments)
  let args = Array.slice.call(arguments)

  return function () {
    let arg = Array.slice.call(arguments);
    return self.apply(context, arg.concat(args));
  }
}

Function.prototype.bind2 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var  fNop = function () {}

  var fBound = function () {
      var bindArgs = Array.prototype.slice.call(arguments);
      console.log(this)
      // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
      // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
      // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
      return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
  }
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  fNop.prototype = self.prototype;
  fBound.prototype = new fNop();
  return fBound;
}
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind2(foo, 'daisy');

var obj = new bindFoo('18');
console.log(obj.habit);
console.log(obj.friend);