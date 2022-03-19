import axios from "axios";
class HttpRequest {
  constructor(baseUrl="") {
    this.baseUrl = baseUrl;
    this.queue = {};
    this.source = null;
  }
  request(options) {
    this.source = axios.CancelToken.source();
    let CancelToken = this.source.token;
    const instance = axios.create();
    options = Object.assign(this.getInsideCofig(), options, { CancelToken})
    this.interceptors(instance, options.url);
    return instance(options)
  }
  getInsideCofig() {
    const config = {
      baseUrl: this.baseUrl
    }
    return config;
  }
  destory(url) {
    delete this.queue[url];
  }
  interceptors(instance, url) {
    instance.interceptors.request.use((config)=> {

    })

    instance.interceptors.response.use((res)=> {

    })
  }
}
export default HttpRequest;

let axiosRequest = new HttpRequest(baseUrl)
axiosRequest.request(options)



class Base {
  axios = axios;
  constructor(config, options) {
    this.config = {
      ...config
    }
    this.options = {
      ...options
    }
    this.instance = axios.create(this.config)
  }
  log(...args) {
    if (this.options.debug) {
      console.log(...args)
    }
  }
  type(unknown) {
    const type = Object.prototype.toString.call(unknown);
    return type.replace('[object ', '').replace(']', '').toLowerCase();
  }
  request() {
    throw new Error('Not implemented yet')
  }
}

class API extends Base {
  alert(message) {
    return Dialog.alert({
      message
    })
  }
  aesEncrypt() {

  }
  aesDecrypt() {

  }
  getToken() {

  }
  request(...args) {
    return new Promise(()=> {
      this.getToken()
      this.instance(options).then(response=> {
        
      })
    })
  }
  handleWarning() {
    switch(res.code) {
      case 999:
        break;
      default:
        break;
    }
  }
  getLoginView() {

  }
  handlError(error, options) {
    const errorMsg = {
      400: '客户端错误'
    }
  }
}