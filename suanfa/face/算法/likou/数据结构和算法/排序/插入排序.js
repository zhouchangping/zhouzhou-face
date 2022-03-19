/**
 * 插入排序： 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
 * 在有序数组上表现良好，在短数组上，由于可以提前中止循环
 */

function insertionSort(arr) {
  let len = arr.length;
  if (len <= 1) {
    return arr;
  }
  for (let i = 1; i < len; ++i) {
    let value = arr[i];
    let j = i - 1;
    for (; j >= 0; --j) {
      if (arr[j] > value) {
        arr[j+1] = arr[j];
      } else {
        break;
      }
    }
    arr[j+1] = value;
  }
  return arr;
}
let result = insertionSort([1, 3, 2, 6, 5, 3, 2])
console.log(result)