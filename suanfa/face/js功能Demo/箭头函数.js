/*
 * @Author: zhouchangping
 * @Date: 2022-03-03 19:33:45
 * @LastEditTime: 2022-03-07 11:46:49
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/箭头函数.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 语法不同
// this的指向不同
//   Function.prototype.bind() 和 Function.prototype.apply() 的目的是改变函数 this 的指向，但是对箭头函数无效
//   箭头函数没有自己的this对象， 内部的this就是定义时上层作用域中的this，this 的取值取决于函数的调用（普通调用，方法调用，间接调用或者构造函数调用），而箭头函数不定义它的上下文，由函数定义时的作用域决定
//   箭头函数内部的this指向是固定的，相比之下，普通函数的this指向是可变的
//   箭头函数里面根本没有自己的this，而是引用外层的this
//   对于普通函数来说，内部的this指向函数运行时所在的对象，但是这一点对箭头函数不成立
//   普通函数可以作为构造函数，使用 new 关键字实例化。而箭头函数不可以，否则会抛出类型错误的异常,没有new.target
//   箭头函数没有自己的 arguments，一种替代方案就是使用扩展运算符,内部拿不到arguments
//   不可以使用yield命令，因此箭头函数不能用作 Generator 函数
//   除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target

  let one = 1;
  function greeting() {
    console.log(this, 'greeting')
  }
  greeting.call(one)
  let greeting1 = ()=> {
    console.log(this,   'greeting1')
  }
  greeting1.call(one)

  const obj = {
    x: 42,
    logThisX: function() {
      console.log(this.x, this);
    },
    logThisXArrow: () => {
      console.log(this.x, this);
    }
  };
  
  obj.logThisX();       //  42, Object {...}
  obj.logThisXArrow();  //  undefined, window



  function Person(name){
    this.name = name;
    this.say = () => {
      var name = "xb";
      return this.name; // this为箭头函数创建时的this
    }
  }
  var person = new Person("axuebin");
  console.log(person.say()); // axuebin


  const module = {
    x: 42,
    getX: function() {
      console.log(this.x, this) ;
    },
    getX2: ()=> {
      console.log(this.x, this) ;
    }
  };
  
module.getX();
module.getX2();
let mo = module.getX;
mo()



function foo() {
  setTimeout(() => { // setTimeout()的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到 100 毫秒后
    console.log('id:', this.id); // 42
  }, 100);
  setTimeout(function() { // setTimeout()的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到 100 毫秒后
    console.log('id:', this.id); // 21
  }, 100);
}

var id = 21;

foo.call({ id: 42 });


function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
    // console.log(this.s2++)
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);



function foo() {
  setTimeout(() => {
    console.log('args:', arguments);
    // console.log('super:', super);
    console.log('new.target:', new.target);
  }, 100);
}

foo(2, 4, 6, 8)