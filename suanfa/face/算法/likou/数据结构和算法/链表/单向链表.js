// 单向链表
function LinkedList() {
  var Node = function(element){
      this.element = element;
      this.next = null;
  };
  var length = 0;//链表长度
  var head = null;//第一个节点
  this.append = function(element){
      var node = new Node(element),
          current;
      if (head === null){ //列表为空
          head = node;
      } else { //列表不为空
          current = head; //现在只知道第一项head
          while(current.next){ //找到列表的最后一项
              current = current.next;
          }
          //建立链接
          current.next = node;
      }
      length++; //更新列表长度
  };
  this.insert = function(position, element){
      //检查越界值
      if (position >= 0 && position <= length){
          var node = new Node(element),
              current = head,
              previous,
              index = 0;
          if (position === 0){ //在第一个位置添加
              node.next = current;
              head = node;
          } else { //在中间或者尾部添加
              while (index++ < position){
                  previous = current;
                  current = current.next;
              }
              node.next = current; //先连上添加的节点
              previous.next = node; //再断开之前的连接
          }
          length++; 
          return true;
      } else {
          return false;
      }
  };
  this.removeAt = function(position){
      if (position > -1 && position < length){
          var current = head,
              previous,
              index = 0; //用来迭代列表，直到到达目标位置
          if (position === 0){ //移除第一项
              head = current.next;
          } else { //移除中间或者尾部最后一项
              while (index++ < position){
                  previous = current;
                  current = current.next;
              }
              //连接前一项和后一项，跳过当前的项，相当于移除了当前项
              previous.next = current.next;
          }
          length--;
          return current.element;
      } else {
          return null;
      }
  };
  this.remove = function(element){
      var index = this.indexOf(element);
      return this.removeAt(index);
  };
  this.indexOf = function(element){
      var current = head,
          index = 0;
      while (current) {
          if (element === current.element) {
              return index;
          }
          index++; //记录位置
          current = current.next;
      }
      return -1;
  };
  this.isEmpty = function() {
      return length === 0;
  };
  this.size = function() {
      return length;
  };
  this.getHead = function(){
      return head;
  };
  this.toString = function(){
      var current = head,
          string = '';
      while (current) {
          string += current.element;//拼接
          current = current.next;
      }
      return string;
  };
  this.print = function(){
      console.log(this.toString());
  };
}