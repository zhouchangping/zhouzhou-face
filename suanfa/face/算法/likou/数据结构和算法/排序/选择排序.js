
/**
 * 选择排序： 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕
 */
function selectionSort(arr) {
  if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array') {
    let len = arr.length, temp;
    for (let i = 0; i < len - 1; i++) {
      var min = arr[i];
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < min) { // 找到最小的
          temp = min;
          min = arr[j];
          arr[j] = temp;
        }
      }
      arr[i] = min;
    }
    return arr;
  } else {
    return 'arr is not a Array';
  }
}

let result = selectionSort([1, 3, 2, 6, 5, 3, 2])
console.log(result)