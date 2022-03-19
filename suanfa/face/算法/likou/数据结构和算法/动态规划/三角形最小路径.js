/*
 * @Author: zhouchangping
 * @Date: 2020-12-24 20:00:49
 * @LastEditTime: 2022-01-20 15:44:38
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/likou/数据结构和算法/动态规划/三角形最小路径.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// - 给定一个三角形，找出自顶向下的最小路径和。
// - 每一步只能移动到下一行中相邻的结点上。
// - 相邻的结点在这里指的是下标与上一层结点下标相同或者等于上一层结点下标+1的两个结点。
const minimumTotal = (triangle) => {
  const h = triangle.length;
  // 初始化dp数组
  const dp = new Array(h);
  for (let i = 0; i < h; i++) {
    dp[i] = new Array(triangle[i].length);
  }

  for (let i = h - 1; i >= 0; i--) { // 自底而上遍历
    for (let j = 0; j < triangle[i].length; j++) { // 同一层的
      if (i == h - 1) {  // base case 最底层
        dp[i][j] = triangle[i][j];  
      } else { // 状态转移方程，上一层由它下面一层计算出
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
      }
    }
  }
  return dp[0][0];
};

let arr = [
  [2],
 [3,4],
[6,5,7],
[4,1,8,3]
];
let result = minimumTotal(arr);
console.log(result)


function minimumTotal (triangle) {
  const s = triangle.length;
  const dp = new Array(s);
  for (let i = 0; i < s; i++) {
    dp[i] = new Array(triangle[i].length);
  }
  for (let k = s - 1; k >= 0; k--) {
    for (let m = 0; m < triangle[k].length; m++) {
      if (k == s - 1) {
        dp[k][m] = triangle[k][m];
      } else {
        dp[k][m] = Math.min(dp[k+1][m], dp[k+1][m+1]) + triangle[k][m]
      }
    }
  }
  return dp[0][0]
}