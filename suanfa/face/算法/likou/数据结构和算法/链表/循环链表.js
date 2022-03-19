
// 循环链表：链表的区别在于最后一个元素指向下一个元素的引用不是null，而是指向第一个元素（head）
function CircularLinkedList() {
  var Node = function(element){
      this.element = element;
      this.next = null;
  };
  var length = 0;
  var head = null;
  this.append = function(element){
      var node = new Node(element),
          current;
      if (head === null){ //列表为空
          head = node;
      } else {
          current = head;
          while(current.next !== head){ //最后一个元素将是head，而不是null
              current = current.next;
          }
          current.next = node; //建立连接
      }
      node.next = head; //首尾相连起来变成一个环列表
      length++; 
  };
  this.insert = function(position, element){
      if (position >= 0 && position <= length){
          var node = new Node(element),
              current = head,
              previous,
              index = 0;
          if (position === 0){ //在第一项
              node.next = current;
              while(current.next !== head){ 
                  current = current.next;
              }
              head = node;
              current.next = head;
          } else {
              while (index++ < position){
                  previous = current;
                  current = current.next;
              }
              node.next = current;
              previous.next = node;
              if (node.next === null){ //在最后一个元素更新
                  node.next = head;
              }
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
              index = 0;
          if (position === 0){
              while(current.next !== head){ 
                  current = current.next;
              }
              head = head.next;
              current.next = head; //更新最后一项
          } else { 
              while (index++ < position){
                  previous = current;
                  current = current.next;
              }
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
          index = -1;
      if (element == current.element){ //检查第一项
          return 0;
      }
      index++;
      while(current.next !== head){ //检查列表中间
          if (element == current.element){
              return index;
          }
          current = current.next;
          index++;
      }
      if (element == current.element){ //检查最后一项
          return index;
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
          s = current.element;
      while(current.next !== head){
          current = current.next;
          s += ', ' + current.element;
      }
      return s.toString();
  };
  this.print = function(){
      console.log(this.toString());
  };
}
