/**
 * 递归求数据 递归 | 尾递归优化
 */
function sum(n) {
  if(n == 1) { // 结束条件
    return 1;
  }
  return sum(n - 1) + n // 算子
}
console.log(sum(3))

function sum(n, total) {
  if(n == 1) { // 结束条件
    return total;
  }
  return sum(n - 1, total + 1) // 算子
}
console.log(sum(3, 1))