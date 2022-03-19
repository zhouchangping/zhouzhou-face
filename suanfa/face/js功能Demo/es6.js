// https://es6.ruanyifeng.com/\
// var condition = false;
// if (condition) {
//   var value = 1;
// }
// console.log(value); // undefined

// for (var i = 0; i < 10; i++) {

// }
// console.log(i); // 10




// 块级作用域存在于：
// 函数内部
// 块中(字符 { 和 } 之间的区域)
// 1. 不会被提升
// if (false) {
//   let value = 1;
// }
// console.log(value); // Uncaught ReferenceError: value is not defined
// // 2. 重复声明报错
// var value = 1;
// let value = 2; // Uncaught SyntaxError: Identifier 'value' has already been declared

// // 3. 不绑定作用域
// let value = 1;
// console.log(window.value); // undefined

// // 4. const 声明不允许修改绑定，但允许修改值。
// const data = {
//   value: 1
// }

// // 没有问题
// data.value = 2;
// data.num = 3;

// // 报错
// data = {}; // Uncaught TypeError: Assignment to constant variable.

// // 5. 临时死区
// console.log(typeof value); // Uncaught ReferenceError: value is not defined
// let value = 1;




// 模版字符串
// let message = `
// 	<ul>
// 		<li>1</li>
// 		<li>2</li>
// 	</ul>
// `;
// console.log(message);




// 箭头函数
// let func = value => value;
// let func = (value, num) => value * num;
// let func = value => {
//   // console.log(this) // window
//   // console.log(arguments) //  arguments is not defined at func
//   return value
// }
// func(123)
// 1. 没有this;箭头函数没有 this，所以需要通过查找作用域链来确定 this 的值。箭头函数被非箭头函数包含，this 绑定的就是最近一层非箭头函数的 this。
// 2. 没有 arguments;因为箭头函数可以访问外围函数的 arguments 对象：
// function constant() {
//   return () => arguments[0]
// }

// var result = constant(1);
// console.log(result()); // 1

// 3. 不能通过 new 关键字调用：JavaScript 函数有两个内部方法：[[Call]] 和 [[Construct]]。
// 当通过 new 调用函数时，执行 [[Construct]] 方法，创建一个实例对象，然后再执行函数体，将 this 绑定到实例上。当直接调用的时候，执行 [[Call]] 方法，直接执行函数体。箭头函数并没有 [[Construct]] 方法，不能被用作构造函数，如果通过 new 的方式调用，会报错
// var Foo = () => {};
// var foo = new Foo(); // TypeError: Foo is not a constructor

// 4. 没有 new.target

// 5. 没有原型;由于不能使用 new 调用箭头函数，所以也没有构建原型的需求，于是箭头函数也不存在 prototype 这个属性。
// var Foo = () => {};
// console.log(Foo.prototype); // undefined

// // 没有super
// 连原型都没有，自然也不能通过 super 来访问原型的属性，所以箭头函数也是没有 super 的，不过跟 this、arguments、new.target 一样，这些值由外围最近一层非箭头函数决定。





// // Symbol 通过symbol函数生成，使用typeof Symbol; var s = Symbol()
// Symbol 函数前不能使用 new 命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。





// 迭代器： 所谓迭代器，其实就是一个具有 next() 方法的对象；每次调用 next() 都会返回一个结果对象，该结果对象有两个属性，value 表示当前的值，done 表示遍历是否结束。
// 数组
// Set
// Map
// 类数组对象，如 arguments 对象、DOM NodeList 对象
// Generator 对象
// 字符串
// function createIterator(items) {
//   var i = 0;
//   return {
//       next: function() {
//           var done = i >= items.length;
//           var value = !done ? items[i++] : undefined;

//           return {
//               done: done,
//               value: value
//           };
//       }
//   };
// }

// iterator 就是一个迭代器对象；// 其实一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）
// var iterator = createIterator([1, 2, 3]);

// console.log(iterator.next()); // { done: false, value: 1 }
// console.log(iterator.next()); // { done: false, value: 2 }
// console.log(iterator.next()); // { done: false, value: 3 }
// console.log(iterator.next()); // { done: true, value: undefined }

// // var iterator = createIterator([1, 2, 3]);
// const obj = {
//   value: 1
// };

// obj[Symbol.iterator] = function() {
//   return createIterator([1, 2, 3]);
// };
// for (let value of obj) {
//     console.log(value);
// }
// // 模拟for of
// function forOf(obj, cb) {
//   let iterable, result;

//   if (typeof obj[Symbol.iterator] !== "function")
//       throw new TypeError(result + " is not iterable");
//   if (typeof cb !== "function") throw new TypeError("cb must be callable");

//   iterable = obj[Symbol.iterator]();

//   result = iterable.next();
//   while (!result.done) {
//       cb(result.value);
//       result = iterable.next();
//   }
// }




// set:Set 本身是一个构造函数，用来生成 Set 数据结构。 Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
/**
 * 模拟实现第三版
 */
// (function(global) {
//   var NaNSymbol = Symbol('NaN');
//   var encodeVal = function(value) {
//       return value !== value ? NaNSymbol : value;
//   }
//   var decodeVal = function(value) {
//       return (value === NaNSymbol) ? NaN : value;
//   }

//   var makeIterator = function(array, iterator) {
//       var nextIndex = 0;

