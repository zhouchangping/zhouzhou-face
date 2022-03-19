// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(x), i];
    }
    map.set(nums[i], i)
  }
}

var towSum = function (nums, target) {
  let l = nums.length;
  while (l > 0) {
    let num = nums.pop();
    if (nums.indexOf(target - num) > -1) {
      return [nums.indexOf(target - num), nums.length]
    }
    l--;
  }
}