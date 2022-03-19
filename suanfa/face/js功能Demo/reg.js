// /ab+c/i;
// new RegExp(/ab+c/, 'i');
// let newReg = new RegExp('ab+c', 'i');
// console.log(newReg.lastIndex) // 该索引表示从哪里开始下一个匹配

// const regex1 = RegExp('foo*', 'g');
// const str1 = 'table football, foosball';
// let array1;

// while ((array1 = regex1.exec(str1)) !== null) {
//   console.log(array1)
//   console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
//   // expected output: "Found foo. Next starts at 9."
//   // expected output: "Found foo. Next starts at 19."
// }


// var regex = /foo/g;
// // regex.lastIndex is at 0
// let result1 = regex.test('foo'); // true
// console.log(result1)
// console.log(regex.lastIndex)
// // regex.lastIndex is now at 3
// let result2 = regex.test('foo'); // false
// console.log(result2)
// console.log(regex.lastIndex)
// let result3 = regex.test('foo'); // true
// console.log(regex.lastIndex)


// var str="Mr. Blue has a blue house";
// console.log(str.search(/blue/i));


// var str="The rain in SPAIN stays mainly in the plain"; 
// var n=str.match(/ain/);
// console.log(n) // ["ain", index: 5, input: "The rain in SPAIN stays mainly in the plain", groups: undefined]


// var str="Visit Microsoft! Visit Microsoft!";
// var n=str.replace(/Microsoft/g, "Runoob");
// console.log(n)


// var str="Hellooo World! Hello Runoob!"; 
// var patt1=/o+/g;
// console.log(str.match(patt1)) // []

// var str="A bird warbled"; 
// var patt1=/bo*/g;
// console.log(str.match(patt1)) // []


var str="Is this all there is";
var patt1=/is(?= all)/;
console.log(str.match(patt1));


try {

} catch(w) {

}


