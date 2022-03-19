// "use strict"  修改name会报错
const obj = {
  name: "yd",
  info: {
    address: "beijing"
  }
}
// const freezeObj = Object.freeze(obj);
// freezeObj.name = "new name";
// console.log(freezeObj.name)
// freezeObj.info.newName = 'ydshenzheng'
// freezeObj.info.address = 'ydshenzheng'
// console.log(freezeObj.info.newName)
// console.log(freezeObj.info.address)

function myFreeze(obj) {
  if (obj instanceof Object) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        Object.defineProperty(obj, key, {
          writable: false // 只读
        });
        Object.seal(obj); // 封装对象？
      }
    }
  }
  return obj;
}

const result = myFreeze(obj);
result.name = "hahah"
console.log(result)


