var arr = [[1,4], [2,5], [3,7], [8,10], [9, 12],[13,14]];
function merge(arr) {
  if (!Array.isArray(arr) || arr.length == 0) {
      return []
  }
  arr.sort(function (a, b) { 
    return (a[0] - b[0])
  });
  let bigArr = [];
  let midArr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] <= midArr[1]) {
      if (midArr[1] <= arr[i][1]) {
        midArr[1] = arr[i][1]
      }
    } else {
      bigArr.push(midArr);
      midArr = arr[i];
    }
  }
  bigArr.push(midArr)
  return bigArr
}


