// ES6 前，JavaScript 共有六种数据类型：Undefined、Null、Boolean、Number、String、Object。 Symbol(https://github.com/mqyqingfeng/Blog/issues/159)

// 原始值转布尔: 在 JavaScript 中，只有 6 种值可以被转换成 false，其他都会被转换成 true。
console.log(Boolean()) // false
console.log(Boolean(false)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(+0)) // false
console.log(Boolean(-0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean("")) // false

// 原始值转数字: 根据规范，如果 Number 函数不传参数，返回 +0，如果有参数，调用 ToNumber(value)。Number 函数将类型转换成数字类型，如果参数无法被转换为数字，则返回 NaN。
参数类型	结果
Undefined	NaN
Null	+0
Boolean	如果参数是 true，返回 1。参数为 false，返回 +0
Number	返回与之相等的值
String	这段比较复杂，看例



