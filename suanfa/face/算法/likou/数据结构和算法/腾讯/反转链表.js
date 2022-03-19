var reversList = function (head) {
  let prev = null;
  let current = head;
  if (current) {
    let next = current.next;
    current.next = prev; // 指向前一步
    prev = current; // 留给下一步用
    current = next; // 留给下一步用
  }
  return prev;
}