//       // new Set(new Set()) 会调用这里
//       var obj = {
//           next: function() {
//               return nextIndex < array.length ? { value: iterator(array[nextIndex++]), done: false } : { value: void 0, done: true };
//           }
//       };

//       // [...set.keys()] 会调用这里
//       obj[Symbol.iterator] = function() {
//           return obj
//       }

//       return obj
//   }

//   function forOf(obj, cb) {
//       let iterable, result;
//       if (typeof obj[Symbol.iterator] !== "function") throw new TypeError(obj + " is not iterable");
//       if (typeof cb !== "function") throw new TypeError('cb must be callable');
//       iterable = obj[Symbol.iterator]();

//       result = iterable.next();
//       while (!result.done) {
//           cb(result.value);
//           result = iterable.next();
//       }
//   }

//   function Set(data) {
//       this._values = [];
//       this.size = 0;

//       forOf(data, (item) => {
//           this.add(item);
//       })

//   }

//   Set.prototype['add'] = function(value) {
//       value = encodeVal(value);
//       if (this._values.indexOf(value) == -1) {
//           this._values.push(value);
//           ++this.size;
//       }
//       return this;
//   }

//   Set.prototype['has'] = function(value) {
//       return (this._values.indexOf(encodeVal(value)) !== -1);
//   }

//   Set.prototype['delete'] = function(value) {
//       var idx = this._values.indexOf(encodeVal(value));
//       if (idx == -1) return false;
//       this._values.splice(idx, 1);
//       --this.size;
//       return true;
//   }

//   Set.prototype['clear'] = function(value) {
//       this._values = [];
//       this.size = 0;
//   }

//   Set.prototype['forEach'] = function(callbackFn, thisArg) {
//       thisArg = thisArg || global;
//       for (var i = 0; i < this._values.length; i++) {
//           callbackFn.call(thisArg, this._values[i], this._values[i], this);
//       }
//   }

//   Set.prototype['values'] = Set.prototype['keys'] = function() {
//       return makeIterator(this._values, function(value) { return decodeVal(value); });
//   }

//   Set.prototype['entries'] = function() {
//       return makeIterator(this._values, function(value) { return [decodeVal(value), decodeVal(value)]; });
//   }

//   Set.prototype[Symbol.iterator] = function(){
//       return this.values();
//   }

//   Set.prototype['forEach'] = function(callbackFn, thisArg) {
//       thisArg = thisArg || global;
//       var iterator = this.entries();

//       forOf(iterator, (item) => {
//           callbackFn.call(thisArg, item[1], item[0], this);
//       })
//   }

//   Set.length = 0;

//   global.Set = Set;

// })(this)






// // map 但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
// const m = new Map()
// const o = {p: 'hello'}
// m.set(o, 'content')
// // 作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
// const map = new Map([
//   ['name', '张三'],
//   ['title', 'Author']
// ]);
// map.size // 2
// map.has('name') // true
// map.get('name') // "张三"
// map.has('title') // true
// map.get('title') // "Author"




// // weakmap
1. WeakMap 只接受对象作为键名
const map = new WeakMap();
map.set(1, 2);
// TypeError: Invalid value used as weak map key
map.set(null, 2);
// TypeError: Invalid value used as weak map key
2. WeakMap 的键名所引用的对象是弱引用: 在计算机程序设计中，弱引用与强引用相对，是指不能确保其引用的对象不会被垃圾回收器回收的引用。 一个对象若只被弱引用所引用，则被认为是不可访问（或弱可访问）的，并因此可能在任何时刻被回收。
在 JavaScript 中，一般我们创建一个对象，都是建立一个强引用：只有当我们手动设置 obj = null 的时候，才有可能回收 obj 所引用的对象。




// generator： Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
// Generator 函数是一个状态机，封装了多个内部状态。
function* helloWorldGenerator () {
  yield 'hello';
  console.log(1);
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())




// proxy
var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});
var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function (target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
    }
  }
});
proxy.name // "张三"
proxy.age // 抛出一个错误




// Reflect
// Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。

// 新写法: 让Object操作都变成函数行为。某些Object操作是命令式，
Reflect.has(Object, 'assign') // true

// 修改某些Object方法的返回结果，让其变得更合理
// 老写法
try {
  Object.defineProperty(target, property, attributes);
  // success
} catch (e) {
  // failure
}
// 新写法
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}

// Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。
Proxy(target, {
  set: function (target, name, value, receiver) {
    var success = Reflect.set(target, name, value, receiver);
    if (success) {
      console.log('property ' + name + ' on ' + target + ' set to ' + value);
    }
    return success;
  }
});


// promise
// Promise.prototype.then()
// Promise.prototype.catch()
// Promise.prototype.finally()
// Promise.all()
// Promise.race()
// Promise.allSettled()
// Promise.any()
// Promise.resolve()
// Promise.reject()
// 应用
// Promise.try()

// 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
// 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。
const promise = new Promise(function (resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */) {
    resolve(value);
  } else {
    reject(error);
  }
});




// async
// 内置执行器-更好的语义化-更广的适应性-返回promise
// 返回promise-async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了
async function getStockPriceByName (name) {
  const symbol = await getStockSymbol(name);
  const stockPrice = await getStockPrice(symbol);
  return stockPrice;
}

getStockPriceByName('goog').then(function (result) {
  console.log(result);
});

async function f () { // 函数f内部return命令返回的值，会被then方法回调函数接收到。
  return 'hello world';
}
f().then(v => console.log(v))
// "hello world"
