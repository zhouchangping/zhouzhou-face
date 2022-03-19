// <<      :     左移运算符，num << 1,相当于num乘以2

// >>      :     右移运算符，num >> 1,相当于num除以2

// >>>    :     无符号右移，忽略符号位，空位都以0补齐
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // 三个方向判重
  let rows = {};
  let columns = {};
  let boxes = {};
  // 遍历数独
  for(let i = 0;i < 9;i++) {
      for(let j = 0;j < 9;j++) {
          let num = board[i][j];
          if (num != '.') {
            // console.log(num)
            // 子数独序号
            let boxIndex = parseInt((i/3)) * 3 + parseInt(j/3);
            console.log(j+"jjjj")
            console.log(boxIndex + "var")
            console.log("---------")
            if(rows[i+'-'+num] || columns[j+'-'+num] || boxes[boxIndex+'-'+num]){
                return false;
            }
            // 以各自方向 + 不能出现重复的数字 组成唯一键值，若出现第二次，即为重复
            rows[i+'-'+num] = true;
            columns[j+'-'+num] = true;
            boxes[boxIndex+'-'+num] = true;
            // console.log(boxes)
          }
      }
  }
  // console.log(boxes)
  return true;
};



// 遍历行列
// 遍历小宫格
// const isValidSudoku = arr => {
//   for (let i = 0; i < 9; i++) {
//     // 遍历行*列
//     let row = new Set(), col = new Set()
//     for (let j = 0; j < 9; j++) {
//       if (arr[i][j] !== '.') {
//         if (row.has(arr[i][j])) return false
//         row.add(arr[i][j])
//       }
//       if (arr[j][i] !== '.') {
//         if (col.has(arr[j][i])) return false
//         col.add(arr[j][i])
//       }
//     }
//     // 遍历3*3小宫格
//     let block = new Set()
//     let x = (i / 3 >> 0) * 3, y = i % 3 * 3
//     for (let j = 0; j < 9; j++) {
//       if (arr[x][y] !== '.') {
//         if (block.has(arr[x][y])) return false
//         block.add(arr[x][y])
//       }
//       y++
//       if ((j + 1) % 3 === 0) {
//         x += 1
//         y -= 3
//       }
//     }
//   }
//   return true
// }

let nums = 
[
  ["5","3",".", ".","7",".", ".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
let result = isValidSudoku(nums)
console.log(result)
// 所有的按位操作符的操作数都会被转成补码 正数的补码等于源码 负数的补码为反码+1；
// 9: 0000 1001 -> 00001001 -> 00001001       -9: 10001001-> 01110110 -> 10000111
console.log(9>>1) // 4 该操作符会将第一个操作数向右移动指定的位数。向右被移出的位被丢弃，拷贝最左侧的位以填充左侧 0000 1001-> 0000 0100
console.log(9>>2) // 2 该操作符会将第一个操作数向右移动指定的位数。向右被移出的位被丢弃，拷贝最左侧的位以填充左侧 0000 1001-> 0000 0010
console.log(-9>>2) // -3 该操作符会将第一个操作数向右移动指定的位数。向右被移出的位被丢弃，拷贝最左侧的位以填充左侧 1111 1001（补码）右移 -> 1111 1110(补码) - > 0000 0001

console.log(9>>>1) // 4
console.log(9>>>0) // 9 无符号右移，忽略符号位，空位都以0补齐     value >>> num     --   num 指定要移位值value 移动的位数。
console.log(-9>>>0) // 4294967287