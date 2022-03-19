/*
 * @Author: zhouchangping
 * @Date: 2021-12-07 16:18:06
 * @LastEditTime: 2021-12-10 14:40:57
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/likou/数据结构和算法/腾讯/ 环形链表 II.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
/**
 * @description: 
 * @param {*} head
 * @return {*}
 */
var detectCycle = function (head) {
  var visited = new Set();
  while (head !== null) {
    if (visited.has(head)) {
      return head;
    } else {
      visited.add(next)
      head = head.next;
    }
  }
  return  null;
}