var maxProfit = function (prices) { // 暴力
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      max = Math.max(prices[j] - prices[i], max)
    }
  }
  return max;
}

var maxProfit = function (prices) { // 一次循环
  let min = 0;
  let max = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if(prices[i]- min > max) {
      max = prices[i]- min
    }
  }
  return max;
}

var maxProfit = function (price) { // 
  
}