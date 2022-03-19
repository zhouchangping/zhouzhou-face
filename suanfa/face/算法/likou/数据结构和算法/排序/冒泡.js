/**
 * 冒泡排序: 从第一个开始，把最大的元素放到最后
 */
function bubbleSort(arr) {
  let len = arr.length;
  if (len <= 1) {
    return arr;
  }
  for (let i = 0; i < len; i++) { // 最外层比较0  len-1次
    let flag = false;
    console.log(len -i-1)
    for (let j = 0; j < len - i - 1; j++) { 
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        flag = true;
      }
    }
    console.log(arr)
    if (!flag) {
      console.log(12311)
      break;
    }
  }
  return arr;
}

let result = bubbleSort([1, 3, 2, 6, 5, 3, 2])
console.log(result)
