/**
  * 归并排序： 将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。
  *
  * @param array
  * @return
  */
   function MergeSort(array) {
    if (array.length < 2)  {
      // console.log(array)
      return array;
    }

    const length = array.length;
    const middle = Math.floor(length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle, length);
  //   console.log(left);
  // console.log(right)
  // console.log("+++++++")
    return merge(MergeSort(left), MergeSort(right));
}
/**
 * 归并排序——将两段排序好的数组结合成一个排序数组
 *
 * @param left
 * @param right
 * @return
 */
function merge(left, right){
  console.log(left);
  console.log(right)
  
  let i = 0;
  let j = 0;
  const result = [];
  while(i < left.length && j < right.length){
    result.push(left[i] - right[j] > 0 ? right[j++]: left[i++] );
  }
  // console.log("-------")
  console.log(result)
  console.log("=======")
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}


let result = MergeSort([1,3,2,7,8,6])
// console.log(result)