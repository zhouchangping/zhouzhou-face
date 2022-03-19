// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//   let midPrice = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//       let arr = prices.slice(i, prices.length).map((item, index)=> array[index+1] - item);
//       midPrice = Math.max(...arr) - midPrice > 0 ? Math.max(...arr) : midPrice;
//   }
//   return midPrice;
// };

// var maxProfit = function(prices) {
//   /* 
//       思路四 极简版 一行代码 巧用reduce + [min, max] 本质上是思路三的一种简写方法 
//       虽然 只有一行代码 但是 可读性 与 推展性 不高 生产环境的话还是推荐 思路三
//       prices.reduce((p, v) => [
//           Math.min(p[0], v), // 更新最小值 
//           Math.max(p[1], v - p[0] ) // 更新最大值
//       ], [Number.MAX_SAFE_INTEGER, 0])[1]
//   */
//   return prices.reduce((p, v) => [Math.min(p[0], v), Math.max(p[1], v - p[0]) ], [Number.MAX_SAFE_INTEGER, 0])[1]
// }



/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
  /*
      思路一 双层遍历 O(n^2) 
          a 外层遍历i 0~prices.length - 1
          b 内层遍历j i + 1~prices.length - 1
              c 找出大于当前项目 prices[i] 并 卖出 并 更新最大值
          d 输出结果
   */
  
  // if (!prices || !prices.length) return 0

  // const len = prices.length
  // let max = 0, cur = 0, next = 0

  // for (let i = 0; i < len; i++) {
  //     cur = prices[i]
  //     for (let j = i + 1; j < len; j++) {
  //         next = prices[j]
  //         if (next > cur) {
  //             max = Math.max(max, next - cur)
  //         }
  //     }
  // }

  // return max
  


  /* 
      思路二 DP  Time: O(n) + Space: O(n)
      dp[i] 前i天卖出的最大利润
      min : prices 前i项中的最小值
      prices[i] - min: 当前位置卖出可得最大利润
      dp[i - 1] : 前i-1项目卖出可得的最大利润
      [7, 1, 5, 3, 6, 4] => dp[i] = Math.max( dp[i - 1], prices[i] - min )
      [7]                [0, 0, 0, 0, 0, 0]
      [7, 1]             [0, 0, 0, 0, 0, 0]
      [7, 1, 5]          [0, 0, 4, 0, 0, 0]
      [7, 1, 5, 3]       [0, 0, 4, 4, 0, 0]
      [7, 1, 5, 3, 6]    [0, 0, 4, 4, 5, 0]
      [7, 1, 5, 3, 6, 4] [0, 0, 4, 4, 5, 5]

      输出结果 dp[len - 1]
  */
  
  
  // if (!prices || !prices.length) return 0

  // const len = prices.length, dp = new Array(len).fill(0)
  // let min = prices[0] // 前i项的最小值

  // for (let i = 1, price; i < len; i++) {
  //     price = prices[i]
  //     min = Math.min(min, price)  
  //     dp[i] = Math.max(dp[i - 1], price - min )
  // }

  // return dp[len - 1]
  

  /* 
      思路三 DP + 常量级变量 min max Time - O(n) + Space - O(1)
      精简 我们只关心 max 与 min 故不需要再构建dp 数组
  */

//   if (!prices || !prices.length) return 0

//   let min = Number.MAX_SAFE_INTEGER, max = 0

//   for (let i = 0, price; i < prices.length; i++) {
//       price = prices[i]
//       min = Math.min(min, price)
//       console.log(min)
//       max = Math.max(max, price - min)
//       console.log(max)
//       console.log("------")
//   }
//   return max
// };


// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/teng-xun-leetcode121mai-mai-gu-piao-de-zui-jia-shi/
// 我们使用动态规划求解问题时，需要遵循以下几个重要步骤：
// 定义子问题
  // 假设我们已经知道了 i-1 个股票的最大利润为 dp[i-1]，显然 i 个连续股票的最大利润为 dp[i-1] ，要么就是就是 prices[i] - minprice （ minprice 为前 i-1 支股票的最小值 ），在这两个数中我们取最大值
// 实现需要反复执行解决的子子问题部分;
  // dp[i] = Math.max(dp[i−1], prices[i] - minprice)
// 识别并求解出边界条件
  // dp[0]=0
  let maxProfit = function(prices) {
    let max = 0, minprice = prices[0]
    for(let i = 1; i < prices.length; i++) {
        minprice = Math.min(prices[i], minprice)
        console.log(minprice +"moin")
        max = Math.max(max, prices[i] - minprice) 
        console.log(max)
    }
    return max
}

let prices = [7,1,5,3,6,4];
let result = maxProfit(prices);
console.log(result)
