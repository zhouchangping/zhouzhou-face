/** new操作符号作了什么， 并实现一下 
 *  1、 new运算符创建了一个用户定义的对象类型的实例，或具有构造函数的内置对象的实例。空的javascript 对象{}
 */

function create(Con, arg) {
  // 创建一个空的对象。
  let obj = Object.create(null);
  // 将空的对象指向构造函数的原型链
  Object.setPrototypeOf(obj, Con.prototype);
  // obj绑定到构造函数上，便可以访问构造函数中的属性，即obj.Con(args);
  let result = Con.apply(obj, args);
  // 如果返回的result，是一个对象则返回new方法失效，否则返回obj;
  return result instanceof Object ? result : obj;
}

function company(name, address) {
  this.name = name;
  this.address = address;
}
var company1 = create(company, 'yier', 'er')
console.log(company1);