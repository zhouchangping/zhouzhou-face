/*
 * @Author: zhouchangping
 * @Date: 2020-06-29 20:56:31
 * @LastEditTime: 2022-01-19 22:48:53
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/newObj.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 返回obj 
// 判断是obj 还是。。。
function Otaku (name, age) {
  this.name = name;
  this.age = age;
  this.habit = 'Games';
  return {
    name: 'zhouzhou',
    age: '30',
    habit: 'haha',
    length: 1
  }
}
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
  console.log('I am ' + this.name);
}

// 用new Object() 的方式新建了一个对象 obj
// 取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
// 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
// 使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
// 返回 obj
// function objectFactory() {
//   var obj = new Object(),
//   Constructor = [].shift.call(arguments); // 获取构造函数
//   obj.__proto__ = Constructor.prototype; // 实例的__proto__ 属性会指向构造函数的 prototype,使其拥有构造函数的prototype上的方法
//   Constructor.apply(obj, arguments); // obj拥有name,age, habit
//   return obj;
// };

// 第二版的代码 返回值，及返回还需要判断返回的值是不是一个对象，如果是一个对象，我们就返回这个对象，如果没有，我们该返回什么就返回什么
function objectFactory() {
  var obj = new Object(),
  Constructor = [].shift.call(arguments); // otaku
  obj.__proto__ = Constructor.prototype; // 实例的__proto__ 属性会指向构造函数的 prototype,使其拥有构造函数的prototype上的方法
  // SubType.prototype = new SuperType();
  // fBound.prototype = this.prototype;
  var ret = Constructor.apply(obj, arguments); // obj拥有name,age, habit
  return typeof ret === 'object' ? ret : obj;
};


var person = objectFactory(Otaku, 'Kevin', '18')
console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60
person.sayYourName(); // I am Kevin

function objectFactory() {
  let obj = new Object();
  let constructor = [].shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  var ret = constructor.apply(obj, arguments)
  return typeof ret === 'object' ? ret : obj;
}
