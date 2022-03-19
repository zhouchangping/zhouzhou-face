/*
 * @Author: zhouchangping
 * @Date: 2022-02-18 15:51:41
 * @LastEditTime: 2022-02-18 16:12:27
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/likou/数据结构和算法/栈/lru.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
var LRU = function (c) {
  this.c = c;
  this.map = new Map();
}
LRU.prototype.get = function (key) {
  if (this.map.has(key)) {
    let temp = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, temp);
    return temp;
  }
  return -1;
}
LRU.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  } else if (this.map.size >= this.c) {
    this.map.delete(this.map.keys().next().value);
  }
  this.map.set(key, value)
}