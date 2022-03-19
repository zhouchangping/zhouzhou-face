var hasCycle = function (head) { // map
  let map = new Map();
  while (head) {
    if (map.has(head)){
      return true;
    }
    map.set(head, true);
    head = head.next;
  }
  return false;
}

var hasCycle = function (head) { // 快慢指针
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next
    if (slow == fast) {
      return true;
    }
  }
  return false;
}