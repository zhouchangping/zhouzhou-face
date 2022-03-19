// // 输入一个字符串，打印出该字符串中字符的所有排列。
// 回溯法 ：一种通过探索所有可能的候选解来找出所有的解的算法。如果候选解被确认不是一个解的话（或者至少不是最后一个解），回溯算法会通过在上一步进行一些变化抛弃该解，即回溯并且再次尝试。

// function a(s) {
//   let res = new Set();
//   let backTrack = (str, s)=> {
//     let set = new Set();
//     if (!s) {
//       res.add(str)
//     } else {
//       for (let i = 0; i < s.length; i++) {
//         if (set.has(s[i])) {
//           continue;
//         }
//         set.add(s[i])
//         backTrack(str + s[i], s.slice(0, 1) + s.slice(i + 1))
//       }
//     }
//   }
//   backTrack("", s)
// }


/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  let res = new Set();
  let backtrack = (str, s) => {
    console.log(str)
    console.log(s)
    console.log('------')
    // console.log(s)
      let set = new Set();
      if(!s) {
          res.add(str);
      } else {
          for(let i = 0; i < s.length; i++) {
            console.log(i)
              if(set.has(s[i])) {
                continue; // 去重
              }
              set.add(s[i]);
              // console.log(s.slice(0, i))
              // console.log(s.slice(i + 1))
              // console.log('--------')
              // 每递归一层都会删掉一个元素
              backtrack(str + s[i], s.slice(0, i) + s.slice(i + 1));
          }
      }
  }
  backtrack('', s);
  return [...res];
};

let result = permutation('abad')
console.log(result)