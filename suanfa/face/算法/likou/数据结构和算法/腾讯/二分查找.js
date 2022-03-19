var search = function (nums, target) {
  let low = 0, height = nums.length - 1;
  while (low <= height) {
    let mid = Math.floor((height - low) / 2 ) + low;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      height = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      return - 1;
    }
  }
}