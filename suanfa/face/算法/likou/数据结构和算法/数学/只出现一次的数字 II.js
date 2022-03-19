// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 示例 1:

// 输入: [2,2,3,2]
// 输出: 3
// 示例 2:

// 输入: [0,1,0,1,0,1,99]
// 输出: 99
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function(nums) {
//   for(let i=0;i<nums.length;++i){
//       if(nums.indexOf(nums[i],i+1)==-1&&nums.indexOf(nums[i])==i){
//           return nums[i]
//       }
//   }
// };

var singleNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums.indexOf(nums[i], i+1))
    console.log("------")
    if (nums.indexOf(nums[i], i+1) == -1 && nums.indexOf(nums[i]) == i) {
      return nums[i];
      // console.log(i)
    }
  }
};


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function(nums) {
//   nums.sort((a,b)=>a-b);
//   for(let i=0;i<nums.length;i+=3){
//       if(nums[i] != nums[i+1]) return nums[i];
//   }
// };

let result = singleNumber([0,1,0,1,0,1,99])
console.log(result)