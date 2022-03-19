/**
 * 冒泡排序
 */
// function bubbleSort(arr) {
//   let len = arr.length;
//   if (len <= 1) {
//     return arr;
//   }
//   for (let i = 0; i < len; i++) { // 最外层比较0  len-1次
//     let flag = false;
//     console.log(len -i-1)
//     for (let j = 0; j < len - i - 1; j++) { 
//       if (arr[j] > arr[j+1]) {
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//         flag = true;
//       }
//     }
//     console.log(arr)
//     if (!flag) {
//       console.log(12311)
//       break;
//     }
//   }
//   return arr;
// }

// let result = bubbleSort([1, 3, 2, 6, 5, 3, 2])
// console.log(result)

/**
 * 插入排序
 */
// function insertionSort(arr) {
//   let len = arr.length;
//   if (len <= 1) {
//     return arr;
//   }
//   for (let i = 1; i < len; ++i) {
//     let value = arr[i];
//     let j = i - 1;
//     for (; j >= 0; --j) {
//       if (arr[j] > value) {
//         arr[j+1] = arr[j];
//       } else {
//         break;
//       }
//     }
//     arr[j+1] = value;
//   }
//   return arr;
// }
// let result = insertionSort([1, 3, 2, 6, 5, 3, 2])
// console.log(result)

/**
 * 选择排序
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