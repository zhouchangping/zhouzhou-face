// 闭包：闭包是指那些能够访问自由变量的函数。闭包 = 函数 + 函数能够访问的自由变量；《JavaScript权威指南》中就讲到：从技术的角度讲，所有的JavaScript函数都是闭包。
// 从实践角度：以下函数才算是闭包：即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）在代码中引用了自由变量
// 可以在内部函数访问到外部变量


// 函数执行分为两个阶段： 预编译和执行阶段
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

var foo = checkscope();
console.log(foo()); // local scope


var y = (function () {
  var foo = 0;
  function y() {
    y.prototype.bar = function bar() {
      return foo;
    }
  }
  return y;
}());
console.log(foo) // undefined;