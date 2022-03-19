/*
 * @Author: zhouchangping
 * @Date: 2021-11-30 10:50:15
 * @LastEditTime: 2022-03-02 14:35:28
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/likou/数据结构和算法/腾讯/有效的括号.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

var isValid = function (s) {
  let map = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')']
  ]);
  console.log(map.keys());
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else if (map.get(stack.pop()) !== s[i]) {
      return false;
    }
    return true;
  }
}
console.log(isValid('{{}}'))