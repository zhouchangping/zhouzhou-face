// 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// https://leetcode-cn.com/problems/sliding-window-maximum/solution/239-hua-dong-chuang-kou-zui-da-zhi-by-alexer-660/
// 暴力法
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//   let n = nums.length;
//   if(n == 0) return [];
//   let res = [];
//   for(let i = 0;i < n - k + 1;i++){
//       let max = Number.MIN_SAFE_INTEGER;
//       for(let j = i;j < i + k;j++){
//           max = Math.max(max,nums[j]);
//       }
//       res.push(max);
//   }
//   return res;
// };

// 双向队列: 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let n = nums.length;
  class slideWindow{
      constructor(){
          this.data = [];
      }
      push(val){
          let data = this.data;
          while(data.length > 0 && data[data.length - 1] < val){
              data.pop();
          }
          data.push(val);
      }
      pop(val){
          let data = this.data;
          if(data.length > 0 && data[0] === val){
              data.shift();
          }
      }
      max(){
          return this.data[0];
      }
  }
  let res = [];
  let windows = new slideWindow();
  for(let i = 0;i < n;i++){
      if(i+1 >= k ){
          windows.push(nums[i]);
          res.push(windows.max());
          // windows.pop(nums[i - k + 1]);
          
      }else{
          windows.push(nums[i]);
      }
  }
  return res;
};


// 动态规划
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//   let n = nums.length;
//   if(n == 0) return [];
//   if(k == 1) return nums;
//   let res = [];
//   let left = new Array(n),right = new Array(n);
//   left[0] = nums[0];
//   right[n-1] = nums[n-1];
//   for(let i = 1;i < n;i++){
//       if(i % k == 0) left[i] = nums[i];
//       else left[i] = Math.max(left[i-1],nums[i]);
//       let j = n - i - 1;
//       if((j + 1) % k == 0) right[j] = nums[j];
//       else right[j] = Math.max(right[j + 1],nums[j]);
//   }
//   for(let i = 0;i < n - k + 1;i++){
//       res[i] = Math.max(left[i + k - 1],right[i]);
//   }
//   return res;
// };

// let nums = [1,3,-1,-3,5,3,6,7];
let nums = [1,-1];
let k = 3
let result = maxSlidingWindow(nums, k)
console.log(result)
