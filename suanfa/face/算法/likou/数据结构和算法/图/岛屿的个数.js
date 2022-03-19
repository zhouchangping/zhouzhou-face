/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */
// dns
function helper(grid, i, j, rows, cols) {
  if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === "0")
    return;

  grid[i][j] = "0";

  helper(grid, i + 1, j, rows, cols);
  helper(grid, i, j + 1, rows, cols);
  helper(grid, i - 1, j, rows, cols);
  helper(grid, i, j - 1, rows, cols);
}
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let res = 0;
  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        helper(grid, i, j, rows, cols);
        res++;
      }
    }
  }
  return res;
};


// // bfs
// const numIslands = (grid) => {
//   let count = 0
//   let queue = []
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === '1') {
//         count++
//         grid[i][j] = '0' // 做标记，避免重复遍历
//         queue.push([i, j])
//         turnZero(queue, grid)
//       }
//     }
//   }
//   return count
// }
// function turnZero(queue, grid) {
//   const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
//   while (queue.length) {
//     const cur = queue.shift()
//     for (const dir of dirs) {
//       const x = cur[0] + dir[0]
//       const y = cur[1] + dir[1]
//       if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== '1') {
//         continue
//       }
//       grid[x][y] = '0'
//       queue.push([x, y])
//     }
//   }
// }

let grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

let result = numIslands(grid);
console.log(result)
