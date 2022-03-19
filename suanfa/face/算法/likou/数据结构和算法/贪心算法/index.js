// 贪心算法： 贪心策略的纲领是：“尽量使接下来面对的w更小”。这样，贪心策略在w=15的局面时，会优先使用11来把w降到4；鼠目寸光；比起动态规划算法而言，贪心算法更简单、更快
class MinCoinChange {

    constructor(coins) {
        this.coins = coins
    }

    makeChange(amount) {
        const change = []
        let total = 0
        this.coins.sort((a, b) => a < b).forEach(coin => {
            while ((total + coin) <= amount) {
                change.push(coin)
                total += coin
            }
        })
        return change
    }
}
const rninCoinChange = new MinCoinChange ( [ 1, 5, 10, 25])
console. log (rninCoinChange. rnakeChange (36))





//定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 举例输入: [7,1,5,3,6,4] 输出: 7
//解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。S
//======= 解题思路 =========
// 1、由于我们在开始之初就能拿到股票的走势数组，那么也就是我们已知股票的结果
// 2、既然已知股票结果，那么利用贪心算法的原则，我们只考虑局部最优解
// 3、只需要遍历整个数组发现是上涨的交易日，我们就进行买卖操作，下降的则不动，这样永远不会亏损
// 4、使用贪心算法的思路就是不管怎样，我不能赔钱，这样做的好处就是容易理解，如果使用动态规划，还要总结公式
var maxProfit = function (prices) {
  var profit = 0
  for (var i = 1; i < prices.length; i++) {
    tmp = prices[i] - prices[i - 1]
    //只有上涨我才买卖
    if (tmp > 0) {
      profit += profit
    }
  }
  return profit
};
