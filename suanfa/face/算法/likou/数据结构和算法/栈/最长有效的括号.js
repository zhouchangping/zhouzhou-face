// // 滑动窗口
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var longestValidParentheses = function (s) {
//   const expand = (s, l, r) => {
//       while (s[l - 1] === '(' && s[r + 1] === ')') {
//           l--;
//           r++;
//       }
//       return [l, r];
//   };

//   const map = {};

//   let l = 0,
//       r = 0,
//       max = 0;
//   while (true) {
//       // 以括号对为中心
//       l = s.indexOf('()', r);
//       console.log(l+ "l")
//       if (l === -1) break;
//       r = l + 1;
//       console.log(r + "r");
//       // 向左右两边不断扩大滑动窗口
//       [l, r] = expand(s, l, r);
      

//       // 当窗口扩大到最大时，
//       // 如果当前窗口的左边界刚好挨着前一个窗口的右边界，那么，
//       // 合并这两个窗口，再以这个新合并的窗口为中心，向两侧扩大滑动窗口
//       console.log(map)
//       // console.log(l-1)
//       while (l - 1 in map) {
//         console.log(23)
//         [l, r] = expand(s, map[l - 1], r);
//         // console.log([l,r])
//       }
//       console.log(l+"8888")
//       console.log(r+"8888")
//       // 记录当前窗口的左右边界，key 是窗口右边界，value 是窗口左边界
//       map[r] = l;
//       // 更新最大窗口
//       max = Math.max(max, r - l + 1);
//       console.log(max+"max")
//   }
//   return max;
// };

// 栈
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var longestValidParentheses = function (s) {
//   const valid = Array(s.length).fill(0);
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//       if (s[i] === '(') stack.push(i);

//       if (s[i] === ')' && stack.length > 0) {
//           // Mark the open and close indices as 1 in valid.
//           valid[i] = 1;
//           valid[stack.pop()] = 1;
//       }
//   }

//   // Find longest sequence of 1s.
//   let count = 0,
//       max = 0;
//   for (let v of valid) {
//       v && count++;
//       v || (count = 0);
//       count > max && (max = count);
//   }
//   return max;
// };

// 动态规划: 我们试着拆分成子问题，目光盯着子问题与大问题之间的联系
// “提供” 这词我比较喜欢用：前一个子问题的解可以“提供”给后一个子问题多大的有效长度。后一个子问题的最优解，要想纳入前面“提供”的有效长度，则前面子串的末尾必须是有效子串的一部分~

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var longestValidParentheses = function (s) {
//   // 状态：以当前字符结尾的字符串，最长的有效括号长度是多大
//   const dp = Array(s.length).fill(0); 

//   for (let i = 1; i < s.length; i++) {
//       // 有效括号只能是以 ')' 结尾的
//       // 所以，以 '(' 结尾的字符串，最长有效括号长度就是 0，不用管
//       if (s[i] === ')') {
//           // 遇到 ')' 时，往左边去找跟它匹配的 '('，如果存在，那么有效长度在 dp[i - 1] 基础上加 2

//           // dp[i - 1] 是以 s[i - 1] 结尾的字符串的最长有效括号长度，设它为 k，
//           // 也就是 [i - k, i - 1] 这段是有效括号字符串，
//           // 如果这段字符串前面的那个字符 s[i - k - 1] 是 '(' 的话，那么有效长度加 2
//           if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === '(') {
//               dp[i] = dp[i - 1] + 2;
//             console.log(dp)
//               // 如果匹配到的 '(' 前面还有有效长度的话，也加上
//               if (i - dp[i - 1] - 2 > 0) {
//                   dp[i] += dp[i - dp[i - 1] - 2];
//               }
//           }
//       }
//   }
//   return Math.max(...dp, 0);
// };


const longestValidParentheses = (s) => {
  let maxLen = 0;
  const len = s.length;
  const dp = new Array(len).fill(0);
  for (let i = 1; i < len; i++) {
    if (s[i] == ')') {
      if (s[i - 1] == '(') {
        if (i - 2 >= 0) {
          dp[i] = dp[i - 2] + 2;
        } else {
          dp[i] = 2;
        }
      } else if (s[i - dp[i - 1] - 1] == '(') {
        if (i - dp[i - 1] - 2 >= 0) {
          dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
        } else {
          dp[i] = dp[i - 1] + 2;
        }
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }
  return maxLen;
};





let s = ")(())";
let result = longestValidParentheses(s)
console.log(result)