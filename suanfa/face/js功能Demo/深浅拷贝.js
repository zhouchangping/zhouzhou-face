/*
 * @Author: zhouchangping
 * @Date: 2020-07-01 10:58:19
 * @LastEditTime: 2022-01-19 17:35:57
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/深浅拷贝.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 浅拷贝
var shallowCopy = function(obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      newObj[i] = obj[i]
    }
  }
  return newObj;
}

// 深拷贝
var deepCopy = function(obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      newObj[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
    }
  }
  return newObj;
}

// slice
// concat
// Object.assign
// ...
