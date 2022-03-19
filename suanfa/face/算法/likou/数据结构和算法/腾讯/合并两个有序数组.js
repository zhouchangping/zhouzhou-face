var mergeTowArry = function (arr1, arr2) {
  if (arr1.length == 0) {
    return arr2;
  }
  if (arr2.length == 0) {
    return arr1;
  }
  let ret = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      ret.push(arr1[0]);
      arr1.shift()
    } else {
      ret.push(arr2[0]);
      arr2.shift();
    }
  }
  let arr = arr1.length == 0 ? arr2 : arr1;
  ret = ret.concat(arr);
}


var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length -m, ...nums2);
  nums1.sort((a, b)=> a - b)
}

var merge = function (nums1, m, num2, n) {
  let p1 = 0, p2 = 0;
  let cur;
  let sorted = new Array(m+n).fill(0);
  while (p1 < m || p2 < n) {
    if (p1 == m) {
      cur = num2[p2++];
    } else if (p2 == n) {
      cur = num1[p1++]
    } else if (num1[p1] > num2[p2]) {
      cur = num2[p2++];
    } else {
      cur = num1[p1++];
    }
    sorted[p1+p2-1] = cur;
  }
  for(let i = 0; i < m+n; i++) {
    num1[i] = sorted[i];
  }
}