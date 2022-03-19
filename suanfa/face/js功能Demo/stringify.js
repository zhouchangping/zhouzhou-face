const data = {
  a: "a",
  b: undefined,
  c: Symbol("c"),
  fn: function() {
    return 'fn'
  }
}
// undefined, 任意函数symbol作为对象属性值时，JSON.stringify将跳过对他们进行序列化
console.log(JSON.stringify(data))

// undefined, 任意函数symbol作为对象属性值时，JSON.stringify将对他们进行序列化为null
const arr = [
  "a", undefined, function () {return 'fn'}, Symbol("c")
]
console.log(JSON.stringify(arr))

// undefined, 任意函数symbol作为单独的值进行序列化时都会返回undefined
const fn = JSON.stringify(function a() {return 'fn'});
console.log(fn)