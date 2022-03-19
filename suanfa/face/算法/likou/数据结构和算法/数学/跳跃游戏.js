// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function(nums) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//       if (i > k) return false;
//       k = Math.max(k, i + nums[i]);
//   }
//   return true;
// };



// function canJump(nums) { // 贪心算法
//   let n = nums.length;
//   let rightmost = 0;
//   for (let i = 0; i < n; ++i) {
//     if (i <= rightmost) { // 确保最远的距离大于当前的i,确保可以走动   最大可达范围是否 大于等于当前遍历到的数组下标，
//       rightmost = Math.max(rightmost, i + nums[i]); // 每一次都计算当前位置以及以前能走到的最远距离（贪心）
//       console.log(rightmost)
//       if (rightmost >= n - 1) {
//         return true;
//       }
//     }
//   }
//   return false;
// }


  function canJump(nums) { // 递归 https://leetcode-cn.com/problems/jump-game/solution/chao-xiang-xi-tu-jie-di-gui-tan-xin-55-tiao-yue-yo/
    if(nums==null || nums.length==0) {
        return true;
    }
    return dfs(0,nums);
  }
  
  function dfs(index, nums) {
      //递归的终止条件
      if(index>=nums.length-1) {
          return true;
      }
      //根据nums[index]表示要循环多少次，index是当前我们能到达的位置，
      //在这个基础上有 index+1，index+2.... index+i种跳跃选择
      for(let i=1;i<=nums[index];++i) {
          if(dfs(i+index,nums)) {
              return true;
          }
      }
      return false;
  }


  function canJump(nums) { // 递归加记忆
      if(nums==null || nums.length==0) {
          return true;
      }
      let cache = new Map();
      return dfs(0,nums,cache);
  }
  function dfs(index, nums, cache) {
    if(index>=nums.length-1) {
        return true;
    }
    if(cache.containsKey(index)) {
        return cache.get(index);
    }
    for(let i=1;i<=nums[index];++i) {
        if(dfs(i+index,nums,cache)) {
            cache.put((i+index),Boolean.TRUE);
            return true;
        }
    }
    cache.add(index,false);
    return false;
  }





let result = canJump([2, 1, 2, 1, 4])
// let result = canJump([2, 3, 1, 1, 4])
console.log(result)


