const mySqrt = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 2) {
    return x;
  }
  let left = 1;
  let right = x >> 1;
  while (left + 1  < right) {
    let mid = (left + right) >> 1;
    if (mid === x/mid) {
      return mid;
    } else if(mid > x/mid) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right > x / right ? left : right;
}