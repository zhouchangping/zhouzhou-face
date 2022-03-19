
// function foo() {
//   console.log(a); // a = 1 -> a is not defined      var a = 1 -> undefined
//   a = 1; // 这是因为函数中的 "a" 并没有通过 var 关键字声明，所有不会被存放在 AO 中。
// }

// foo(); 
// console.log(a) // a = 1 -> 1      var a = 1 ->a is not defined
 
// function bar() {
//   a = 1; 
//   console.log(a);
// }

// // var a = 3; // 提升var a; ------ a = 3;  undefined
// // a = 3; // a is not defined

// bar(); // ???

console.log('----------')

console.log(foo); // function

function foo(){ // 这是因为在进入执行上下文时，首先会处理函数声明，其次会处理变量声明，如果如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。
    console.log("foo");
}

var foo = 1;