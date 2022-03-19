// 维护一个大小为k的最小堆， 堆顶元素即为第k大的元素
// 构造时 将较大的数插入堆中
// 调用add时 需要比较当前size是否等于k 小于k则先插入；等于k则与堆顶比较，比堆顶大才删除堆顶、插入，小于等于堆顶则直接返回堆顶

// 小顶堆 二叉搜索树---------


// 排序数组
let arr = [4,5,8,2]
function KthLargest(arr, num) {
  this.minK = num;
  let size = Math.min(num, arr.length);
  let mheap = [];
  arr.sort((a, b)=> {
    return b-a;
  });
  for (let j = 0; j < size; j++) {
    mheap.push(arr[j]);
  }
  console.log(arr[num-1])
  console.log(mheap)
  return mheap[num]
}

KthLargest.prototype.add = function (x) {
  let res;
  if (mheap.length == this.mink -1) {
    mheap.push(x);
    res = mheap.unshift();
  } else {
    if (x > mheap.shift()) {
      mheap.shfit();
      mheap.push(x);
    }
    res = unshift()
  }
}
const result = KthLargest(arr, 3)
console.log(result)