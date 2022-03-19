// 1、 遍历单链表两次，第一次获取链表总长度，第二次寻找倒数第K个元素就很简单了。但是该方法需要遍历两次链表。
// 2、 遍历单链表并记录长度，将每个元素存入顺序表中，然后通过下标获取倒数第k个元素。该方法只需遍历一次链表，但是需要额外的存储空间。
// 3、 既然是倒数第k个元素，那么只要从后往前数k个不就行了。但是又是单链表，获取不到前驱节点。不过，并不需要获取每一个元素的前驱节点，只需要定义两个指针，一个指向最后一个元素，另一个在它前面K个位置即可。而如何实现呢？

// 一开始，两个指针都指向第一个元素，但是如果它们之间的距离小于K，那么只移动第一个指针。而当他们之间的距离等于K后，两个指针一起后移，这样在第一个指针指向链表最后一个元素的时候，第二个指针就指向的是倒数第K个元素。
// 只需要一次遍历，不需要额外空间。
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function getKthFromEnd(head, k) {
  let first = head;
  let second = head;
  let i = 0;
  while (first != null) {
    if (i < k) {
      first = first.next;
    } else {
      first = first.next;
      second = second.next;
    }
    i++;                                                                       
    return second;
  }
}