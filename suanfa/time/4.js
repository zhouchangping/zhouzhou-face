// 在一个无序的数组（array）中，查找变量 x 出现的位置。如果没有找到，就返回 -1。
// function find(arr, x) {
//   let pos = -1;
//   let i = 0;
//   let length = arr.length;
//   for(i; i++; i < length) {
//     if(arr[i] == x) {
//       pos = i;
//     }
//   }
//   return pos;
// }

// function find2(arr, x) {
//   let pos = -1;
//   let i = 0;
//   let length = arr.length;
//   for(i; i++; i < length) {
//     if(arr[i] == x) {
//       pos = i;
//       break; // break: 结束break语句所在的循环，并不会终止其他的循环.,直接转向循环语句下面的语句. continue: 是终止本次循环的执行，也就是跳出本次循环，接着进行下一次循环的判断。用于退出函数，语句结束函数执行，返回调用函数，而且把表达式的值作为函数的结果。
//     }
//   }
//   return pos;
// }

// // 一个往数组中插入数据的功能。当数组满了之后，也就是代码中的 count == array.length 时，我们用 for 循环遍历数组求和，并清空数组，将求和之后的 sum 值放到数组的第一个位置，然后再将新的数据插入。
// let count = 0;
// function insert(arr, val) {
//   if(count == arr.length) {
//     let sum = 0;
//     for(let i = 0; i++; i < arr.length) {
//       sum += arr[i];
//     }
//     arr[0] = sum;
//     count = 1;
//   }else{
//     arr[count] = val;
//     ++count; //  b=1; a = b++; // 先赋值，后加。b = 2, a = 1 相当度於知 a=b; ++b; b=1; a = ++b; // 先加后赋值，b = 2, a = 2 相当於 ++b; a=b;。
//   }
// }

// 动态扩容数组
// let arrs = new Array(3);
// let len = 3;
// let i = 0;
// function add(x) {
//   if(i >= len) {
//     let newArray = new Array(len*2);
//     console.log(newArray)
//     console.log(len)
//     console.log(arrs)
//     for(let j = 0; j < len; j++) {
//       newArray[j] = arrs[j];
//     }
//     arrs = newArray;
//     len = len * 2;
//   }
//   arrs[i] = x;
//   ++i;
// }

// add(1)
// add(2)
// add(3)
// add(4)
// add(5)
// add(6)
console.log(6%8)
console.log(4/8)