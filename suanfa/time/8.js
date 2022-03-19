/**
 * 类： 数组模拟栈
 * prototype
 * 静态属性：static a = 2;
 * 公共属性：prototype.example = 2
 * 实例属性：a = 2 this.a = 2;定义在实例对象（ this ）上的属性。
 * name属性：
 * 方法：constructor 静态方法： static sum(){} 原型方法：sum() {}   实例方法： constructor(){this.sum = ()}
 * 共享原型对象: example1.__proto__ = example2.__proto__;
 * 子类 constructor 方法中必须有 super ，且必须出现在 this 之前
 */
class ArrayStack {
  items = new Array(5); // 顶部书写，不需要this,
  n = this.items.length; // 数组长度
  count = 0; // 当前数组内长度
  constructor() { // 初始化
  }
  push(item) {
    if (this.count == this.n) {
      return false;
    }
    this.items[this.count] = item;
    console.log(this.items)
    ++this.count;
    return true;
  }
  pop() {
    if (this.count == 0) {
      return null;
    }
    let tmp = this.items[this.count - 1]
    delete this.items[this.count -1]
    --this.count;
    console.log(this.items)
    return tmp;
  }
}

let test = new ArrayStack()
let test1 = new ArrayStack()
test.push(1)
test.push(2)
test.pop()
test.push(2)


