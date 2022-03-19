// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
function Node(val) {
    this.val = val;
    this.next = null;
}
// function LinkedList() {
//   var Node = function(element){
//       this.element = element;
//       this.next = null;
//   };
//   var length = 0;//链表长度
//   var head = null;//第一个节点
//   this.append = function(element){
//       var node = new Node(element),
//           current;
//       if (head === null){ //列表为空
//           head = node;
//       } else { //列表不为空
//           current = head; //现在只知道第一项head
//           while(current.next){ //找到列表的最后一项
//               current = current.next;
//           }
//           //建立链接
//           current.next = node;
//       }
//       length++; //更新列表长度
//   };
//   this.insert = function(position, element){
//       //检查越界值
//       if (position >= 0 && position <= length){
//           var node = new Node(element),
//               current = head,
//               previous,
//               index = 0;
//           if (position === 0){ //在第一个位置添加
//               node.next = current;
//               head = node;
//           } else { //在中间或者尾部添加
//               while (index++ < position){
//                   previous = current;
//                   current = current.next;
//               }
//               node.next = current; //先连上添加的节点
//               previous.next = node; //再断开之前的连接
//           }
//           length++; 
//           return true;
//       } else {
//           return false;
//       }
//   };
//   this.removeAt = function(position){
//       if (position > -1 && position < length){
//           var current = head,
//               previous,
//               index = 0; //用来迭代列表，直到到达目标位置
//           if (position === 0){ //移除第一项
//               head = current.next;
//           } else { //移除中间或者尾部最后一项
//               while (index++ < position){
//                   previous = current;
//                   current = current.next;
//               }
//               //连接前一项和后一项，跳过当前的项，相当于移除了当前项
//               previous.next = current.next;
//           }
//           length--;
//           return current.element;
//       } else {
//           return null;
//       }
//   };
//   this.remove = function(element){
//       var index = this.indexOf(element);
//       return this.removeAt(index);
//   };
//   this.indexOf = function(element){
//       var current = head,
//           index = 0;
//       while (current) {
//           if (element === current.element) {
//               return index;
//           }
//           index++; //记录位置
//           current = current.next;
//       }
//       return -1;
//   };
//   this.isEmpty = function() {
//       return length === 0;
//   };
//   this.size = function() {
//       return length;
//   };
//   this.getHead = function(){
//       return head;
//   };
//   this.toString = function(){
//       var current = head,
//           string = '';
//       while (current) {
//           string += current.element;//拼接
//           current = current.next;
//       }
//       return string;
//   };
//   this.print = function(){
//       console.log(this.toString());
//   };
// }

var addTwoNumbers = function(l1, l2) {
  let node = new Node('head');
  let temp = node;//哑结点
  let add = 0;//是否进一
  let sum = 0;//新链表当前未取余的值 = 链表1值 + 链表2值 + add;

  //遍历，直到最长的都为空
  while(l1 || l2){
      sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
      console.log(sum)
      temp.next = new Node(sum % 10);//取余则为新链表的值
      temp = temp.next;
      add = sum >= 10 ? 1 : 0;
      console.log(add)
      l1 && (l1 = l1.next);
      l2 && (l2 = l2.next);
  }
  add && (temp.next = new Node(add));
  // console.log(add)
  // console.log(temp.next)
  // console.log(node)
  return node.next;
};
let root1 = new Node(3);
let l1 = new Node(4)
let l11 = new Node(2)

let root2 = new Node(4);
let l2 = new Node(6)
let l21 = new Node(5)
root1.next = l1;
l1.next = l11
root2.next = l2;
l2.next = l21;
console.log(root1)
console.log(addTwoNumbers(root1, root2))
