// 我来总结一下，基数排序对要排序的数据是有要求的，需要可以分割出独立的“位”来比较，而且位之间有递进的关系，如果 a 数据的高位比 b 数据大，那剩下的低位就不用比较了。
// 除此之外，每一位的数据范围不能太大，要可以用线性排序算法来排序，否则，基数排序的时间复杂度就无法做到 O(n) 了。
// 
/**
  * 基数排序
  * @param array
  * @return
  */
   function RadixSort(array) {
    if (array == null || array.length < 2)
        return array;
    // 1.先算出最大数的位数；
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        max = Math.max(max, array[i]);
    }
    let maxDigit = 0;
    while (max != 0) {
        max /= 10;
        maxDigit++;
    }
    let mod = 10, div = 1;
    let bucketList = new Array();
    for (let i = 0; i < 10; i++)
        bucketList.push(new array());
    for (let i = 0; i < maxDigit; i++, mod *= 10, div *= 10) {
        for (let j = 0; j < array.length; j++) {
          let num = (array[j] % mod) / div;
          bucketList[num].push(array[j]);
        }
        let index = 0;
        for (let j = 0; j < bucketList.length; j++) {
            for (let k = 0; k < bucketList[j].length; k++)
                array[index++] = bucketList[j][k];
            bucketList[j].delete();
        }
    }
    return array;
}
