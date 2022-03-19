/*
 * @Author: zhouchangping
 * @Date: 2020-07-01 11:00:08
 * @LastEditTime: 2022-01-19 17:57:15
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/数组去重.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// var array = [1, 2, 1, 1, '1'];
// function unique(array) {
//    return Array.from(new Set(array));
// }
// console.log(unique(array)); // [1, 2, "1"]

// function unique(array) {
//     return [...new Set(array)];
// }

// var unique = (array)=> [...new Set(array)]

// 双层循环
// indexOf
// Array.from new Set
// ...new Set()
// 排序后去重
var array1 = [1, 2, '1', 2, 1];
var array2 = [1, 1, '1', 2, 2];
function unique(array, isSorted) {
    var res = [];
    var seen = [];

    for (var i = 0, len = array.length; i < len; i++) {
        var value = array[i];
        if (isSorted) {
            console.log(value)
            console.log(seen)
            console.log("------")
            if (!i || seen !== value) {
                res.push(value)
            }
            seen = value;
        }
        else if (res.indexOf(value) === -1) {
            res.push(value);
        }        
    }
    return res;
}

// console.log(unique(array1)); // [1, 2, "1"]
console.log(unique(array2, true)); // [1, "1", 2]


// filter indexOf
var array = [1, 2, 1, 1, '1'];

function unique(array) {
    var res = array.filter(function(item, index, array){
        return array.indexOf(item) === index;
    })
    return res;
}

console.log(unique(array));


Array.prototype.unique = function () {
  let newArray = [];
  let map = new Map();
  for (let i = 0; i < this.length; i++) {
    if (!map.get(this[i])) {
      map.set(this[i], true)
      newArray.push(this[i]);
    }
  }
  return newArray;
}

Array.prototype.unique = function () {
  const tmp = new Map();
  return this.filter(item => {
    return !tmp.has(item) && tmp.set(item, 1);
  })
}


Array.prototype.unique = function () {
  const tmp = new Map();
  return this.filter(item=> {
    return !tmp.has(item) && tmp.set(item, 1)
  })
}

function unique (array) {
  return array.filter(item, index, array=> {
    return array.indexOf(item) === index;
  })
}
