// 当内存无法加载全部数据时，如何从包含未知大小的数据流中随机选取k个数据，并且要保证每个数据被抽取到的概率相等。
// 给定一个单链表，随机选择链表的一个节点，并返回相应的节点值。保证每个节点被选的概率一样。


function getRandom() {
  var loopNode = this.head, i = 0;
  var target;
  while(loopNode != null) {
    i++
    var random = Math.floor(Math.random()*i);
    if (random === i -1) {
      target = loopNode;
    }
    loopNode = loopNode.next;
  }
  return target.val;
}

Solution.prototype.getRandom = function() {
  var loopNode = this.head,i = 0
  var target
  while(loopNode != null){
      i ++
      var prob = 1/i
      var random = Math.random()
      if(random < prob){
          target = loopNode
      }
      loopNode = loopNode.next
  }
  return target.val
};





// 给定一个可能含有重复元素的整数数组，要求随机输出给定的数字的索引。 您可以假设给定的数字一定存在于数组中。
/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
  let map = new Map()
  for( let i = 0 ; i < nums.length ; i ++ ){
      map.has(nums[i]) ? map.get(nums[i]).push(i) : map.set(nums[i],[i])
  }
  this.cache = map 
};

/** 
* @param {number} target
* @return {number}
*/
Solution.prototype.pick = function(target) {
  let arr = this.cache.get(target)
  return arr[Math.floor(Math.random()*arr.length)]
};


var Solution = function (nums) {
  this.nums = nums;
}
Solution.prototype.prototype = function (target) {
  var arr = [];
  for (var i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      arr.push(i);
    }
  }
  return arr[Math.floor(Math.random() * arr.length)];
}