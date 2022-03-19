/*
 * @Author: zhouchangping
 * @Date: 2021-08-12 15:36:52
 * @LastEditTime: 2022-01-20 15:07:06
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/手写 instanceof 关键字.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
// 在javascript中，查看基本数据类型的类型可以用关键字typeof，但是如果是要验证一个引用数据类型的话，就需要用到关键字instanceof，instance就是实例的意思，那么这个关键字就是用于判断，某某对象是不是某某类的实例
// person2.__proto__ = Person.prototype;
function myInstanceOf(instance, Constructor) {
  if (typeof instance !== "object") {
    throw 'the instance must be object'
  }
  if (typeof Constructor !== "function") {
    throw 'the Constructor must be function'
  }
  let prototype = instance.__proto__;
  while (prototype) {
    if (!prototype.__proto__) {
      return false;
    } else if(prototype === Constructor.prototype) {
      return true;
    } else {
      prototype = prototype.__proto__;
    }
  }
}

