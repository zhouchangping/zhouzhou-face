// 创建XMLHttpRequest对象，也就是创建一个异步对象
// 创建一个新的http请求，并指定该http请求的方法，url及验证信息
// 设置响应http请求状态变化的函数
// 发送http请求
// 获取异步调用返回的数据
// 使用javascript操作dom实现局部刷新



// xhr.send xhr.open xhr.setRequestHeader xhr.onreadystatechange 
// xhr.state xhr.responseText
// xhr.readyState: 0 1 2 3 4

function getJson(url) {
  return Promise((resolve, reject)=> {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', SERVER_URL, true);

    // 状态监听
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) {
        return ;
      }
      if (this.status === 200) {
        resolve(this.responseText)
      } else {
        reject(new Error(this.statusText))
      }
    }

    // 设置请求失败时的监听函数
    xhr.onerror = function () {
      console.error(this.statusText);
    }
    xhr.responseType = 'json';
    xhr.setRequestHeader("Accept", 'application/json');
    // 发送http请求
    xhr.send(null);
  })
}
const SERVER_URL = "/server";




const pool = new Map()
function Cache(url, pending = true) {
  this.url = url;
  this.padding = padding;
  this.cbs = [];
  this.data = undefined;
}

function cacheRequest(url, cb) {
  if (pool.has(url)) {
    const { pending, cbs, data } = pool.get(url);
    if (pending) {
      cbs.push(cb);
    } else {
      setTimeout(()=> {
        cb(data);
      });
    }
  } else {
    const cache = new Cache(url);
    cache.cbs.push(cb);
    pool.set(url, cache);
    request(url, (data)=> {
      cache.padding = false;
      cache.data = data;
      if (cache.cbs.length) {
        cache.cbs.forEach((cb)=> cb(data))
      }
    });
  }
}







