// 合并两个有序链表
// 1-2-4， 1-3-4
// 递归
// function mergeTwoLists(l1, l2) {
//   if (l1 === null) {
//     return l2;
//   }
//   if (l2 === null) {
//     return l1;
//   }
//   if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   }
//   if (l1.val > l2.val) {
//     l2.next = mergeTwoLists(l2.next, l1);
//     return l2;
//   }
// }


// 实现单链表反转

// 实现求链表的中间结点
