// https://juejin.im/post/5caf0cddf265da03474def8a


// 前端路由的核心，就在于 —— 改变视图的同时不会向后端发出请求。hash 模式和 history 模式都属于浏览器自身的特性


// 监听hash变化的——hashchange(): 
//   hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.abc.com，因此对于后端来说，即使没有做到对路由的全覆盖





// html5 history interface 中新增的 pushState() 和 replaceState() 方法: 不触发跳转
// 每当同一个文档的浏览历史（即history对象）出现变化时，就会触发popstate事件。
// 当我们在历史记录中切换时就会产生 popstate 事件。对于触发 popstate 事件的方式

当活动历史记录条目更改时，将触发popstate事件。如果被激活的历史记录条目是通过对history.pushState（）的调用创建的，或者受到对history.replaceState（）的调用的影响，popstate事件的state属性包含历史条目的状态对象的副本。

需要注意的是调用history.pushState()或history.replaceState()不会触发popstate事件。只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()或者history.forward()方法）




// hash
function hashHistroy(a) { // 点击后退，或者浏览器切换，会触发hashchange,从而导致refres函数执行，从而执行对应route回调
  if (a === 'hash') {
    class RoutersHash {
      constructor() {
        // 储存hash与callback键值对
        this.routes = {};
        // 当前hash
        this.currentUrl = '';
        // 记录出现过的hash
        this.history = [];
        // 作为指针,默认指向this.history的末尾,根据后退前进指向history中不同的haash
        this.currentIndex = this.history.length - 1;
        this.refresh = this.refresh.bind(this);
        this.backOff = this.backOff.bind(this);
        // 默认不是后退操作
        this.isBack = false;
        window.addEventListener('load', this.refresh, false);
        window.addEventListener('hashchange', this.refresh, false); // href
      }
    
      route(path, callback) {
        this.routes[path] = callback || function() {};
      }
    
      refresh() {
        this.currentUrl = location.hash.slice(1) || '/';
        if (!this.isBack) {
          // 如果不是后退操作,且当前指针小于数组总长度,直接截取指针之前的部分储存下来
          // 此操作来避免当点击后退按钮之后,再进行正常跳转,指针会停留在原地,而数组添加新hash路由
          // 避免再次造成指针的不匹配,我们直接截取指针之前的数组
          // 此操作同时与浏览器自带后退功能的行为保持一致
          if (this.currentIndex < this.history.length - 1)
            this.history = this.history.slice(0, this.currentIndex + 1);
          this.history.push(this.currentUrl);
          this.currentIndex++;
        }
        this.routes[this.currentUrl]();
        console.log('指针:', this.currentIndex, 'history:', this.history);
        this.isBack = false;
      }
      // 后退功能
      backOff() {
        // 后退操作设置为true
        this.isBack = true;
        this.currentIndex <= 0
          ? (this.currentIndex = 0)
          : (this.currentIndex = this.currentIndex - 1);
        location.hash = `#${this.history[this.currentIndex]}`;
        this.routes[this.history[this.currentIndex]]();
      }
    }
    
    var routers = new RoutersHash();
    const content = document.querySelector('body');
    const button = document.querySelector('button');
    function changeBgColor(color) {
      content.style.backgroundColor = color;
    }
    
    routers.route('/', function() {
      changeBgColor('yellow');
    });
    routers.route('/blue', function() {
      changeBgColor('blue');
    });
    routers.route('/green', function() {
      changeBgColor('green');
    });
    
    button.addEventListener('click', routers.backOff, false); 
  } else {
    // history
    class Routers {
      constructor() {
        this.routes = {};
        this._bindPopState();
      }
      init(path) {
        history.replaceState({path: path}, '', path);
        this.routes[path] && this.routes[path]();
      }

      route(path, callback) {
        this.routes[path] = callback || function() {};
      }

      go(path) {
        history.pushState({path: path}, null, path);
        this.routes[path] && this.routes[path]();
      }
      _bindPopState() {
        window.addEventListener('popstate', e => {
          console.log(e.state)
          const path = e.state && e.state.path;
          this.routes[path] && this.routes[path]();
        });
      }
    }

    window.Router = new Routers();
    Router.init(location.pathname);
    const content = document.querySelector('body');
    const ul = document.querySelector('ul');
    function changeBgColor(color) {
      content.style.backgroundColor = color;
    }

    Router.route('/', function() {
      changeBgColor('yellow');
    });
    Router.route('/blue', function() {
      changeBgColor('blue');
    });
    Router.route('/green', function() {
      changeBgColor('green');
    });

    ul.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        Router.go(e.target.getAttribute('href'));
      }
    });
  }
}
hashHistroy('a')











