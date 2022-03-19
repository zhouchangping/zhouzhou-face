/*
 * @Author: zhouchangping
 * @Date: 2020-07-01 10:56:44
 * @LastEditTime: 2022-02-18 16:15:34
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/数组磨平.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 方法一
var arr = [1, [2, [3, 4]]];
function flatten(arr) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      console.log(arr[i])
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
            console.log(result)
        }
        else {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(flatten(arr))


// 方法2
var arr = [1, [2, [3, 4]]];
function flatten(arr) {
    return arr.toString().split(',').map(function(item){
        return +item
    })
}
console.log(flatten(arr))


// 方法3
var arr = [1, [2, [3, 4]]];
function flatten(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}
console.log(flatten(arr))

function flatten(arr) {
  return arr.reduce((prev, next)=>{
    return prev.concat(Array.isArray(next) ? flatte(next) : next)
  }, [])
}