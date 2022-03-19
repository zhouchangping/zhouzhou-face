/**
 * 插入排序： 希尔排序也是一种插入排序
 * https://www.cnblogs.com/huaxingtianxia/p/8761656.html
 */

 /**
    * 希尔排序
    *
    * @param array
    * @return
    */
   function ShellSort(array) {
    let len = array.length;
    let temp, gap = Math.floor(len / 2);
    console.log(gap)
    while (gap > 0) {
        for (let i = gap; i < len; i++) {
            temp = array[i];
            let preIndex = i - gap;
            while (preIndex >= 0 && array[preIndex] > temp) { // 插入排序
              array[preIndex + gap] = array[preIndex];
              preIndex -= gap;
            }
            array[preIndex + gap] = temp;
        }
        console.log(array)
        gap = Math.floor(gap/2);
        console.log(gap)
    }
    return array;
}

let result = ShellSort([1, 3, 2, 6, 5, 3, 2, 9])
console.log(result)


// // shellSort
// function shellSort(arr) {
//   for(let gap = Math.floor(arr.length/2); gap > 0; gap = Math.floor(gap/2)) {
//     // 内层循环与插入排序的写法基本一致，只是每次移动的步长变为 gap
//     for(let i = gap; i < arr.length; i++) {
//       let j = i;
//       let temp = arr[j];
//       for(; j> 0; j -= gap) {
//         if(temp >= arr[j-gap]) {
//           break;
//         }
//         arr[j] = arr[j-gap];
//       }
//       arr[j] = temp;
//     }
//   }
//   return arr;
// }

// // example
// let arr = [2,5,10,7,10,32,90,9,11,1,0,10];
// alert(shellSort(arr));