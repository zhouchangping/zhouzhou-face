/*
 * @Author: zhouchangping
 * @Date: 2021-12-01 15:34:11
 * @LastEditTime: 2021-12-10 14:40:34
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/likou/数据结构和算法/腾讯/岛屿数量.js
 * 可以输入预定的版权声明、个性签名、空行等
 */


function dfs(grid, r, c) {
  // 判断 base case
  // 如果坐标 (r, c) 超出了网格范围，直接返回
  if (!inArea(grid, r, c)) {
    return;
  }
  grid[r][c] = 2;
  // 访问上、下、左、右四个相邻结点
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}


// 判断坐标 (r, c) 是否在网格中
function inArea(grid, r, c) {
  return 0 <= r && r < grid.length 
        && 0 <= c && c < grid[0].length;
}

function numIslands(grid) {
  let num_islands = 0;
  let nr = grid.length;
  if (!nr) return 0;
  let nc = grid[0].length;

  for (let r = 0; r < nr; ++r) {
      for (let c = 0; c < nc; ++c) {
          if (grid[r][c] == '1') {
              ++num_islands;
              dfs(grid, r, c);
          }
      }
  }

  return num_islands;
}


