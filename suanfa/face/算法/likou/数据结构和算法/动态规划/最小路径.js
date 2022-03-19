/*
 * @Author: zhouchangping
 * @Date: 2020-12-21 18:41:24
 * @LastEditTime: 2022-01-20 15:52:45
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/likou/数据结构和算法/动态规划/最小路径.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
/**
 * @description 动态规划
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  var n = grid.length;
  var m = grid[0].length;
  var dp = Array.from(new Array(n),() => new Array(m));
  for(var i = 0;i < n;i++){
      for(var j = 0;j < m;j++){
          if( i != 0 && j!= 0){
              dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j];
          }else if(i == 0 && j!=0){
              dp[i][j] = dp[i][j-1]+grid[i][j];
          }else if(i != 0 && j==0){
              dp[i][j] = dp[i-1][j]+grid[i][j];
          }else if(i == 0 && j==0){
              dp[i][j] = grid[i][j];
          }
      }
  }
  return dp[n-1][m-1];
};

let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
let result = minPathSum(grid)
console.log(result)


var minPathSum = function (grid) {
  var dp = Array.from(new Array(n), ()=>new Array(m))
  var n = grid.length;
  var m = grid[0].length;
  for ( var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (i==0 && j==0) {
        dp[i][j] = grid[i][j];
      } else if (i== 0 && j!== 0) {
        dp[i][j] = dp[i][j-1]+grid[i][j]
      } else if (i!== 0 && j == 0) {
        dp[i][j] = dp[i-1][j] + grid[i][j]
      } else if (i !== 0 && j !== 0) {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
      }
    }
  }
  return dp[n][m]
}
Array.from(new Array(n), ()=>new Array(m))
