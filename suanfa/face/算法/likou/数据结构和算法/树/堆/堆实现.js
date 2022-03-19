// 完全二叉树： 除了最后一排的叶子节点，其他都是满的，并且最后一排靠左
// 堆： 完全二叉树+ 堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值。


// 大顶堆
//            100                           
//    *      / \                         
//    *     89   78 
//    *    / \                        
//    *   67   32                      
//    *  /
//    * 54





// class MinHeap {
//   constructor() {
//     this.heap = []
//   }
//   swap(i1, i2) {
//     [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
//   }
//   getParentIndex(i) {
//     return (i - 1) >> 1 // 相当于Math.floor((i - 1) / 2)
//   }
//   getLeftIndex(i) {
//     return i * 2 + 1
//   }
//   getRightIndex(i) {
//     return i * 2 + 2
//   }
//   shiftUp(index) {
//     if (index === 0) {
//       return
//     }
//     const parentIndex = this.getParentIndex(index)
//     if (this.heap[parentIndex] > this.heap[index]) {
//       this.swap(parentIndex, index);
//       this.shiftUp(parentIndex)
//     }
//   }
//   shiftDown(index) {
//     const leftIndex = this.getLeftIndex(index)
//     const rightIndex = this.getRightIndex(index)
//     if (this.heap[leftIndex] < this.heap[index]) {
//       this.swap(leftIndex, index)
//       this.shiftDown(leftIndex)
//     }
//     if (this.heap[rightIndex] < this.heap[index]) {
//       this.swap(rightIndex, index)
//       this.shiftDown(rightIndex)
//     }
//   }
//   insert(value) {
//     this.heap.push(value)
//     this.shiftUp(this.heap.length - 1)
//   }
//   pop() {
//     this.heap[0] = this.heap.pop() // 将最后一位pop并且赋值给堆顶
//     this.shiftDown(0)
//   }
//   peek() {
//     return this.heap[0]
//   }
//   size() {
//     return this.heap.length
//   }
// }

// const h = new MinHeap()
// h.insert(3)
// h.insert(2)
// h.insert(1)
// h.pop()
// console.log(h.peek())
// console.log(h.size())
// console.log(h)





let heap = [];
function swap(idx1,idx2){ // 交换 1-3 -》3-1
　　let temp;
　　temp = heap[idx1];
　　heap[idx1] = heap[idx2];
　　heap[idx2] = temp;
}
function shiftup(idx){ // 如果一个节点比它的父节点大（最大堆）或者小（最小堆），那么需要将它同父节点交换位置。这样是这个节点在数组的位置上升
  // console.log(idx)
　　let _idx = Math.floor((idx - 1) / 2); // 向下取，只与根节点比较
// console.log(_idx)
// console.log(heap)
// console.log("=====")
　　if(idx != 0 && heap[_idx] < heap[idx]){
  　　swap(_idx, idx);
  　　shiftup(_idx); // 递归处理数组上级
    }
}
function shiftDown(idx){ // 如果一个节点比它的子节点小（最大堆）或者大（最小堆），那么需要将它向下移动。这个操作也称作“堆化（heapify）”。shiftUp 或者 shiftDown 是一个递归的过程，所以它的时间复杂度是 O(log n)。
　　if(idx * 2 + 1 < heap.length && heap[idx * 2 + 1] > heap[idx]){
　　　　swap(idx * 2 + 1,idx);
　　　　shiftDown(idx * 2 + 1);
　　}else if(idx * 2 + 2 < heap.length && heap[idx * 2 + 2] > heap[idx]){
        console.log(2)
　　　　swap(idx * 2 + 2,idx);
　　　　shiftDown(idx * 2 + 2);
　　}
}
function insert(val){ // insert(value): 在堆的尾部添加一个新的元素，然后使用 shiftUp 来修复对。
　　heap.push(val);
　　shiftup(heap.length - 1);
}
function remove(){ // remove(): 移除并返回最大值（最大堆）或者最小值（最小堆）。为了将这个节点删除后的空位填补上，需要将最后一个元素移到根节点的位置，然后使用 shiftDown 方法来修复堆。
  console.log(heap)
  let max = heap[0];
　　swap(0,heap.length - 1);
  console.log(heap)
　　heap.pop();
  console.log(heap)
　　shiftDown(0);
　　return max;
}
insert(1);
insert(3);
insert(2);
insert(5);
let resuot = remove();
console.log(resuot)
// insert(4);
// insert(6);
// remove();
console.log(heap);//4