// https://leetcode-cn.com/problems/longest-common-prefix/
// function a(arr) {
//   let min = arr[0];
//   arr.forEach(element => {
//     if (element.length <= min.length) {
//       min = element;
//     }
//   });
//   console.log(min);
//   min.split('').forEach(item=> {
//     arr.forEach(element=> {

//     })
//   })
//   return min;
// }
// let result = a(["flower","flow","flight"]) // ["dog","racecar","car"]
// console.log(result)


// function b(arr) {
//   if (arr.length === 0) {
//     return ''
//   }
//   let c = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     let j
//     for (j = 0; j < arr[i].length && j < c.length; j++) {
//       if (c.charAt(j) !== arr[i].charAt(j)) {
//         break;
//       }
//     }
//     c = j === 0 ? "''" : c.substring(0, j);
//     if (c == '') {
//       return c;
//     }
//   }
//   return c;
// }

function c(arr) {
  if (arr.length === 0) {
    return ""
  }
  let d = arr[0];
  let result = "";
  for (let i = 0; i < d.length; i++) {
    let j = 1;
    for (j; j < arr.length; j++) {
      if (arr[j][i] != d[i]) return result;
    }
    result += d[i];
  }
  return result;
}


let result = c(["flower","flow","flight"]) // ["dog","racecar","car"]
console.log(result)