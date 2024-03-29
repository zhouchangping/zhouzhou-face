// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
  let dp = new Array( amount + 1 ).fill( Infinity );
  // console.log(dp)
  dp[0] = 0;
  
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        // console.log(dp[i])
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        // console.log(Math.min(dp[1], dp[0] + 1))
      }
    }
  }
  // console.log(dp)
  return dp[amount] === Infinity ? -1 : dp[amount];
}


// var coinChange = function(coins, amount, dp = [0]) {
//   for (var i = 1; i <= amount; i++)
//       for (coin of coins)
//           if (i >= coin && dp[i - coin] !== void 0) dp[i] = Math.min((dp[i] || Infinity), dp[i - coin] + 1)
//   return dp[amount] === void 0 ? -1 : dp[amount]
// };

let result = coinChange(coins, 4)
console.log(result)

