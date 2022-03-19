
// 合并K个升序链表
  // 给你一个链表数组，每个链表都已经按升序排列。
  // 请你将所有链表合并到一个升序链表中，返回合并后的链表。
// /**
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */
// var mergeKLists = function(lists) {
//   let l3;
//   for (let i = 0; i < lists.length; i++) {
//     l3 = mergeTwoLists(l3, lists[i])
//   }
//   return l3;
// };

// var mergeKLists2 = function(lists) {
//   return lists.reduce((p, n) => {
//       while (n) {
//           p.push(n), n = n.next
//       }
//       return p
//   },[]).sort((a, b) => a.val - b.val).reduceRight((p, n) => (n.next = p, p = n, p), null)
// };

/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 */
function mergeTwoLists(l1, l2) {
  const dummyHead = {};
  let current = dummyHead; // 一个
  // l1: 1 -> 3 -> 5
  // l2: 2 -> 4 -> 6
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1; // 把小的添加到结果链表
      current = current.next; // 移动结果链表的指针
      l1 = l1.next; // 移动小的那个链表的指针
    } else {
      current.next = l2;
      current = current.next;
      l2 = l2.next;
    }
  }

  if (l1 === null) {
    current.next = l2;
  } else {
    current.next = l1;
  }
  console.log(dummyHead)
  return dummyHead.next;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // 图参考： https://zhuanlan.zhihu.com/p/61796021
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  if (lists.length === 2) {
    return mergeTwoLists(lists[0], lists[1]);
  }

  const mid = lists.length >> 1;
  const l1 = [];
  for (let i = 0; i < mid; i++) {
    l1[i] = lists[i];
  }

  const l2 = [];
  for (let i = mid, j = 0; i < lists.length; i++, j++) {
    l2[j] = lists[i];
  }
  return mergeTwoLists(mergeKLists(l1), mergeKLists(l2));
};
let lists = [[1,4,5],[1,3,4],[2,6]]
let result = mergeKLists(lists)
console.log(result)




// 两两合并
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */
// var mergeKLists = function(lists) {
//   let mergeTwoLists = (l1,l2) => {
//       let preHead = new ListNode(-1)
//       let preNode = preHead
//       while(l1 && l2){
//           if(l1.val <= l2.val){
//               preNode.next = l1
//               l1 = l1.next
//           }else{
//               preNode.next = l2
//               l2 = l2.next
//           }
//           preNode = preNode.next
//       }
//       preNode.next = l1 ? l1 : l2
//       return preHead.next
//   }
//   let n = lists.length
//   if(n == 0) return null
//   let res = lists[0]
//   for(let i = 1;i < n;i++){
//       if(lists[i]){
//           res = mergeTwoLists(res,lists[i])
//       }
//   }
//   return res
// };



// 数组
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if(!lists || lists.length == 0) return null;
  let arr = [];
  let res = new ListNode(0);
  lists.forEach(list => {
      let cur = list;
      while(cur){
          arr.push(cur.val);
          cur = cur.next;
      }
  })
  let cur = res;
  arr.sort((a,b) => a-b).forEach(val => {
      let node = new ListNode(val);
      cur.next = node;
      cur = cur.next;
  })
  return res.next;
};




