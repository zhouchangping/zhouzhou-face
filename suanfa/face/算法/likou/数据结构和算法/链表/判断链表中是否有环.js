
// 给定一个链表，判断链表中是否有环。 是否存在地址一样，相同的连表
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
// 如果链表中存在环，则返回 true 。 否则，返回 false

// 快慢指针
var hasCycle = function (head) {
  if (!head || head.next === null) {
    return false;
  }
  let fast = head;
  let low = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    low = low.next;
    if (low == fast) {
      return true;
    }
  }
  return false;
}
// 借哈希表
var hasCycle = (head) => {
  let map = new Map();
  while (head) {
    if (map.has(head)) return true;
    map.set(head, true); // 存的是节点的地址引用，而不是节点值
    head = head.next;
  }
  return false;
};





