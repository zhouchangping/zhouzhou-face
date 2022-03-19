/**
 * @user zhou
 * @author zhou
 * @description   getAst -> 依赖关系 -> 依赖图谱 { ast code dependence} -> 深度依赖 -> bundle func（webpack结果-自执行函数）
 * Date: 2018/6/6
 */
const fs = require('fs');
const path = require('path');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const {transformFromAst} = require('babel-core');

let config = {}

/**
 * 获取文件，解析成ast语法
 * @param filename
 * @returns {*}
 */
function getAst (filename) {
  console.log(filename)
  const content = fs.readFileSync(filename, 'utf-8')

  return babylon.parse(content, {
    sourceType: 'module',
  });
}

function getDependence (ast) {
  let dependencies = []
  traverse(ast, {
    ImportDeclaration: ({node}) => {
      dependencies.push(node.source.value);
    },
  })
  return dependencies
}

/**
 * 编译
 * @param ast
 * @returns {*}
 */
function getTranslateCode(ast) {
  const {code} = transformFromAst(ast, null, {
    presets: ['env']
  });
  return code
}

/**
 * 生成完整的文件依赖关系映射
 * @param fileName
 * @param entry
 * @returns {{fileName: *, dependence, code: *}}
 */
function parse(fileName, entry) {
  let filePath = fileName.indexOf('.js') === -1 ? fileName + '.js' : fileName
  console.log(filePath)
  let dirName = entry ? '' : path.dirname(config.entry)
  // let absolutePath = path.join(dirName, filePath)
  let absolutePath = path.join(__dirname, "../example/src/index.js")
  const ast = getAst(absolutePath) // ast
  return {
    fileName, // 文件名称
    dependence: getDependence(ast), // 依赖关系
    code: getTranslateCode(ast), // 源码-2015
  };
}

/**
 * 获取深度队列依赖关系
 * @param main
 * @returns {*[]}
 */
function getQueue(main) {
  let queue = [main]
  for (let asset of queue) {
    asset.dependence.forEach(function (dep) {
      let child = parse(dep)
      queue.push(child)
    })
  }
  return queue
}

function bundle(queue) {
  let modules = ''
  queue.forEach(function (mod) {
    modules += `'${mod.fileName}': function (require, module, exports) { ${mod.code} },`
  })

  const result = `
    (function(modules) { // 依赖图谱，
      function require(fileName) {
        const fn = modules[fileName];
        const module = { exports : {} };
        fn(require, module, module.exports);
        return module.exports;
      }
      require('${config.entry}'); // 从入口文件开始
    })({${modules}})
  `;

  // We simply return the result, hurray! :)
  return result;
}

function bundleFile(option) {
  config = option
  console.log("----lib index----")
  console.log(config.entry)
  let mainFile = parse(config.entry, true) // 依赖图谱

  let queue = getQueue(mainFile) // 深度依赖
  return bundle(queue)
}

module.exports = bundleFile