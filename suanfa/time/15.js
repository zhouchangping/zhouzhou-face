/**
 * 简单二分查找,在数组中查找某个值的位置
 */
function bsearch(arr, value) {
  let len = arr.length,low = 0,height = len -1;
  while (low <= height) { // 
    let mid = Math.floor((low + height) / 2);
    if (arr[mid] == value) {
      return mid;
    } else if (arr[mid] < value) {
      low = mid + 1; // low = height = 3; arr[3] 不等于value; [1, 2, 3]
    } else {
      height = mid - 1; // low = height = 3; arr[3] 不等于value;
    }
  }
  return -1;
}


function bsearchTow(arr, n, value) {
  return bsearchInternally(arr, 0, n - 1, value);
}
function bsearchInternally(arr, low, height, value) {
  if (low > height) {
    return - 1;
  }
  let mid = low + ((height - low) >> 1);
  if (arr[mid] == value) {
    return mid;
  } else if (arr[mid] < value) {
    return bsearchInternally(arr, mid + 1, height, value)
  } else {
    return bsearchInternally(arr, low, mid -1, value);
  }
}

let result = bsearchTow([1, 2, 3, 4, 5, 6, 8, 9, 16], 9, 3);
console.log(result)