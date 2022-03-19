// 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let mind = [];
  mind = nums.filter(function (item) {
      return item >= 0;
  });
  mind.sort((a, b)=> a-b);
  if (mind.length === 0 || mind[0] > 1) {
      return 1;
  }
  for (let i = 0; i < mind.length; i++) {
      if (mind[i+1]-mind[i] > 1 || i === mind.length -1) {
          return mind[i] + 1;
      }
  }
};
let result = firstMissingPositive([3,4,-1,1])
console.log(result)