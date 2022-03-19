// function fn (x, y, z, t) {
//   return x + y + z + t;
// }
// // 方法一：
// function Curry (fn, args) {
//   if (args.length >= fn.length) {
//     fn(...args);
//   }
//   return function () {
//     let argss = [...args, ...arguments]
//     if (argss.length >= fn.length) {
//       return fn(...argss)
//     } else {
//       return Curry(fn, argss)
//     }
//   }
// }

// let sums = Curry(fn, [1, 2])
// console.log(sums(1)(2))

// var test = [1, 2, 3, 5]
// console.log([...test])





// // 方法二：
// var f = function (x, y, z) {
//   console.log(x + y + z)
// }
// var fn = progressCurrying(f, [3])
// // 支持多参数传递
// function progressCurrying (f, arg) {
//   var _this = this
//   var len = f.length;
//   var args = arg || [];
//   return function () {
//     var _args = Array.prototype.call(arguments);
//     Array.prototype.push.apply(args, _args);
//     // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
//     if (args.length < len) {
//       return progressCurrying.call(_this, f, args);
//     } else {
//       // 参数收集完毕，则执行f
//       return f.apply(this, args);
//     }
//   }
// }
// fn(1)





// 1- 函数颗粒化
// function add (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     }
//   }
// }

function fn(x, y, z, t) {
  console.log(x, y, z, t)
  return x + y + z + t;
}

function curry(fn, arg) {
  if (arg.length >= fn.length) {
    fn(...arg);
  } 
  return function () {
    const args = [...arg, ...arguments];
    if (args.length >= fn.length) {
      return fn(...args); // 需要return
    } else {
      return curry(fn, args);
    }
  }
}
let sums = curry(fn, [1])
console.log(sums(2)(3)(4))