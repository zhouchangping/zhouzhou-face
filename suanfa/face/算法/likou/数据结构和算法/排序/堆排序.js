// 最佳情况：T(n) = O(nlogn) 最差情况：T(n) = O(nlogn) 平均情况：T(n) = O(nlogn)
// function heapSort(list) {
//   // 循环建立初始堆
//   for (let i = list.length / 2; i >= 0; i--) {
//       HeapAdjust(list, i, list.length);
//   }

//   // 进行n-1次循环，完成排序
//   for (let i = list.length - 1; i > 0; i--) {
//       // 最后一个元素和第一元素进行交换
//       let temp = list[i];
//       list[i] = list[0];
//       list[0] = temp;
//       // 筛选 R[0] 结点，得到i-1个结点的堆
//       HeapAdjust(list, 0, i);
//       // console.log("第 %d 趟: \t", list.length - i);
//       // console.log(list);
//   }
// }

// function HeapAdjust(array, parent, length) {
//   let temp = array[parent]; // temp保存当前父节点
//   let child = 2 * parent + 1; // 先获得左孩子
//   console.log(child)

//   while (child < length) {
//       // 如果有右孩子结点，并且右孩子结点的值大于左孩子结点，则选取右孩子结点
//       if (child + 1 < length && array[child] < array[child + 1]) {
//           child++;
//       }

//       // 如果父结点的值已经大于孩子结点的值，则直接结束
//       if (temp >= array[child])
//           break;

//       // 把孩子结点的值赋给父结点
//       array[parent] = array[child];

//       // 选取孩子结点的左孩子结点,继续向下筛选
//       parent = child;
//       child = 2 * child + 1;
//   }

//   array[parent] = temp;
// }






var len;    // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function buildMaxHeap(arr) {   // 建立大顶堆
    len = arr.length;
    for (var i = Math.floor(len/2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, i) {     // 堆调整  https://www.cnblogs.com/jiyongjia/p/13462723.html
    var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;
        console.log(i)
        console.log('-----')

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
      console.log(largest)
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
    buildMaxHeap(arr);
    console.log(arr)

    for (var i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
        console.log(arr, '-++++++')
    }
    return arr;
}

const result = heapSort([1, 3, 4, 5, 8, 0, -20])
console.log(result)