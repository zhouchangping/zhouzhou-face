
// 动态规划（Dynamic Programming，DP)是一种将复杂问题分解成更小的子问题来解决的优化技术。
// 分治思想是将问题分解成相互独立的子问题，他们彼此是没有重叠的，而动态规划则是分解成相互重叠的子问题，他们相互之间是有关联的，举个例子，拿出来经典的斐波那契数列

// 背包问题：给出一组项目，各自有值和容量，目标是找出总值最大的项目的集合。这个 问题的限制是，总容量必须小于等于“背包”的容量
// 最长公共子序列：找出一组序列的最长公共子序列（可由另一序列删除元素但不改变余 下元素的顺序而得到）
// 矩阵链相乘：给出一系列矩阵，目标是找到这些矩阵相乘的最高效办法（计算次数尽可能少)，相乘操作不会进行，解决方案是找到这些矩阵各自相乘的顺序
// 硬币找零：给出面额为 d1...dn 的一定数量的硬币和要找零的钱数，找出有多少种找零的方法
// 图的全源最短路径：对所有顶点对(u, v)，找出从顶点u到顶点v的最短路径。

// 动态规划和分而治之（归并排序和快速排序算法中用到的那种）是不同的方法。分而治之方法是把问题分解成相互独立的子问题，然后组合它们的答案，而动态规划则是将问题分解成相互依赖的子问题。
    // 定义子问题
        // - 取11：[公式] 5张
        // - 取5： [公式] 3张
        // - 取1： [公式] 5张
    // 实现要反复执行而解决子问题的部分（可能是递归）
    // 识别并求解出边界条件
    // 美国有以下面额(硬币）：d1=1, d2=5, d3=10, d4=25，如果要找36美分的零钱，我们可以用1个25美分、1个10美分和1个便士（ 1美分)。最少硬币找零的解决方案是找到 n 所需的最小硬币数
    class MinCoinChange {

      constructor(coins) {
          this.coins = coins
          this.cache = {}
      }
  
      makeChange(amount) {
          console.log(amount+ '----')
          if (amount < 0) {
              return;
          }
          if (!amount) return []
          if (this.cache[amount]) return this.cache[amount]
          let min = [], newMin, newAmount
          this.coins.forEach(coin => {
              console.log('sdfafsafsfsd')
              newAmount = amount - coin
              console.log('kai')
              console.log(newAmount)
              if (newAmount >= 0) {
                  
                  console.log(newAmount)
                  console.log('guan')
                  newMin = this.makeChange(newAmount)
              }
              if (newAmount >= 0 && 
                      (newMin.length < min.length - 1 || !min.length) && 
                      (newMin.length || !newAmount)) {
                          console.log(newAmount)
                          console.log(newMin.length + '+++')
                          console.log(min.length + '---')
                  min = [coin].concat(newMin)
              }
          })
          return (this.cache[amount] = min)
      }
  }
  const minCoinChange = new MinCoinChange([1, 11])
  console.log(minCoinChange.makeChange(12))
  // [1, 10, 25]
  // const minCoinChange2 = new MinCoinChange([1, 3, 4])
  // console.log(minCoinChange2.makeChange(6))
  // [3, 3]







   //假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
      //每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？ 注意：给定 n 是一个正整数。
      // 示例
      // 输入： 2
      // 输出： 2
      // 解释： 有两种方法可以爬到楼顶。
      // 1.  1 阶 + 1 阶
      // 2.  2 阶
      // =======分析=========
      // 首先我们假设只有3阶，那么我先定义好，我最后一步可以是两阶，也可能是一阶，
      // 如果最后一步是两阶,我们就能知道之前就只有一种方法才能达到最后一步是两阶梯
      // 如果最后一步是一阶我们就是知道之前有两种方法可以到达最后一阶梯
      // 由于我们的最后一步的阶梯数定死了，所以，他的阶梯数量就是之前的方法之和
      // 如此我们就可以推导出f(n)=f(n-1)+f(n-2) 公式
      var climbStairs = function (n) {
        // 由于我们的公式是f(n)=f(n-1)+f(n-2),所有当n小于2的时候我们直接返回，兼容边界条件
        if (n < 2) { return 1 }
        // 我们先定义初始的能求值的数组,下标0为1是由于我们只有一阶的时候也只有一种方法
        const dp = [1, 1]
        //套用公式
        for (let i = 2; i < n; i++) {
          dp[i] = dp[i - 1] + dp[i - 2]
        }
        // 返回当前阶梯的方法
        return dp[n]
      };



// 



      