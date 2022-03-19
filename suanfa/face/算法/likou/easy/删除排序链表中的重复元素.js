function ListNode(val) {
    this.val = val;
    this.next = null;
}
let l1 = new ListNode(1);
let l2 = new ListNode(2);
let l3 = new ListNode(3);
let l4 = new ListNode(3);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = null;
function a(head) {
  let cur = head;
  while(cur && cur.next) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next; // head不变
      console.log(cur)
      console.log(head)
    }
  }
  return head
}
const result = a(l1);
console.log(result)



let  a = {
  x: 1
}
let b = a; // a 已经被申明
a.x = 2;
console.log(b)