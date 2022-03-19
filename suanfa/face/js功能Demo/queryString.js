function queryString(url) {
  const [, query] = url.split("?");
  if (query) {
    return query.split("&").reduce((pre, cur)=> {
      const [key, val] = cur.split("=");   
      if (pre[key]) {
        pre[key] = [...pre[key], decodeURIComponent(val)];
      } else {
        pre[key] = [decodeURIComponent(val)];
      }
      return pre;
    }, {});
  }
  return {}
}


let url = 'https://mail.qq.com/cgi-bin/frame_html?sid=8Yx_Cx0nqM0BXmsL&r=4af22252f69fb9f6ee4554a6fb630055'
let result = queryString(url);
console.log(result)