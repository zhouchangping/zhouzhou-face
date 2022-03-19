/**
 * 二分查找变形：查找第一个值等于给定值的元素
 */
function bsearch(arr, value) {
  let low = 0, high = arr.length -1;
  let mid = low + ((high - low) >> 1);
  let midR = arr[mid];
  while (low <= high) {
    if (midR > value) {
      high = mid -1;
    } else if (midR < value) {
      low = mid + 1;
    } else {
      if (mid == 0 || arr[mid - 1] != value) {
        return mid;
      } else {
        return high = mid - 1;
      }
    }
  }
}

/**
 * 二分查找变形：查找最后一个值等于给定值的元素
 */
function bsearch(arr, value) {
  let low = 0, high = arr.length -1;
  let mid = low + ((high - low) >> 1);
  let midR = arr[mid];
  while (low <= high) { // mid + 1 = high
    if (midR > value) {
      high = mid -1;
    } else if (midR < value) {
      low = mid + 1;
    } else {
      if (mid == n - 1 || arr[mid + 1] != value) {
        return mid;
      } else {
        return low = mid + 1;
      }
    }
  }
}

/**
 * 二分查找变形：查找第一个值大于给定值的元素
 */
function bsearch(arr, value) {
  let low = 0, high = arr.length -1;
  let mid = low + ((high - low) >> 1);
  let midR = arr[mid];
  while (low <= high) { // mid + 1 = high
    if (midR >= value) {
      if (mid == 0 || arr[mid - 1] < value) {
        return mid;
      } else {
        return high = mid - 1;
      }
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

/**
 * 二分查找变形：查找最后一个小于等于给定值的元素
 */
function bsearch(arr, value) {
  let low = 0, high = arr.length -1;
  let mid = low + ((high - low) >> 1);
  let midR = arr[mid];
  while (low <= high) { // mid + 1 = high
    if (midR <= value) {
      if (mid == 0 || arr[mid + 1] > value) {
        return mid;
      } else {
        return low = mid + 1;
      }
    } else {
      low = mid + 1;
    }
  }
  return -1;
}