// // 工程模式
// function createPerson(name) {
//   var o = new Object();
//   o.name = name;
//   o.getName = function () { // 无法知道类型
//       console.log(this.name);
//   };

//   return o;
// }

// var person1 = createPerson('kevin');



// // 构造函数
// function Person(name) {
//   this.name = name;
//   this.getName = function () { // 多次生成
//       console.log(this.name);
//   };
// }
// var person1 = new Person('kevin');



// // 构造优化
// function Person(name) {
//   this.name = name;
//   this.getName = getName;
// }

// function getName() { // 不是封装
//   console.log(this.name);
// }
// var person1 = new Person('kevin');



// 原型模式
// function Person(name) { // 1. 所有的属性和方法都共享 2. 不能初始化参数

// }

// Person.prototype.name = 'keivn';
// Person.prototype.getName = function () {
//     console.log(this.name);
// };

// var person1 = new Person();



// 原型模式优化
function Person(name) {

}

Person.prototype = { // 重写了原型，丢失了constructor属性,
    // constructor: Person,
    name: 'kevin',
    getName: function () {
        console.log(this.name);
    }
};
var person1 = new Person();
console.log(Person.prototype.constructor) // Object
console.log(person1.constructor)




// 
console.log(typeof person1)