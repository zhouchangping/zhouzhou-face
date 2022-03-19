function ListNode(val) {
  this.val = val;
  this.next = null;
}
let head = new ListNode(null);
let root = new ListNode(1);
let l2 = new ListNode(2);
let l3 = new ListNode(2);
let l4 = new ListNode(3);

// null -> 1->2->2->3
head.next = root;
root.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = null;
 
function a(root, val) {
  let newHead = head, // null
  pre = newHead, // null
  cur = root; // root
  while(cur) {
    if (cur.val == val) {
      pre.next = cur.next // pre = 123 pre = 13 // 把root->l3 // root->l4
      cur = pre.next; // cur = 23 cur = 3
    } else {
      pre = cur; // pre = 1223 pre = 3
      console.log(pre)
      cur = cur.next; // cur = 223 cur = null
      console.log(cur)
      console.log(newHead)
      console.log('-------------')
    }
  }
  return newHead;
}

const re = a(root, 2);
// console.log(re)