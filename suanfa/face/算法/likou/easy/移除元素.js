// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
// function a(x,d) {
//   let i = 0;
//   while(i < x.length) {
//     if (x[i]==d) {
//       x.splice(i, 1);
//     } else {
//       i++;
//     }
//   }
//   return x.length
// }

function b(x, val) {
  let i = 0;
  for (let j = 0; j < x.length; j++) {
    if (x[j] != val) {
      console.log(x[i])
      x[i] = x[j]; // 原地修改数组
      i++;
    }
  }
  return x;
}
// 既然问题要求我们就地删除给定值的所有元素，我们就必须用 O(1)O(1) 的额外空间来处理它。如何解决？我们可以保留两个指针 ii 和 jj，其中 ii 是慢指针，jj 是快指针。

const result = b([3,2,2,3], 3)
console.log(result)