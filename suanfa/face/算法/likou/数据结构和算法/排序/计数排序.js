// 计数排序使用一个额外的数组C，其中第i个元素是待排序数组A中值等于i的元素的个数。然后根据数组C来将A中的元素排到正确的位置。它只能对整数进行排序。
// 找出待排序的数组中最大和最小的元素；

// 统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
// 对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
// 反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。
/**
    * 计数排序
    *
    * @param array
    * @return
    */
   function CountingSort(array) {
    if (array.length == 0) return array;
    let bias, min = array[0], max = array[0];
    for (let i = 1; i < array.length; i++) { 
        if (array[i] > max)
            max = array[i];
        if (array[i] < min)
            min = array[i];
    }
    bias = 0 - min;
    console.log(bias)
    let bucket = [];
    for (let i = 0; i < max-min+1; i++) {
        bucket[i] = 0;
    }
    for (let i = 0; i < array.length; i++) {
        bucket[array[i] + bias]++;
    }
    console.log(bucket)
    let index = 0, i = 0;
    while (index < array.length) {
        console.log(bucket[i])
        if (bucket[i] != 0) {
            array[index] = i - bias;
            bucket[i]--;
            index++;
        } else
            i++;
    }
    return array;
}


let result = CountingSort([1, 3, 2, 6, 5, 3, 2, 9])
console.log(result)