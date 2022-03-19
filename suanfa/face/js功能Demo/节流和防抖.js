// 1-节流: 多长时间内只执行第一次点击
// 拖拽 缩放
function a (func, wait) {
  let timeout = null;
  return function () {
    let that = this;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(()=> {
        timeout = null; // 清空
        func.apply(that, args);
      }, wait)
    }
  }
}

function a1 (func, wait) {
  let timeout = null;
  let pre = 0;
  return function () {
    const that = this;
    const args = arguments;
    const now = +new Date();
    if (now - pre > wait) {
      func.apply(that, args);
      pre = now;
    }
  }
}

function a (fn, wait, im) {
  let timer = null;
  return function () {
    let that = this;
    let args = arguments;
    if (timer) {
      clearInterval(timer);
    }
    if (im) {
      const callNow = !timer;
      setTimeout(()=> {
        timer = null;
      }, wait);
      if (callNow) {
        fn.apply(that, args);
      }
    } else {
      setTimeout(()=> {
        fn.apply(that, args)
        timer = null;
      }, wait);
    }
  }
}


// 1-防抖: 重复点击，执行最后一次
// 提交，搜索
function b (func, wait) {
  let timeout = null;
  return function () {
    let that = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(()=> {
      func.apply(that, args);
    }, wait)
  }
}

function b1 (func, wait, immediate) {
  let timeout = null;
  return function () {
    let that = this;
    let args = arguments;
    if (timeout) { // 存在，则清除
      clearTimeout(timeout); // 清除动画，但是timeout不为null,需要等到时间才设置为null
    }
    if (immediate) { // 立即执行
      const callNow = !timeout;
      timeout = setTimeout(()=> {
        timeout = null; // 到时间清除
      }, wait)
      if (callNow) func.apply(that, args);
    } else {  
    timeout = setTimeout(()=> {
      func.apply(that, args);
    }, wait)
    }
  }
}


(function () { // 节流
  const throttle = function (type, name, obj) {
    let obj = obj || window;
    let running = false;
    const func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        dispatchEvent(new CustomEvent(name));
        running = false;
      });
    }
    obj.addEventListener(type, func);
  }
})()