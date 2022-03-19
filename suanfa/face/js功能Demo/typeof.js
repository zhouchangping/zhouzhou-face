// https://www.cnblogs.com/onepixel/p/5126046.html
// typeof
typeof''; // string 有效
typeof 1; // number 有效
typeof Symbol(); // symbol 有效
typeof true; //boolean 有效
typeof undefined; //undefined 有效
typeof null; //object 无效
typeof[] ; //object 无效
typeof new Function(); // function 有效
typeof new Date(); //object 无效
typeof new RegExp(); //object 无效



// instanceof
function instanceofs (A,B) {
  var L = A.__proto__;
  var R = B.prototype;
  if(L === R) {
      // A的内部属性 __proto__ 指向 B 的原型对象
      return true;
  }
  return false;
}
console.log(null instanceof Object, 'null'); // false
// console.log(undefined instanceof undefined, 'undefined'); // false
console.log({} instanceof Object, '{}');// true
console.log([] instanceof Array, '[]'); // true
console.log(new Date() instanceof Date, 'Date');// true
 
function Person(){};
new Person() instanceof Person;
 
[] instanceof Object; // true
new Date() instanceof Object;// true
new Person instanceof Object;// true


// isArray Array.isArray() 本质上检测的是对象的 [[Class]] 值 [object Array] 
if(Array.isArray([])){
  //对数组执行某些操作
}





// constructor
// 当一个函数 F被定义时，JS引擎会为F添加 prototype 原型，然后再在 prototype上添加一个 constructor 属性，并让其指向 F 的引用。如下所示：
function F() {
}
let f = new F();
console.log(F.prototype.constructor ===  F) // true
console.log(F.prototype) // {constructor: F; __proto__: Object}  f.__proto__ = F.prototype F.prototype.constructor
console.log(f.constructor === F) // true; 当执行 var f = new F() 时，F 被当成了构造函数，f 是F的实例对象，此时 F 原型上的 constructor 传递到了 f 上，因此 f.constructor == F
// 可以看出，F 利用原型对象上的 constructor 引用了自身，当 F 作为构造函数来创建对象时，原型上的 constructor 就被遗传到了新创建的对象上， 从原型链角度讲，构造函数 F 就是新对象的类型。这样做的意义是，让新对象在诞生以后，就具有可追溯的数据类型。
console.log(''.constructor === String)
window.constructor === window;
// console.log(null.constructor) // 报错
// console.log(undefined.constructor) // 报错
// null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，这两种类型的数据需要通过其他方式来判断。



// toString: toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。
Object.prototype.toString.call('') ;   // [object String]
Object.prototype.toString.call(1) ;    // [object Number]
Object.prototype.toString.call(true) ; // [object Boolean]
Object.prototype.toString.call(Symbol()); //[object Symbol]
Object.prototype.toString.call(undefined) ; // [object Undefined]
Object.prototype.toString.call(null) ; // [object Null]
Object.prototype.toString.call(new Function()) ; // [object Function]
Object.prototype.toString.call(new Date()) ; // [object Date]
Object.prototype.toString.call([]) ; // [object Array]
Object.prototype.toString.call(new RegExp()) ; // [object RegExp]
Object.prototype.toString.call(new Error()) ; // [object Error]
Object.prototype.toString.call(document) ; // [object HTMLDocument]
Object.prototype.toString.call(window) ; //[object global] window 是全局对象 global 的引用


// window
function isWindow( obj ) {
  return obj != null && obj === obj.window;
}




// 第一版
var class2type = {};

// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").map(function(item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})

function type(obj) {
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[Object.prototype.toString.call(obj)] || "object" :
        typeof obj;
}

// 在 IE6 中，null 和 undefined 会被 Object.prototype.toString 识别成 [object Object]！
// 第二版
var class2type = {};
// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})
function type(obj) {
    // 一箭双雕
    if (obj == null) {
        return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[Object.prototype.toString.call(obj)] || "object" :
        typeof obj;
}