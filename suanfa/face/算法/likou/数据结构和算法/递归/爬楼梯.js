// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
let climbStairs = function (n) { // 递归和动态规划
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
}



/**
 * @description 斐波那契额
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const sqrt_5 = Math.sqrt(5);
  const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2,n + 1);
  return Math.round(fib_n / sqrt_5);
};

function test(n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  return test(n-1) + test(n-2);
}