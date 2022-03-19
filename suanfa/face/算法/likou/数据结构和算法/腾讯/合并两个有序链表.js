// 合并两个有序链表
var mergeTowList = function (11, 12) { // 递归
  if (11 == null) {
    return 12;
  }
  if (12 == null) {
    return 11;
  }
  if (11.val < 12.val) {
    11.next = mergeTowList(11.next, 12)
    return 11;
  }
  if (11.val > 12.val) {
    12.next = mergeTowList(11, 12.next)
    return 12;
  }
}

var mergeTowlist = function (11, 12) { // 哨兵
  let prehead = new ListNode(-1);
  let pre = prehead;
  while (11 !== null && 12 !== null) {
    if (11.next < 12.next) {
      pre.next = 11;
      11 = 11.next; 
    } else {
      pre.next = 12;
      12 = 12.next;
    }
    pre = pre.next;
  }
  pre.next = 11 === null ? 12 : 11;
  return prehead.next;
}