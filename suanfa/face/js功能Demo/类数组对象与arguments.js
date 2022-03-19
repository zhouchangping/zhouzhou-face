var array = ['name', 'age', 'sex'];

var arrayLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length: 3
}

function foo(name, age, sex) {
  console.log(arguments); // Arguments对象的length属性，表示实参的长度
}
foo('name', 'age', 'sex')

// Arguments 对象的 callee 属性，通过它可以调用函数自身。
function func(...arguments) {
  console.log(arguments); // [1, 2, 3]
}
func(1, 2, 3);
console.log([...[1,2,3]])



let arrayLike2 = {
  length: 2
}


console.log(arrayLike2 instanceof Array)
console.log(arrayLike2.__proto__.constructor === Array)
console.log(arrayLike2.toString())
console.log(arrayLike2.valueOf())

console.log("---------")

let arr = [1, 2, 3]
console.log(arr instanceof Array)
console.log(arr.__proto__.constructor === Array)
console.log(arr.toString())
console.log(arr.valueOf())


