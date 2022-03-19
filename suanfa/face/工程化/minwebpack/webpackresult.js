// 一个自执行函数，传入了一个modules对象
(function (modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    var module = installedModules[moduleId] = { // 当前模块缓存的对应id=./src/index.js
      i: moduleId,
      l: false,
      exports: {}
    };

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // 调用index.js
    // Flag the module as loaded
    module.l = true;
    // Return the exports of the module
    return module.exports;
  }

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules;
  // expose the module cache
  __webpack_require__.c = installedModules;
  // define getter function for harmony exports
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {enumerable: true, get: getter});
    }
  };
  // define __esModule on exports
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
    }
    Object.defineProperty(exports, '__esModule', {value: true});
  };
  // create a fake namespace object
  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, 'default', {enumerable: true, value: value});
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    return ns;
  };
  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ?
      function getDefault() {
        return module['default'];
      } :
      function getModuleExports() {
        return module;
      };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };
  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  // __webpack_public_path__
  __webpack_require__.p = "";
  // Load entry module and return exports
  return __webpack_require__(__webpack_require__.s = "./src/index.js"); // 
})({
  "./src/index.js": (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/test.js\");\n\n\nconsole.log(_test__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n\n\n//# sourceURL=webpack:///./src/index.js?");

  }),
  "./src/message.js": (function (module, __webpack_exports__, __webpack_require__) {
    // ...
  }),
  "./src/test.js": (function (module, __webpack_exports__, __webpack_require__) {
    // ...
  })
});


// modules: 是这样的一个 路径 --> 函数 这样的 key,value 键值对。而函数内部是我们定义的文件转移成 ES5
```
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/test.js\");\n\n\nconsole.log(_test__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n\n\n//# sourceURL=webpack:///./src/index.js?");

```
// 先执行index.js 然后执行test.js message.js

//__webpack_require__ __webpack_exports__ 