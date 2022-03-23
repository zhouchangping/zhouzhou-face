function LinkedList() {
  var Node = function (element) {
          this.element = element;
          this.next = null;
      }, //节点
      length = 0, //长度
      head = null; //头部
//动态原型模式创建原型方法
  if (typeof LinkedList.prototype.append != 'function') {
      /*
      在尾部添加新的项。
      */
      LinkedList.prototype.append = function () {
          var arr = arguments,
              node,
              current;
          //添加内容不能为空
          if (!arr) {
              return false;
          } else {
              node = new Node(arr[0]);
              //如果是首节点，直接建立连接
              if (head == null) {
                  head = node;
              } else {
                  //否则从首节点开始
                  current = head;
                  //循环链表，直到找到最后一个节点
                  while (current.next) {
                      current = current.next;
                  }
                  //尾节点指向新的节点
                  current.next = node;
              }
              length++; //更新长度
              //循环添加节点
              for (var i = 1; i < arr.length; i++) {
                  LinkedList.prototype.append(arr[i]);
              }
          }
      }
      /*
      在指定位置插入新的项
      */
      LinkedList.prototype.insert = function (index, element) {
          if (!/^[0-9]*[1-9][0-9]*$/.test(index)) {
              return new TypeError("插入的位置必须为正整数")
          }
          if (!element) {
              return new TypeError("插入内容不能为空")
          }
          //检查index越界情况
          if (index >= 0 && index <= length) {
              var node = new Node(element),
                  current = head, //当前节点
                  previous, //前一个节点
                  position = 0; //当前位置
              if (index === 0) {
                  //在第一个位置插入
                  node.next = current; //新的节点指向原首节点
                  head = node; //切断head与原首节点的联系，新节点成为首节点
              } else {
                  //找到要插入位置
                  while (position++ < index) {
                      previous = current; //前一个节点改为当前节点
                      current = current.next; //当前节点更改为下个节点
                  }
                  //完成插入
                  node.next = current;
                  previous.next = node;
              }
              //更新长度
              length++;
              //插入成功返回element
              return element;
          } else {
              return new Error("index越界，不能正常插入！index必须为正整数，且不能超出链表长度");
          }
      }
      /*
      返回元素在链表中的索引
      */
      LinkedList.prototype.indexOf = function (element) {
          var current = head, //当前节点
              index = 0; //记录当前位置
          //循环比较项的元素
          while (current.element !== element && current.next !== null) {
              current = current.next;
              index++;
          }
          //如果找到元素，返回索引，否则返回-1
          if (current.element === element) {
              return index;
          } else {
              return -1;
          }
      }
      /*
      移除指定位置的项
      */
      LinkedList.prototype.removeAt = function (index) {
          if (!/^[0-9]*[0-9][0-9]*$/.test(index) || index > length - 1) {
              return new Error("删除的位置必须为零或正整数且不能超过链表长度")
          }
          if (head == null) {
              return new Error("链表长度为空！无法删除");
          }
          var current = head, //当前的节点
              position = 0, //当前的位置
              previous, //前一个节点
              content; //节点内容
          //如果是首节点，则把下一个节点当成首节点
          if (index === 0) {
              content = current.element;
              current = current.next;
              head = current;
          } else {
              //跳转到需要删除的位置
              while (position++ < index) {
                  previous = current; //当前节点变成上个节点
                  current = current.next; //下个节点变成当前节点
              }
              previous.next = current.next; //跳过当前节点
              content = current.element; //获取节点内容
              current = null; //删除当前节点
          }
          length--; //更新长度
          return content; //返回删除的节点内容
      }

      /*
      移除包含指定元素的项
      */
      LinkedList.prototype.remove = function (element) {
          var index = LinkedList.prototype.indexOf(element);
          if (index === -1) {
              return new Error("链表中不包含指定元素的项");
          }
          return LinkedList.prototype.removeAt(index)

      }
      /*
     链表是否为空
      */
      LinkedList.prototype.isEmpty = function () {
          return length === 0;
      }
      /*
     链表的长度
      */
      LinkedList.prototype.size = function () {
          return length;
      }
      /*
     清空链表
      */
      LinkedList.prototype.clear = function () {
          head = null;//删除首节点与后续节点的联系。后续节点会被JavaScript垃圾回收机制回收
          length = 0;//更新长度
      }
      /*
    输出链表
     */
      LinkedList.prototype.print = function () {
          var current = head, //首节点
              arr = []; //用于存储项的内容的数组
          while (current) {
              arr.push(current.element);
              current = current.next;
          }
          // console.log(arr);
          return head===null?"链表为空":arr;
      }
      /*
链表反转(迭代)
*/
      LinkedList.prototype.reverseList1 = function () {
          if (head === null || head.next === null) {    // 链表为空或只有一个节点时，不用反转
              return head;
          }
          var p = head.next;
          head.next = null;    // 让原本的head变为尾节点
          var temp;    // 临时指针
          while (p !== null) {
              temp = p.next;
              p.next = head;
              head = p;
              p = temp;
          }
          return head;
      }
      /*
链表反转(递归) 有问题！！！谨慎使用
*/
      LinkedList.prototype.reverseList2 = function () {

          if (head === null || head.next === null) {
              return head;
          }

          var new_head = reverseList(head.next);  // 反转后的头节点
          head.next.next = head;                  // 将反转后的链表的尾节点与当前节点相连
          head.next = null;
      }
  }
}

var lis = new LinkedList();
lis.append(1, 2, 3, 4, 5, 6);
console.log(lis.print());
console.log(lis.reverseList1());
console.log(lis.print());
console.log(lis.reverseList1());
console.log(lis.print());
