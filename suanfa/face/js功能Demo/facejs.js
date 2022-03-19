// 防抖： 事件被触发，n秒后执行，如果n秒内又被触发，则重新记时: 多次点击按钮，搜索
function debounce (func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}
function test () {
  alert(123)
}
let funName = debounce(test, 5)

// 节流：单位时间内只触发一次，多次触发，只有一次有效。拖拽
function throttle (func, wait) {
  let previous = 0;
  let context, args;
  return function () {
    let now = +new Date();
    context = this;
    args = argument;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}

// add(1)(2)(3)
function add (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

function Curry (fn, args) {
  if (args.length > fn.length) {
    fn(...args);
  }
  return function () {
    let argss = [...args, ...arguments];
    if (argss.length > fn.length) {
      fn(...argss);
    } else {
      return Curry(fn, argss)
    }
  }
}