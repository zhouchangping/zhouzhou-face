// function searchInsert(nums, target) {
//   let left = 0; let right = nums.length -1; let ans = 0;
//   while(left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (target > nums[mid]) {
//       left = mid + 1;
//     } else if (target < nums[mid] ) {
//       right = mid -1;
//     } else {
//       ans = mid;
//       break;
//     }
//   }
//   return ans;
// }

var searchInsert = function(nums, target) {
  const n = nums.length;
  let left = 0, right = n - 1, ans = n;
  while (left <= right) {
      let mid = ((right - left) >> 1) + left;
      console.log(mid)
      if (target <= nums[mid]) {
          ans = mid;
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return ans;
};

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function(nums, target) {
//   if (nums.indexOf(target) > -1) {
//       return nums.indexOf(target);
//   } else {
//       nums.push(target); // push返回最新长度
//       console.log(nums)
//       nums.sort(function(a, b) {
//           return a - b;
//       });
//       return nums.indexOf(target);
//   }
// };

// let result = searchInsert([1,3,5,6], 5)
let result = searchInsert([1,3,5,6], 2)
// console.log(result)