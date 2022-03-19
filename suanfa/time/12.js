/**
 * 归并排序
 */


/**
 * 快速排序
 * @param a: 数组 
 * @param p
 * @param r
 */
function quickSort(a) {
  let n = a.length;
  let result = quickSortC(a, 0, n-1)
  return result;
}

function quickSortC(a, start, end) {
  // if (p >= r) {
  //   return;
  // }
  // let q = partition(a, p, r); // 原地
  // quickSortC(a, p, q - 1);
  // quickSortC(a, q + 1, r);
  // return a;
  if (a.length < 1 || start < 0 || end >= a.length || start > end) return null;
    let smallIndex = partition(a, start, end); 
    if (smallIndex > start) {
      quickSortC(a, start, smallIndex - 1);
    } 
    if (smallIndex < end) {
      quickSortC(a, smallIndex + 1, end);
    } 
    return a;
}

function partition(a, start, end) {
  let pivot = a[end];
  let i = start;
  for (let j = start; j < end; j++) {
    if (a[j] < pivot) {
      swap(a, i, j);
      i = i + 1;
    }
  }
  swap(a, i, end);
  // console.log(a)
  return i;

  // let pivot = parseInt(start + Math.random() * (end - start + 1));
  // let smallIndex = start - 1;
  // swap(a, pivot, end);
  // for (let i = start; i <= end; i++)
  //     if (a[i] <= a[end]) {
  //         smallIndex++;
  //         if (i > smallIndex) {
  //           swap(a, i, smallIndex);
  //         }  
  //     }
  // return smallIndex;
}

function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

let arr = quickSort([11, 8, 3, 9, 7, 1, 2, 2, 5])
console.log(arr)