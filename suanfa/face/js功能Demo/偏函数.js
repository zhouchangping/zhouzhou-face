// 偏函数，固定函数的某一个或几个参数，返回一个新的函数来接收剩下的变量参数。
function func (fn, ...args) {
  return function (...args2) {
    return fn.call(null, ...args, ...args2);
  }
}