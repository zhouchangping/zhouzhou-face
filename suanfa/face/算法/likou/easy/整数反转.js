// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// function a(nums) {
//   let fn = "", re = 0;
//   if (nums < 0) {
//     fn = '-';
//     nums = 0 - nums;
//   }
//   re = (nums + '').split('').reverse().join('');
//   if (re.length >= 10 && re > (x<0?"2147483648":"2147483647")) {
//     return 0;
//   } else {
//     return fn + re;
//   }
// }


var b = function(x) {
  let result = 0;
  while(x !== 0) {
      result = result * 10 + x % 10;
      console.log(result)
      console.log('---------')
      x = (x / 10) | 0; // x / 10 去除末位，| 0 强制转换为32位有符号整数。通过 | 0 取整，无论正负，只移除小数点部分（正数向下取整，负数向上取整）。
      console.log(x)
  }
  return (result | 0) === result ? result : 0;
};


// let result = b(-12345)
// console.log(result)

console.log( 5.4 | 0)
console.log( -5.6 | 0)