/*
 * @Author: zhouchangping
 * @Date: 2021-07-02 16:07:56
 * @LastEditTime: 2022-01-19 17:07:34
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/进制.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
function baseConverter2(number, base) {
  if (base < 2 && base > 36) {
    throw new Error("base argument must between 2 and 36")
  }
  if (!Number.isInteger(number)) {
    throw new Error("目前不支持小数转化");
  }
  if (number === 0) {
    return 0;
  }
  const arr = [];
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let neg = "";
  if (number < 0) {
    neg = "-";
    number = Math.abs(number);
  }
  while(number) {
    res = Math.floor(number % base);
    console.log(res, 'res')
    arr.unshift(digits[res]);
    number = Math.floor(number/ base)
    console.log(number, 'number---')
  }
  arr.unshift(neg);
  return arr.join("")
}
console.log(baseConverter2(5, 2))


var names = [1,2,3,4,5]
names.unshift(0)
console.log(names)