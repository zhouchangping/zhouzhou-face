// 归并排序的merge操作使用哨兵解法
func mergeWithPlaceholder(_ items: inout Array<Int>, _ start: Int, _ mid: Int, _ end: Int) {
  var leftArr: Array<Int> = Array()
  var rightArr: Array<Int> = Array()
  var i = 0
  var j = 0
  
  // 在两个数组后面各加上哨兵(最大值)，当一个数组到达哨兵位置后，就再也不会往后移动了，因为已经是最大的数值了
  for index in start...mid {
      leftArr.append(items[index])
  }
  leftArr.append(Int(INT_MAX))
  
  for index in mid+1...end {
      rightArr.append(items[index])
  }
  rightArr.append(Int(INT_MAX))
  
  for index in start...end {
      if leftArr[i] < rightArr[j] {
          items[index] = leftArr[i]
          i += 1
      } else {
          items[index] = rightArr[j]
          j += 1
      }
  }
}