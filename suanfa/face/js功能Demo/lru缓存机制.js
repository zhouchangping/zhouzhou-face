/*
 * @Author: zhouchangping
 * @Date: 2021-11-18 14:35:47
 * @LastEditTime: 2022-03-07 19:11:41
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/lru缓存机制.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
}
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let tamp = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, tamp);
    return tamp;
  } else {
    return -1;
  }
}

LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key)
  }
  this.map.set(key, value);
  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value);
  }
}
LRUCache.prototype.mapA = function () {
  console.log(this.map)
}
let nes = new LRUCache(3);
nes.put(0, '0')
nes.put(1, '1')
nes.put(2, '2')
nes.get(0)
nes.put(3, '3')
nes.mapA()