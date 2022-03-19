// 计算并返回 x 的平方根，其中 x 是非负整数,由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
// var mySqrt = function (x) {
//   if (x<2) {
//     return x;
//   }
//   let left = x >>> 1; // 除以2去整
//   let right = x;
//   while(left + 1 < right) {
//     let mid = (left+right) >>> 1;
//     if (mid*mid === x) {
//       return mid;
//     } else if(mid * mid < x) {
//       left = mid;
//     } else {
//       right = mid;
//     }
//   }
//   return right > x / right ? left : right;
// }

const mySqrt = function(x)  {
  if (x < 0) {
    return false;
  }
  if (x < 2) return x;
  let left = 1;
  let right = x >> 1;   // 除以2并取整，缩小一下遍历的范围
  // >> 1 为除以2取整数
  while (left + 1 < right) {  // 退出循环时，它们相邻
    let mid = (left + right) >> 1;
    console.log(mid)
    if (mid == x / mid) {
      return mid;
    } else if (mid < x / mid) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return right > x / right ? left : right;
};

let result = mySqrt(8);
console.log(result)
