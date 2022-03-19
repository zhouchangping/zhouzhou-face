function bucketSort(array) {
  let len = array.length
  if (len < 2) {
    return
  }
  // 声明一个空桶, 将数据压入桶中
  const bucket = [];
  array.forEach((one) => {
      if (bucket[one] !== undefined) {
        bucket[one]++
      } else {
        bucket[one] = 1
      }
  });
  console.log(bucket)
  // 声明一个新数组, 当做排序后的数组
  const newArr = []
  bucket.forEach((one, index) => {
      if (one !== undefined) {
        for (let i = 0; i < one; i++) {
          newArr.push(index)
        }
      }
  })
  // 这里this不能直接赋值数组，我们就只能采取splice剪切数组再替换新的
  return newArr
}
let arr = [2,9,5,7,1,1,6,3,3,4]
let result = bucketSort(arr);
console.log(result)