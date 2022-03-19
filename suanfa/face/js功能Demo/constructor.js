// 实例的constructor等于构造函数


// var o = {};
// o.constructor === Object; // true
// var o = new Object;
// o.constructor === Object; // true
// var a = [];
// a.constructor === Array; // true
// var a = new Array;
// a.constructor === Array // true
// var n = new Number(3);
// n.constructor === Number; // true


// function Parent() {}
// Parent.prototype.parentMethod = function () {
//   console.log('parent')
// };

// function Child() {}
// Child.prototype.ChildMethod = function () {
//   console.log('child1')
// }
// Child.prototype = Object.create(Parent.prototype); // re-define child prototype to Parent prototype // 重写了原型
// Child.prototype.ChildMethod2 = function () {
//   console.log('child2')
// }
// Child.prototype.constructor = Child; // return original constructor to Child

// let newChild = new Child();

// // console.log(newChild.ChildMethod()) // 先写的被覆盖报错
// newChild.ChildMethod2() // 后写的没被覆盖报错
// newChild.parentMethod()
// console.log(Child.prototype.constructor)  // 没重写前，是ƒ Parent() {} 这个有什么影响呢？
// console.log(Child.constructor)  // 没重写前，是ƒ Parent() {} 这个有什么影响呢？


// 当一个函数 F被定义时，JS引擎会为F添加 prototype 原型，然后再在 prototype上添加一个 constructor 属性，并让其指向 F 的引用。如下所示：
function F() {
}
let f = new F();
console.log(F.prototype) // {constructor: F; __proto__: Object}
console.log(f.constructor === F) // true; 当执行 var f = new F() 时，F 被当成了构造函数，f 是F的实例对象，此时 F 原型上的 constructor 传递到了 f 上，因此 f.constructor == F
// 可以看出，F 利用原型对象上的 constructor 引用了自身，当 F 作为构造函数来创建对象时，原型上的 constructor 就被遗传到了新创建的对象上， 从原型链角度讲，构造函数 F 就是新对象的类型。这样做的意义是，让新对象在诞生以后，就具有可追溯的数据类型。
console.log(''.constructor === String)
// null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，这两种类型的数据需要通过其他方式来判断。