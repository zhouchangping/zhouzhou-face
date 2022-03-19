// // https://juejin.im/post/5bcb2e295188255c55472db0
// // 原型链继承
// function SuperType() {
//   this.property = true;
// }

// SuperType.prototype.getSuperValue = function() {
//   return this.property;
// }

// function SubType() {
//   this.subproperty = false;
// }

// // 这里是关键，创建SuperType的实例，并将该实例赋值给SubType.prototype
// SubType.prototype = new SuperType(); 

// SubType.prototype.getSubValue = function() {
//   return this.subproperty;
// }

// var instance = new SubType();
// console.log(instance.getSuperValue()); // true

// // 缺点：多个实例对引用类型的操作会被篡改。
// function SuperType(){
//   this.colors = ["red", "blue", "green"];
// }
// function SubType(){}

// SubType.prototype = new SuperType();

// var instance1 = new SubType();
// instance1.colors.push("black");
// console.log(instance1.colors); //"red,blue,green,black"

// var instance2 = new SubType(); 
// console.log(instance2.colors); //"red,blue,green,black"






// // 借用构造函数: 使用父类的构造函数来增强子类实例，等同于复制父类的实例给子类（不使用原型）
// function  SuperType(){
//   this.color=["red","green","blue"];
// }
// function  SubType(){
//   //继承自SuperType
//   SuperType.call(this);
// }
// var instance1 = new SubType();
// instance1.color.push("black");
// console.log(instance1.color);//"red,green,blue,black"

// var instance2 = new SubType();
// console.log(instance2.color);//"red,green,blue"
// // 缺点：只能继承父类的实例属性和方法，不能继承原型属性/方法；无法实现复用，每个子类都有父类实例函数的副本，影响性能





// 组合: 原型链实现对原型属性和方法的继承，用借用构造函数技术来实现实例属性的继承。
// function SuperType(name){
//   console.log(1231)
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function(){
//   console.log(this.name);
// };

// function SubType(name, age){
//   // 继承属性
//   // 第二次调用SuperType()
//   SuperType.call(this, name);
//   // this.name = name; // 以这个为最后
//   this.age = age;
// }

// // 继承方法
// // 构建原型链
// // 第一次调用SuperType()
// SubType.prototype = new SuperType();  // 给SubType.prototype上添加name和color
// // 重写SubType.prototype的constructor属性，指向自己的构造函数SubType
// SubType.prototype.constructor = SubType; 
// SubType.prototype.sayAge = function(){
//     console.log(this.age);
// };

// var instance1 = new SubType("Nicholas", 29);
// instance1.colors.push("black");
// console.log(instance1.colors); //"red,blue,green,black"
// instance1.sayName(); //"Nicholas";
// instance1.sayAge(); //29
// console.log(instance1.name)
// console.log('----------')

// var instance2 = new SubType("Greg", 27);
// console.log(instance2.colors); //"red,blue,green"
// instance2.sayName(); //"Greg";
// instance2.sayAge(); //27
// console.log(instance2.name)
// 缺点：组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法。调用了两次SuperType




// // 原型式继承: 利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型。
// function object(obj){
//   function F(){}
//   F.prototype = obj;
//   return new F();
// }
// var person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"]
// };

// var anotherPerson = object(person);
// anotherPerson.name = "Greg";
// anotherPerson.friends.push("Rob");

// var yetAnotherPerson = object(person);
// yetAnotherPerson.name = "Linda";
// yetAnotherPerson.friends.push("Barbie");

// console.log(person.friends);   //"Shelby,Court,Van,Rob,Barbie"
// // 缺点： 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。无法传递参数




// 寄生式继承: 在原型式继承的基础上，增强对象，返回构造函数
// function createAnother(original){
//   var clone = object(original); // 通过调用 object() 函数创建一个新对象
//   clone.sayHi = function(){  // 以某种方式来增强对象
//     alert("hi");
//   };
//   return clone; // 返回这个对象
// }
// var person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"]
// };
// var anotherPerson = createAnother(person);
// anotherPerson.sayHi(); //"hi"
// // 缺点：原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。无法传递参数





// 寄生组合式继承: 结合借用构造函数传递参数和寄生模式实现继承
// 优点：这个例子的高效率体现在它只调用了一次SuperType 构造函数，并且因此避免了在SubType.prototype 上创建不必要的、多余的属性。于此同时，原型链还能保持不变；因此，还能够正常使用instanceof 和isPrototypeOf()
function inheritPrototype(subType, superType){
  var prototype = Object.create(superType.prototype); // 创建对象，创建父类原型的一个副本
  prototype.constructor = subType;                    // 增强对象，弥补因重写原型而失去的默认的constructor 属性
  subType.prototype = prototype;                      // 指定对象，将新创建的对象赋值给子类的原型
}

// 父类初始化实例属性和原型属性
function SuperType(name){
  console.log('SuperType')
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
  alert(this.name);
};

// 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
function SubType(name, age){
  SuperType.call(this, name);
  this.age = age;
}

// 将父类原型指向子类
inheritPrototype(SubType, SuperType);

// 新增子类原型属性
SubType.prototype.sayAge = function(){
  alert(this.age);
}

var instance1 = new SubType("xyc", 23);
var instance2 = new SubType("lxy", 23);

instance1.colors.push("2"); // ["red", "blue", "green", "2"]
instance1.colors.push("3"); // ["red", "blue", "green", "3"]




// es6
class Rectangle {
  // constructor
  constructor(height, width) {
      this.height = height;
      this.width = width;
  }
  
  // Getter
  get area() {
      return this.calcArea()
  }
  
  // Method
  calcArea() {
      return this.height * this.width;
  }
}
const rectangle = new Rectangle(10, 20);
console.log(rectangle.area);
// 继承
class Square extends Rectangle {

  constructor(length) {
    super(length, length);
    
    // 如果子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }
}

const square = new Square(10);
console.log(square.area);




// function _inherits(subType, superType) {
  
//   // 创建对象，创建父类原型的一个副本
//   // 增强对象，弥补因重写原型而失去的默认的constructor 属性
//   // 指定对象，将新创建的对象赋值给子类的原型
//   subType.prototype = Object.create(superType && superType.prototype, {
//       constructor: {
//           value: subType,
//           enumerable: false,
//           writable: true,
//           configurable: true
//       }
//   });
  
//   if (superType) {
//       Object.setPrototypeOf 
//           ? Object.setPrototypeOf(subType, superType) 
//           : subType.__proto__ = superType;
//   }
// }




