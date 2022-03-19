
let result = new Array(4);//全局或成员变量,下标表示行,值表示queen存储在哪一列
function cal8queens(row) { // 调用方式：cal8queens(0);
  if (row == 4) { // 8个棋子都放置好了，打印结果
    printQueens(result);
    return; // 8行棋子都放好了，已经没法再往下递归了，所以就return
  }
  for (let column = 0; column < 4; ++column) { // 每一行都有8中放法
    if (isOk(row, column)) { // 有些放法不满足要求
      result[row] = column; // 第row行的棋子放到了column列
      cal8queens(row+1); // 考察下一行
    }
  }
}

function isOk(row, column) {//判断row行column列放置是否合适
  let leftup = column - 1, rightup = column + 1;
  for (let i = row-1; i >= 0; --i) { // 逐行往上考察每一行
    if (result[i] == column) return false; // 第i行的column列有棋子吗？
    if (leftup >= 0) { // 考察左上对角线：第i行leftup列有棋子吗？
      if (result[i] == leftup) return false;
    }
    if (rightup < 4) { // 考察右上对角线：第i行rightup列有棋子吗？
      if (result[i] == rightup) return false;
    }
    --leftup; ++rightup;
  }
  return true;
}

function printQueens(result) { // 打印出一个二维矩阵
  for (let row = 0; row < 4; ++row) {
    for (let column = 0; column < 4; ++column) {
      if (result[row] == column) console.log("Q ");
      else console.log("* ");
    }
    console.log();
  }
  console.log();
}

const results = cal8queens(0)