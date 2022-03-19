/*
 * @Author: zhouchangping
 * @Date: 2021-05-11 16:23:33
 * @LastEditTime: 2022-02-14 14:42:11
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/发布订阅.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
class Observe {
  constructor () {
    this.caches = {}
  }
  on (eventName, fn) {
    this.caches[eventName] = this.caches[eventName]  || [];
    this.caches[eventName].push(fn);

  }
  emit (eventName, data) {
    if (this.caches[eventName]) {
      this.caches[eventName].forEach(element => {
        element(data);
      });
    }
  }
  off(eventName, fn) {
    if (this.caches[eventName]) {
      const newCache = fn ? this.caches[eventName].filter(e=> e !== fn) : []; // 取消匹配到的事件中的fn，或则清空该事件
      this.caches[eventName] = newCache;
    }
  }
}

function click() {
  console.log('click')
}
function doclick() {
  console.log('dobleclick')
}
let result = new Observe();
result.on('click', click);
result.on('click', doclick);
result.on('move', function () {
  console.log('move')
});
result.off('click', doclick)
console.log(result.caches)


class Observe {
  constructor() {
    this.caches = {}
  }
  on(type, fn) {
    this.caches[type] = this.caches[type] || [];
    this.caches[type].push(fn)
  }
  emit(type, data) {
    if(this.caches[type]) {
      this.caches[type].forEach(fn=> {
        fn(data)
      })
    }
  }
  off(type, fn) {
    if (this.caches[type]) {
      const newCache = fn ? this.caches[type].filter(e=> 
        e !== fn) : [];
        this.caches[type] = newCache;
    }
  }
}


class observe {
  constructor() {
    this.caches = {};
  }
  on(type, fn) {
    this.caches[type] = this.caches[type] || [];
    this.caches[type].push(fn)
  }
  emit(type, data) {
    if (this.caches[type]) {
      this.caches[type].forEach(fn=>
        fn(data))
    }
  }
  off(type, fn) {
    const newCache = fn ? this.caches[type].filter(e=>
      e !== fn) : [];
    this.caches[type] = newCache;
  }
  once(type, fn) {
    let _ = this;
    let _fn = ()=> {
      fn.apply(_, arguments);
      this.off(type);
    }
    this.on(type, _fn)
  }
}