getSource(modulePath) { // 调用loader去编译
  let source = fs.readFileSync(modulePath, 'utf8');
  
  //获取webpack.config.js中的rules
  let rules = that.options.module.rules;

  //遍历rules调用loader
  for (let i = 0; i < rules.length; i++) {
      let rule = rules[i];
      // 用rule的test中正则匹配文件的类型是否需要使用laoder
      if (rule.test.test(modulePath)) {
          //获取rule中的loaders，例如['style-laoder','css-loader']
          let loaders = rule.use;
          let length = loaders.length;    //loader的数量 
          let loaderIndex = length - 1;   // 往右向左执行
          
          // loader遍历器
          function iterateLoader() {
              let loaderName = loaders[loaderIndex--];
              //loader只是一个包名，需要用require引入
              let loader = require(join(that.root, 'node_modules', loaderName));
              //使用loader，可以看出loader的本质是一个函数
              source = loader(source);
              if (loaderIndex >= 0) {
                  iterateLoader();
              }
          }
          //遍历执行loader
          iterateLoader();
          break;
      }
  }
  return source; 
}


module.exports = function (source) { // loader的结构一般为：
  //TODO需要执行的逻辑
}