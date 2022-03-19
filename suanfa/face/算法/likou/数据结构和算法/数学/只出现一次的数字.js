/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) { // XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
  let ans = 0;
  for(const num of nums) {
      ans ^= num;
  }
  return ans;
};

let result = singleNumber([2,3,3,2,1])
console.log(result)
// 2: 0000 0010
// 3: 0000 0011 
//   0000 0001

// 2: 0000 0010
//   0000 0001
//   0000 0011 === 3


var singleNumber = function(nums) {
  let set = new Set();
  for(let i = 0 ,lenght = nums.length ; i< lenght ; i++ ) {
      if(set.has(nums[i])) {
          set.delete(nums[i]);   //第二次出现的数都会被删除
          continue;        
      }
      set.add(nums[i]);
  }
  return [...set];
};

