/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) { // 前缀
  if (strs.length == 0)
    return "";
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < ans.length && j < strs[i].length; j++) {
      if (ans[j] != strs[i][j])
        break;
    }
    ans = ans.substr(0, j);
    if (ans === "")
      return ans;
  }
  return ans;
};


var longestCommonPrefix = function (strs) { // 分治
  if (strs === null || strs.length === 0) return "";
  return lCPrefixRec(strs)
};

// 若分裂后的两个数组长度不为 1，则继续分裂
// 直到分裂后的数组长度都为 1，
// 然后比较获取最长公共前缀
function lCPrefixRec (arr) {
  let length = arr.length
  if (length === 1) {
    return arr[0]
  }
  let mid = Math.floor(length / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid, length)
  console.log(mid)
  console.log(left)
  console.log(right)
  console.log("-------")
  return lCPrefixTwo(lCPrefixRec(left), lCPrefixRec(right))
}

// 求 str1 与 str2 的最长公共前缀
function lCPrefixTwo (str1, str2) {
  let j = 0
  for (; j < str1.length && j < str2.length; j++) {
    if (str1.charAt(j) !== str2.charAt(j)) {
      break
    }
  }
  return str1.substring(0, j)
}
let result = longestCommonPrefix(["flower", "flow", "flight", "flo"])
console.log(result)
