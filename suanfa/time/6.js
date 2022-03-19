/**
 * 反转链表
 * 从第一个null和head开始，一个个转化next, 
 * 可想：保留第三个，
 * 转化第一第二个，
 * 改变第一第二个的next指向
 * 返回pre
 */
var obj3 = {
  name: 'obj3',
  next: null
}
var obj2 = {  
  name: 'obj2',
  next: obj3
}
var obj1 = {
  name: 'obj1',
  next: obj2
}

// 迭代法：循环
// function reverse(head) { 
//   if(!head || !head.next) {
//     return head;
//   }
//   let pre = null, cur = head;
//   while(cur) {
//     let tmp = cur.next; // 保留下一个 用于cur
//     cur.next = pre; // 把pre转化成cur.next 转化方向
//     pre = cur; // 替换cur为pre
//     console.log(pre)
//     cur = tmp; // 替换下一个为cur，继续后续cur pre处理
//     console.log(cur)
//     console.log('................')
//   }
//   head = pre;
//   return head; // 最后一个cur为nullr                                                                                                                                                                                                                         
// }
// let result = reverse(obj1)
// console.log(result)

// 方法二： 递归法：方法
// function reverse(head) {
//   if (!head || !head.next) { 
//     return head;
//   }
//   var next = head.next; // 一： obj2->  next = obj3    // 二： obj1 -> next = obj2
//   console.log(next) // 一，二： obj2, obj3
//   // console.log('............')
//   // console.log(next)
//   // 递归反转
//   var reverseHead = reverse(next); // obj3 , obj2
//   console.log('............')
//   console.log(next)
//   console.log(reverseHead)
//   // // 一：变更指针,由obj3转向obj2 二：obj2转向obj1
//   next.next = head;
//   head.next = null;
//   return reverseHead // obj3 obj3 始终都是保留最后一个
// }
// let result = reverse(obj1)
// console.log('............')
// console.log(result)

function resverse(head) {
  if (!head || !head.next) {
    return head;
  }
  var next = head.next;
  var reverseHead = reverse(next);
  next.next = head;
  head.next = null;
}