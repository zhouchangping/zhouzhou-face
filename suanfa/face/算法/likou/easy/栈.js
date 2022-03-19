function Minstack() { // 栈+辅助数组
  this.xStack = [];
  this.minStack = [];
}

Minstack.prototype.push = function(x) {
  this.xStack.push(x);
  this.minStack.push(Math.min(this.minStack[this.minStack.lenght -1], x));
}
Minstack.prototype.pop = function() {
  this.xStack.pop();
  this.minStack.pop()
}
Minstack.prototype.top = function() {
  return this.xStack[this.xStack.length -1]
}
Minstack.prototype.getMin = function() {
  return this.minStack[this.minStack -1]
}