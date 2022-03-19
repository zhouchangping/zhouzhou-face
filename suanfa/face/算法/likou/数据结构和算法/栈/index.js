/*
 * @Author: zhouchangping
 * @Date: 2020-12-10 17:22:45
 * @LastEditTime: 2022-02-16 10:41:48
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/likou/数据结构和算法/栈/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

// 最小栈

// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。


// 当一个元素要入栈时，我们取当前辅助栈的栈顶存储的最小值，与当前元素比较得出最小值，将这个最小值插入辅助栈中；
// 当一个元素要出栈时，我们把辅助栈的栈顶元素也一并弹出；
// 在任意一个时刻，栈内元素的最小值就存储在辅助栈的栈顶元素中。


var MinStack = function() {
  this.x_stack = [];
  this.min_stack = [Infinity];
};

MinStack.prototype.push = function(x) {
  this.x_stack.push(x);
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

MinStack.prototype.pop = function() {
  this.x_stack.pop();
  this.min_stack.pop();
};

MinStack.prototype.top = function() {
  return this.x_stack[this.x_stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.min_stack[this.min_stack.length - 1];
}
