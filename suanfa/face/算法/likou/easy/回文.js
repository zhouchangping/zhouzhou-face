// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
function a(x) {
  let re = 0;
  re = (x + '').split('').reverse().join('');
  return re == x;
}


function b(x) {
  if (x < 0) {
    return false;
  }
  x = String(x);
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== x[x.length -i-1]) {
      return false;
    }
  }
  return true;
}
let result = b(121)
console.log(result)