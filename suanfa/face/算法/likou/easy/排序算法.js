// // 冒泡 冒泡排序比较任何两个相邻的项，如果第一个比第二个大，则交换它们。元素项向上移动至 正确的顺序，就好像气泡升至表面一样
// function bubbleSort(arr) {
//   var len = arr.length;
//   for (var i = 0; i < len; i++) {
//       for (var j = 0; j < len - 1 - i; j++) {
//           if (arr[j] > arr[j+1]) {        //相邻元素两两对比
//               var temp = arr[j+1];        //元素交换
//               arr[j+1] = arr[j];
//               arr[j] = temp;
//           }
//       }
//   }
//   return arr;
// }
// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];


// // 插入： 排序小型数组时，此算法比选择排序和冒泡排序性能要好。
// function insertionSort(array) {
//   if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
//       console.time('插入排序耗时：');
//       for (var i = 1; i < array.length; i++) {// 往前插入
//           var key = array[i];
//           var j = i - 1;
//           while (j >= 0 && array[j] > key) {
//               array[j + 1] = array[j];
//               j--;
//           }
//           array[j + 1] = key;
//       }
//       console.timeEnd('插入排序耗时：');
//       return array;
//   } else {
//       return 'array is not an Array!';
//   }
// }
// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];


// // 选择： 选择排序算法是一种原址比较排序算法。选择排序算法的思路是：找到数据结构中的最小值并 将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推。
// function selectionSort(arr) {
//   var len = arr.length;
//   var minIndex, temp;
//   console.time('选择排序耗时');
//   for (var i = 0; i < len - 1; i++) {
//       minIndex = i;
//       for (var j = i + 1; j < len; j++) {
//           if (arr[j] < arr[minIndex]) {     //寻找最小的数
//               minIndex = j;                 //将最小数的索引保存
//           }
//       }
//       temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//   }
//   console.timeEnd('选择排序耗时');
//   return arr;
// }
// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];


// 归并排序 其复杂度为O(n log^n) 将原始数组切分成较小的数组，直到每个小数组只有一 个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组；由于是分治法，归并排序也是递归
// 空间复杂度是 O(n)
// Array.prototype.mergeSort = function() {
//     const merge = (left, right) => {
//         const result = []
//         let il = 0
//         let ir = 0
//         while(il < left.length && ir < right.length) {
//             if(left[il] < right[ir]) {
//                 result.push(left[il++])
//             } else {
//                 result.push(right[ir++])
//             }
//         }
//         while (il < left.length) {
//             result.push(left[il++])
//         }
//         while (ir < right.length) {
//             result.push(right[ir++])
//         }
//         console.log(left)
//         console.log(right)
//         console.log(il)
//         console.log(ir)
//         console.log(result)
//         console.log('------')
//         return result
//     }
//     const mergeSortRec = array => {
//         if (array.length === 1) {
//             return array
//         }
//         const mid = Math.floor(array.length / 2)
//         const left = array.slice(0, mid)
//         const right = array.slice(mid, array.length)
//         return merge(mergeSortRec(left), mergeSortRec(right))
//     }
//     return mergeSortRec(this)
// }

// let arr = [8, 7, 6, 5]
// console.log(arr.mergeSort())



// 快速排序 它的复杂度为O(nlog^n)快速排序也使用分治的方法，将原始数组分为较小的数组（但它没有像归并排序那样将它们分割开)
// 首先，从数组中选择中间一项作为主元
// 创建两个指针，左边一个指向数组第一个项，右边一个指向数组最后一个项。移动左指 针直到我们找到一个比主元大的元素，接着，移动右指针直到找到一个比主元小的元素，然后交 换它们，重复这个过程，直到左指针超过了右指针。这个过程将使得比主元小的值都排在主元之 前，而比主元大的值都排在主元之后。这一步叫作划分操作。
// 接着，算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的 子数组）重复之前的两个步骤，直至数组已完全排序。

// 空间复杂度可以O(1),以来数组插入优化交换，原地分区等
// 不稳定,会交换位置
// 时间复杂度都是：O(nlogn)到n2
// Array.prototype.quickSort = function() {
//     const partition = (array, left, right) => {
//         var pivot = array[Math.floor((right + left) / 2)]
//         // console.log(left)
//         // console.log(right)
//         // console.log(pivot)
//         let i = left
//         let j = right
//         while (i <= j) {
//             while (array[i] < pivot) {
//                 i++
//             }
//             while (array[j] > pivot) {
//                 console.log(j)
//                 console.log(array[j])
//                 j--
//             }
//             if (i <= j) {
//                 // console.log(j)
//                 let aux = array[i]
//                 console.log(aux + '---')
//                 console.log(array[j] + '---')
//                 array[i] = array[j]
//                 array[j] = aux
//                 i++
//                 j--
//             }
//         }
//         // console.log(i)
//         // console.log(array)
//         // console.log(i + '--------')
//         return i
//     }
//     const quick = (array, left, right) => {
//         let index
//         if (array.length > 1) {
//             index = partition(array, left, right)
//             console.log(index+ '+++=')
//             if (left < index - 1) {
//                 quick(array, left, index - 1)
//             }
//             if (index < right) {
//                 quick(array, index, right)
//             }
//         }
//     }
//     quick(this, 0, this.length - 1)
//     return this
// }
// let arr = [8, 7, 6, 9, 4]

// // [4, 6, 7, 9, 8]
// console.log(arr.quickSort())


