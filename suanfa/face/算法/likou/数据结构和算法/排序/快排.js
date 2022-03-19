
/**
 * 快速排序: 额外的内存空间，所以快排就不是原地排序算法了;快速排序是原地排序，原地排序指的是空间复杂度为O(1)；
 * 从数列中挑出一个元素，称为 “基准”（pivot）；
重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
最坏冒泡：n^2 + n
最好：nlog2n
平均nlog2n
https://www.cnblogs.com/l199616j/p/10597245.html
 * @param a: 数组 
 * @param p
 * @param r
 */
// function quickSort(a) {
//   let n = a.length;
//   let result = quickSortC(a, 0, n-1)
//   return result;
// }

// function quickSortC(a, start, end) {
//   // if (p >= r) {
//   //   return;
//   // }
//   // let q = partition(a, p, r); // 原地
//   // quickSortC(a, p, q - 1);
//   // quickSortC(a, q + 1, r);
//   // return a;
//   if (a.length < 1 || start < 0 || end >= a.length || start > end) return null;
//   let smallIndex = partition(a, start, end); 
//   if (smallIndex > start) {
//     quickSortC(a, start, smallIndex - 1);
//   } 
//   if (smallIndex < end) {
//     quickSortC(a, smallIndex + 1, end);
//   } 
//   return a;
// }

// function partition(a, start, end) {
//   let pivot = a[end];
//   let i = start;
//   for (let j = start; j < end; j++) {
//     if (a[j] < pivot) {
//       swap(a, i, j);
//       i = i + 1;
//     }
//   }
//   swap(a, i, end);   // 数组在过程中被改变了
//   console.log(a)
//   return i;

//   // let pivot = parseInt(start + Math.random() * (end - start + 1));
//   // let smallIndex = start - 1;
//   // swap(a, pivot, end);
//   // for (let i = start; i <= end; i++)
//   //     if (a[i] <= a[end]) {
//   //         smallIndex++;
//   //         if (i > smallIndex) {
//   //           swap(a, i, smallIndex);
//   //         }  
//   //     }
//   // return smallIndex;
// }

// function swap(a, i, j) {
//   let temp = a[i];
//   a[i] = a[j];
//   a[j] = temp;
// }



function quickSort(arr, left, right) { // https://blog.csdn.net/xiaoxiaojie12321/article/details/81380834

  var len = arr.length,

      partitionIndex,

      left =typeof left !='number' ? 0 : left,

      right =typeof right !='number' ? len - 1 : right;



  if (left < right) {

      partitionIndex = partition(arr, left, right);

      quickSort(arr, left, partitionIndex-1);

      quickSort(arr, partitionIndex+1, right);

  }

  return arr;

}



function partition(arr, left ,right) {    // 分区操作

  var pivot = left,                     // 设定基准值（pivot）

      index = pivot + 1;

  for (var i = index; i <= right; i++) {

      if (arr[i] < arr[pivot]) {

          swap(arr, i, index);

          index++;

      }       

  }

  swap(arr, pivot, index - 1);

  return index-1;

}



function swap(arr, i, j) {

  var temp = arr[i];

  arr[i] = arr[j];

  arr[j] = temp;

}
let arr = quickSort([14, 15, 12])
console.log(arr)