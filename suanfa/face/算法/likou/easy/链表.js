let Node = function (element) {
  this.element = element;
  this.next = null;
};
class LinkedList {
  constructor() {
      this.length = 0;
      this.head = null;
  }

  append (element) {} // 向链表中添加节点

  insert (position, element) {} // 在链表的指定位置插入节点

  removeAt (position) {} // 删除链表中指定位置的元素，并返回这个元素的值

  remove (element) {} // 删除链表中对应的元素

  indexOf (element) {} // 在链表中查找给定元素的索引

  getElementAt (position) {} // 返回链表中索引所对应的元素

  isEmpty () {} // 判断链表是否为空

  size () {} // 返回链表的长度

  getHead () {} // 返回链表的头元素

  clear () {} // 清空链表

  toString () {} // 辅助方法，按指定格式输出链表中的所有元素，方便测试验证结果
}
