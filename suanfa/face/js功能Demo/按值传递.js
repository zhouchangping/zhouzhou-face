// var value = 1;
// function foo(v) {
//     v = 2;
//     console.log(v); //2
// }
// foo(value);
// console.log(value) // 1

var a = 1;
var b = a;
b = 2;
console.log(a)

var obj = { // 
  name: 1
}
var obj4 = obj;
obj4.name = 2;
console.log(obj)


var obj1 = {
  value: 1
};
function foo1(o) {
  //  var o = o;
  o.value = 2; // var o = o;按地址传递，在原地地址上修改
  console.log(o.value); //2
}
foo1(obj1);
console.log(obj1.value) // 2


// 点的优先级大于等号 a.k3 => a和b= { k1: 1, k3: undefined}； 
// 等于号从右边开始执行，此时a = {k2: 2}; b还是{ k1: 1, k3: undefined}；  
// a.k3 = a;=>   a.k3 = undefined为一个新的地址变量,比如c = a.k3 = undefined。之后再将{k2: 2}赋值给a.k3;所以b = {k1: 1; k3: {k2: 2}}
// 对象以指针的形式进行存储，每个新对象都是一份新的存储地址
var a = { k1: 1}
var b = a;
a.k3 = a = {k2: 2}
// a.k3 = undefined;
console.log(a)
console.log(a.k3)
console.log(b)

// var a = {k: 1}
// var b = a;
// a = {k: 2} // a指向了新的地址，b地址还是老的
// console.log(b) //  {k: 1}



// var obj2 = {
//   value: 1
// };
// function foo2(o) {
//   // var o = o; 
//   o = 2; // 按地址传递，在新的复制出来的地址上修改  var o = 2;
//   console.log(o); //2
// }
// foo2(obj2);
// console.log(obj2.value) // 1