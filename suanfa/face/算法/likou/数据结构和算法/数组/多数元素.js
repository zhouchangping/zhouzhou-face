// https://leetcode-cn.com/problems/majority-element/
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//   nums.sort((a, b)=> {
//     return a - b;
//   });
//   console.log(nums)
//   return nums[Math.floor(nums.length / 2)];
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  for (var i = nums.length, h = {}; i--;) {
      h[nums[i]] = (h[nums[i]] || 0) + 1
      if (h[nums[i]] > nums.length / 2) {
          return nums[i]
      }
  }
};
const nums = [2,2,1,1,1,2,2];
const result = majorityElement(nums);
console.log(result)



  
  // function countInRange(nums, num, lo, hi) {
  //     const count = 0;
  //     for (const i = lo; i <= hi; i++) {
  //         if (nums[i] == num) {
  //             count++;
  //         }
  //     }
  //     return count;
  // }

  // function majorityElementRec(nums, lo, hi) {
  //     // base case; the only element in an array of size 1 is the majority
  //     // element.
  //     if (lo == hi) {
  //         return nums[lo];
  //     }

  //     // recurse on left and right halves of this slice.
  //     const mid = (hi - lo) / 2 + lo;
  //     const left = majorityElementRec(nums, lo, mid);
  //     const right = majorityElementRec(nums, mid + 1, hi);

  //     // if the two halves agree on the majority element, return it.
  //     if (left == right) {
  //         return left;
  //     }

  //     // otherwise, count each element and return the "winner".
  //     const leftCount = countInRange(nums, left, lo, hi);
  //     const rightCount = countInRange(nums, right, lo, hi);

  //     return leftCount > rightCount ? left : right;
  // }

  // function majorityElement(nums) {
  //     return majorityElementRec(nums, 0, nums.length - 1);
  // }

