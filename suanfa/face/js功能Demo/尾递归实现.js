// 当一个函数最后一个步骤是返回另一个函数的调用就叫尾调用，尾调用自身，就叫尾递归
// 尾递归优化： 函数调用时候会在调用栈中存有记录，每一条记录叫做一个调用栈，每调用一个函数就向栈中push一条记录。函数执行结束依次向外面弹出直到清空调用栈。
// 尾调用优化只有在严格模式下有用： 尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。
// arguments：返回调用时函数的参数
// func.caller：返回调用当前函数的那个函数。

// 递归很容以栈溢出"错误（stack overflow），但对于尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误
'use strict'
function factorial(n, total = 1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total)
}

function Fibonacci(n, pre = 1 , current = 1) {
  if (n <= 1) return current;
  return Fibonacci(n - 1, pre, pre + current)
}



function factorial(n) { // 一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n)
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(5) // 120


function factorial(n, total) { // 改写成尾递归，只保留一个调用记录，复杂度 O(1) 
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1) // 120