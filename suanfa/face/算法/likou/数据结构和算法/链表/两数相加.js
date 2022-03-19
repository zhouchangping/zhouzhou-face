// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let node = new ListNode('head');
  let temp = node;//哑结点
  let add = 0;//是否进一
  let sum = 0;//新链表当前未取余的值 = 链表1值 + 链表2值 + add;

  //遍历，直到最长的都为空
  while(l1 || l2){
      sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
      temp.next = new ListNode(sum % 10);//取余则为新链表的值
      temp = temp.next;
      add = sum >= 10 ? 1 : 0;
      l1 && (l1 = l1.next);
      l2 && (l2 = l2.next);
  }
  add && (temp.next = new ListNode(add));
  return node.next;
};