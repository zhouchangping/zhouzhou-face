// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) { // 当前最大连续子序列和为 sum，结果为 ans
  let ans = nums[0];
  let sum = 0;
  for (const num of nums) {
    if (sum > 0) {
      sum = sum + num;
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum);
  }
  return ans;
}


// f(i) 代表以第 ii 个数结尾的「连续子数组的最大和」,我们可以考虑 \textit{nums}[i]nums[i] 单独成为一段还是加入 f(i-1)f(i−1) 对应的那一段，这取决于 \textit{nums}[i]nums[i] 和 f(i-1) + \textit{nums}[i]f(i−1)+nums[i] 的大小，我们希望获得一个比较大的，
//  (i)=max{f(i−1)+nums[i],nums[i]}
var maxSubArray = function(nums) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
      pre = Math.max(pre + x, x);
      maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};
