// call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法
// 使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined


// var foo = {
//   value: 1
// };

// function bar() {
//   // this = foo
//   console.log(this.value);
// }

// bar.call(foo); // 1


// var foo = {
//   value: 1,
//   bar: function() {
//       console.log(this.value)
//   }
// };
// foo.bar(); // 1
// 将函数设为对象的属性
// 执行该函数
// 删除该函数
// 第一版
Function.prototype.call2 = function(context) {
  // 首先要获取调用call的函数，用this可以获取
  context.fn = this;
  context.fn();
  delete context.fn;
}



// 第二版本 call 函数还能给定参数执行函数。
Function.prototype.call2 = function(context) {
  context.fn = this; // this = bar;
  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) { // 从第二个开始
      args.push(arguments[i]); // args.push('arguments[' + i + ']');
  }
  context.fn(...args ); // eval('context.fn(' + args +')'); es3
  delete context.fn;
}

// 第三版 this 参数可以传 null，当为 null 的时候，视为指向 window;函数是可以有返回值的！
Function.prototype.call3 = function (context) {
  var context = context || window;
  context.fn = this;

  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
      args.push('arguments[' + i + ']');
  }

  var result = eval('context.fn(' + args +')');

  delete context.fn
  return result;
}



Function.prototype.call = function (context) {
  let context = context || window;
  context.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    // args.push(arguments[i]);
    args.push('arguments[' + i +']');
  }
  // let result = context.fn(...args)
  let result = eval('context.fn('+args+')');
  delete context.fn;
  return result;
}


// 测试一下
var foo = {
  value: 1
};

// function bar(name, age) {
//   console.log(name)
//   console.log(age)
//   console.log(this.value);
// }

function bar(name, age) {
  return {
      value: this.value,
      name: name,
      age: age
  }
}


// bar.call2(foo, 'kevin', 18);

const result = bar.call3(foo, 'kevin', 18);
console.log(result)



// function Product(name, price) {
//   // this = Food
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
// }
// console.log(new Food('cheese', 5).name);
// expected output: "cheese"


