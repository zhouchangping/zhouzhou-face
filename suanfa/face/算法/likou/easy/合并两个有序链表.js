//
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
function a(l1, l2) { // 递归 链
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return 11;
  }
  if (l1.val < l2.val) {
    l1.next = a(l1.next, l2);
    return l1;
  } else {
    l2.next = a(l2.next, l1);
    return l2;
  }
}