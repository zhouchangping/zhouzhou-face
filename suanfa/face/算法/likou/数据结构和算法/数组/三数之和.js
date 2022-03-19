// https://leetcode-cn.com/problems/3sum/solution/san-shu-zhi-he-by-leetcode-solution/
// 「不重复」的本质是什么？我们保持三重循环的大框架不变，只需要保证：
// 第二重循环枚举到的元素不小于当前第一重循环枚举到的元素；
// 第三重循环枚举到的元素不小于当前第二重循环枚举到的元素。
// 也就是说，我们枚举的三元组 (a, b, c)(a,b,c) 满足 a \leq b \leq ca≤b≤c，保证了只有 (a, b, c)(a,b,c) 这个顺序会被枚举到，而 (b, a, c)(b,a,c)、(c, b, a)(c,b,a) 等等这些不会

// 优化空间+时间（双指针：如果我们发现随着第一个元素的递增，第二个元素是递减的，那么就可以使用双指针的方法）

function threeSum(nums) {
  let n = nums.length;
  let ans = [];
  if(nums == null || n < 3) return ans;
  nums.sort((a, b) => a - b); // 排序
  // 枚举 a
  for (let first = 0; first < n; ++first) {
      // 需要和上一次枚举的数不相同
      if (first > 0 && nums[first] == nums[first - 1]) {
          continue;
      }
      // c 对应的指针初始指向数组的最右端
      let third = n - 1;
      let target = -nums[first];
      // 枚举 b
      for (let second = first + 1; second < n; ++second) {
          // 需要和上一次枚举的数不相同
          if (second > first + 1 && nums[second] == nums[second - 1]) {
              continue;
          }
          // 需要保证 b 的指针在 c 的指针的左侧
          while (second < third && nums[second] + nums[third] > target) {
              --third;
          }
          // 如果指针重合，随着 b 后续的增加
          // 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
          if (second == third) {
              break;
          }
          if (nums[second] + nums[third] == target) {
              ans.push([nums[first], nums[second], nums[third]]);
          }
      }
  }
  return ans;
}
const nums = [-1, 0, 1, 2, -1, -4]
const result = threeSum(nums)
console.log(result)




/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ans = [];
  const len = nums.length;
  if(nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len ; i++) {
      if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
      if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
      let L = i+1;
      let R = len-1;
      while(L < R){
          const sum = nums[i] + nums[L] + nums[R];
          if(sum == 0){
              ans.push([nums[i],nums[L],nums[R]]);
              while (L<R && nums[L] == nums[L+1]) L++; // 去重
              while (L<R && nums[R] == nums[R-1]) R--; // 去重
              L++;
              R--;
          }
          else if (sum < 0) L++;
          else if (sum > 0) R--;
      }
  }        
  return ans;
};
