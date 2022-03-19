const pool = new Map();

function Cache(url, pending = true) {
  this.url = url;
  this.pending = pending;
  this.data = undefined;
  this.cbs = [];
}

function cacheRequest(url, cb) {
  if (pool.has(url)) {
    const { pending, cbs, data} = poll.get(url);
    if (pending) {
      cbs.push(cb);
    } else {
      setTimeout(()=> {
        cb(data)
      })
    }
  } else {
    const cache = new Cache(url);
    cache.cbs.push(cb);
    pool.set(url, cache);
    Request(url, (data)=> {
      cache.pending = false;
      cache.data = data;
      if (cache.cbs.length) {
        cache.cbs.forEach(cb => cb(data));
      }
    });
  }
}