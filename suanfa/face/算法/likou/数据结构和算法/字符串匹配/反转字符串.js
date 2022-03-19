function a(s) {
  let len = s.length;
  for (let i = 0; i < len; i++) {
    let temp = '';
    if (i <= Math.floor(len/2)) {
      temp = s[i];
      s[i] = s[len - i - 1];
      console.log(len - i - 1);
      s[len - i - 1] = temp;
      console.log(s[len - i - 1]);
    }
  }
  return s;
}

// 方法一：双指针
function b(s, left, right) {
  if (left <= right) {
    if (left >= right) return;
    let temp = s[left];
    s[left++] = s[right];
    s[right--] = temp;
    b(s, left, right);
  }
}

function c(s) {
  let i = 0,
  x = s.length -1;
  while (i < x) {
    let temp = s[i];
    s[i] = s[x];
    s[x] = temp;
    i++
    x--
  }
  return s;
}

let str = 'abcde';
const result = b(str, 0, str.length - 1)
// const result = c(str)
// const result = a([1, 2, 3, 4, 5])
console.log(str)