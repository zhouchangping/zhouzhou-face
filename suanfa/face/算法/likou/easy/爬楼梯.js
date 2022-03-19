function a(n) { // 树结构
  if (n == 1) return 1;
  if (n == 2) return 2;
  return a(n -1) + a(n -2);
}

// 动态规划
var climbStairs = function(n) { 
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for(let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 斐波那契数列
var climbStairs = function(n) {
  const sqrt_5 = Math.sqrt(5);
  const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2,n + 1);
  return Math.round(fib_n / sqrt_5);
};

const result = a(5);
console.log(result)