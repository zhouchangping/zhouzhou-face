"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _context;

// class Person {
// }
// typeof a;
// const array = [1, 2, 3, 4]
// array.includes((item) => item > 2)
// new Promise((resolve) => resolve(null))
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 5, 6];
var arr3 = (0, _concat["default"])(_context = []).call(_context, arr1, arr2);
console.log(arr3);