// Javascript中所有的对象都是Object的实例，并继承Object.prototype的属性和方法，有些属性是隐藏的。
// 换句话说，在对象创建时会存在预定义的属性，其中有一个属性就是原型对象。
// 在函数对象中存在原型对象prototype，在普通对象中存在__proto__,没有prototype
// 或者说使用function定义的对象与使用new操作符生成的对象之间有一个重要的区别，这个区别就是function定义的对象有一个prototype属性，使用new生成的对象就没有这个prototype属性，存在__proto__

// 实例的__proto__ == 构造函数的prototype
// Object create from Function

// o.__proto__ = Object.prototype Object.prototype.__proto__ = null;
// j.__proto__ = Foo.prototype Foo.prototype.__proro__ = Object.prototype  Object.prototype.__proto__ = null;
// Test.__proto__ = Function.prototype  Function.prototype.__proto__ = Object.prototype Object.prototype.__proto__ = null;

console.log(typeof Object);
console.log(typeof Function);
function Object (){}; // 
console.log(Object.__proto__ === Function.prototype) // false

var o = new Object()
console.log(o.__proto__ === Object.prototype); // true {constructor: function}
console.log(o.prototype) // undefined
console.log(Object.prototype.constructor) // function Object() {}
console.log('--------')

function Foo() {}
var j = new Foo();
console.log(j.__proto__ === Foo.prototype); // true {constructor: function}
console.log(j.prototype) // undefined
console.log('--------')

function Test(){}
console.log(Test.__proto__ === Function.prototype)  // true
console.log(Test.prototype) // {constructor: function}
console.log(Test.prototype.constructor) // ƒ Test(){}
console.log('--------')


function Function(){}
console.log(Function.prototype) // {constructor: function}
console.log(Function.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // ƒ Function(){}
console.log(Function.prototype.constructor) // ƒ Function(){}
console.log('--------')



// ## prototype（https://www.cnblogs.com/Nancy-wang/p/6903221.html?utm_source=itdadao&utm_medium=referral）
// + prototype 自己也是对象，只是被用以承担某个职能罢
// + 1）通过 Object.getPrototypeOf(obj) 间接访问指定对象的 prototype 对象。
// 2）通过 Object.setPrototypeOf(obj, anotherObj) 间接设置指定对象的 prototype 对象。
// 3）部分浏览器提前开了 __proto__ 的口子，使得可以通过 obj.__proto__ 直接访问原型，通过 obj.__proto__ = anotherObj 直接设置原型。
// 4）ECMAScript 2015 规范只好向事实低头，将 __proto__ 属性纳入了规范的一部分。