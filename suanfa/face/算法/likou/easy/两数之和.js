// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
function a(nums, target) { // some: 测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
  let result = ''
  nums.some((item, index)=> {
    let re = nums.indexOf(target-item);
    if (re !== '-1' && index !== re) {
      result = [re, index];
      return true;
    }
    return result;
  })
} 

function b(nums, target) {
  let i = nums.length;
  while(i > 1) {
    let last = nums.pop();
    if (nums.indexOf((target - last)) > -1) {
      return [nums.indexOf(target-last), nums.length];
    }
    i--;
  }
} 
let result = a([2, 7, 0, 5], 9)
console.log(result)