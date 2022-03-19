var maxSubArray = function(nums) {
  let ans = nums[0];
  let sum = 0;
  for(const num of nums) {
      if(sum > 0) {
          sum += num;
      } else {
          sum = num;
      }
      ans = Math.max(ans, sum);
  }
  return ans;
};

const result = maxSubArray([-2, 3, -1, 1, -3])
console.log(result)