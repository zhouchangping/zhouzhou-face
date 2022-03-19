
// Object.defineProperty(obj(要定义属性的对象。), prop(要定义或修改的属性的名称或 Symbol), descriptor(要定义或修改的属性描述符))
// https://blog.csdn.net/getTheCheeseOfGod/article/details/92411642

let o = {}
let obj = Object.defineProperty(o, 'prop', {
  configurable: false, // 且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
  enumerable: false, // 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。默认为 false。
  writable: true, // 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变。默认为 false。
  value: "zhou" // 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
});
console.log(obj)
// delete obj.prop; // 报错 configurable: false, 不可删除
Object.defineProperty(o, 'prop', { // configurable: false, 报错，当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，
  value: "zhou2" // 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
});
// obj.prop = 'hahah'
console.log(obj) // true: haha, false: zhou
// 对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。数据描述符是一个具有值的属性，该值可以是可写的，也可以是不可写的。
// 存取描述符是由 getter 函数和 setter 函数所描述的属性 
