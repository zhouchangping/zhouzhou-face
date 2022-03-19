/*
 * @Author: zhouchangping
 * @Date: 2020-12-10 17:29:20
 * @LastEditTime: 2022-02-16 10:55:04
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/likou/数据结构和算法/递归/编程实现斐波那契数列求值 f(n)=f(n-1)+f(n-2).js
 * 可以输入预定的版权声明、个性签名、空行等
 */
function fib(n) { // 动态规划
  let dp = [];
  dp[0]= 0;
  dp[1] = 1;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i-2];
  }
  return dp[n]
}
function fib(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
let memo = new Map();
function fib(n) {
  let mes = memo.get(n);
  if (mes) {
    return mes;
  }
  if (n == 1 || n==2) {
    return 1;
  }
  let f1 = fib(n-1)
  let f2 = fib(n -2)
  memo.set(n -1, f1)
  memo.set(n-2, f2)
  return f1+ f2;
}