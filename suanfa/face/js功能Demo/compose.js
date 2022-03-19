/*
 * @Author: zhouchangping
 * @Date: 2020-06-17 14:39:19
 * @LastEditTime: 2022-03-07 17:20:02
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/compose.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

// const compose = function(...args) {
//   let length = args.length
//   let count = length - 1
//   let result
//   return function f1 (...arg1) {
//     result = args[count].apply(this, arg1)
//     if (count <= 0) {
//       count = length - 1
//       return result
//     }
//     count--
//     return f1.call(null, result)
//   }
// }


function sum(...args) {
 let result = 0;
 result = args.reduce((pre, next)=> {
  return pre + next;
 }, 0);
 let add = function (...argss) {
   result = argss.reduce((pre, next)=> {
     return pre + next;
   }, result);
   return add;
 }
 add.sumOf = function () {
   console.log(result)
 }
 return add;
}
sum(1,2,3).sumOf()
sum(2,3)(2).sumOf()
sum(1)(2)(3)(4).sumOf()