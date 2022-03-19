// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。





// var lengthOfLongestSubstring = function(s) {
//   const length = s.length;
//   const map = {}; // char => boolean 代表着char是否在目前的窗口内
//   let i = 0,
//       j = 0;
//   let ans = 0;
//   while (i < length && j < length) {
//     console.log(!map[s[j]])
//       if (!map[s[j]]) {
//         // console.log(j)
//           ans = Math.max(j - i + 1, ans);
//           map[s[j]] = true;
//           ++j;
//       } else {
//         // console.log(j)
//           // 如果char重复，那么缩小滑动窗口，并更新对应的map
//           map[s[i]] = false;
//           ++i;
//       }
//   }

//   return ans;
// };



// 双指针
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) { // 把握的重点在于当前i,和j-i
  let map=new Map();
  let res=0
  for(let i=0,j=0;j<s.length;j++){
    console.log(j)
      if(map.has(s[j])){
        console.log(1)
        // console.log(i)
          i=Math.max(map.get(s[j])+1,i)
          console.log(i)
      }
      map.set(s[j],j);
      console.log(map)
      res=Math.max(res,j-i+1);
      console.log(res+'res')
      console.log("---")
  }
  return res
};

// "pwwkew"
// 输出: 3
// var lengthOfLongestSubstring = function(s) { // 动态规划 + hash
//   let map = new Map();
//   let res = 0; //  最终数目
//   let temp=0; // 记录个数
//   for(let j=0;j<s.length;j++) {
//     let i = map.has(s[j])?map.get(s[j]):-1;
//     map.set(s[j],j);
//     temp=temp<j-i?temp+1:j-i;
//     res = Math.max(res,temp); // 最终树木
//   }
//   return res;
// };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

// "pwwkew"



const result = lengthOfLongestSubstring('1232');
console.log(result)