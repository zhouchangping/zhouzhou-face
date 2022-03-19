// Math
// 如果有任一参数不能被转换为数值，则结果为 NaN。
// max 是 Math 的静态方法，所以应该像这样使用：Math.max()，而不是作为 Math 实例的方法 (简单的来说，就是不使用 new )
// 如果没有参数，则结果为 -Infinity (注意是负无穷大)
// Math.max(true, 0) // 1
// Math.max(true, '2', null) // 2
// Math.max(1, undefined) // NaN
// Math.max(1, {}) // NaN

// var min = Math.min();
// var max = Math.max();
// console.log(min > max); // true

// var arr = [1, 2, 3];
// var result = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   result = Math.max(result, arr[i]);
// }


// reduce
var arr = [6, 4, 1, 8, 2, 11, 23];
// function max(prev, next) {
//     return Math.max(prev, next);
// }
// console.log(arr.reduce(max));


// // 排序

// // eval
// var  max = eval("Math.max("+arr+")");


// apply
var max = Math.max.apply(null, arr); // Math.max 支持传多个参数来进行比较，那么我们如何将一个数组转换成参数传进 Math.max 函数
console.log(max)