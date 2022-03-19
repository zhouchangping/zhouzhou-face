
// // es6 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes
// class Rectangle { // 类申明： 函数声明和类声明之间的一个重要区别是函数声明会提升，类声明不会。你首先需要声明你的类，然后访问它，否则像下面的代码会抛出一个ReferenceError：
//   // constructor
//   constructor(height, width) {
//       this.height = height; // 成员变量或实例属性
//       this.width = width;
//   }
  
//   // Getter
//   get area() { 
//       return this.calcArea()
//   }
  
//   // Method
//   calcArea() {
//       return this.height * this.width;
//   }
// }

// // 静态的或原型的数据属性必须定义在类定义的外面。
// Rectangle.staticWidth = 20;
// Rectangle.prototype.prototypeWidth = 25;


// const rectangle = new Rectangle(10, 20);
// console.log(rectangle.area);
// // 继承
// class Square extends Rectangle {

//   constructor(length) { // 构造函数
//     super(length, length);
    
//     // 如果子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
//     this.name = 'Square';
//   }

//   get area() {
//     return this.height * this.width;
//   }
// }

// const square = new Square(10);
// console.log(square.area);


// // 类表达式：一个类表达式是定义一个类的另一种方式。类表达式可以是具名的或匿名的。一个具名类表达式的名称是类内的一个局部属性，它可以通过类本身（而不是类实例）的name属性来获取。
// // 匿名类
// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name);
// // output: "Rectangle"

// // 具名类
// let Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name);
// // 输出: "Rectangle2"



// 类声明和类表达式的主体都执行在严格模式下。比如，构造函数，静态方法，原型方法，getter和setter都在严格模式下执行。



// 静态方法：
class Point {
  static publisher = "Levi Ding"; // 静态属性
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }

  get are() {
    return this.x;
  }

  set xare(arg) {
    this.x = arg
  }

  static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;

      return Math.hypot(dx, dy);
  }
}
Point.staticWidth = 20; // 静态属性


const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

p1.xare = 666; // 设置
console.log(p1.are) // 获取

console.log(Point.distance(p1, p2));
console.log(Point.publisher)
console.log(Point.staticWidth)