// 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。 IV==4 IX ==9
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。  XL == 40 XC == 90
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。 CD == 400 CM == 900
// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// let arr = [I, V, X, L, C, D, M];
// let c = [IV, IX, XL, XC, CD, CM];
// function a(x) {
//   x = String(x)
//   x.split('').every((item, index)=> {
//     if (arr.includes(x) == '-1') {
//       return false;
//     }
//   })
  
// }

function b(x) {
  let map = new Map(), re = 0;
  map.set("I", 1);
  map.set("IV", 4);
  map.set("V", 5);
  map.set("IX", 9);
  map.set("X", 10);
  map.set("XL", 40);
  map.set("L", 50);
  map.set("XC", 90);
  map.set("C", 100);
  map.set("CD", 400);
  map.set("D", 500);
  map.set("CM", 900);
  map.set("M", 1000);
  for (let i = 0; i < x.length;) {
    if (i + 1  < x.length && map.get(x.substring(i, i+2))) {
      re += map.get(x.substring(i, i+2));
      i += 2;
    } else {
      console.log(map.get(x.substring(i, i+1)))
      re += map.get(x.substring(i , i+1))
      i += 1;
    }
  }
  return re;
}

let result = b('IIVCM');
console.log(result)