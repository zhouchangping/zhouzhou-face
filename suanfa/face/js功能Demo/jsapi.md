## % /
+ %操作符是求余数 
+ 不够除，余数为除数：案例1：1除以2不够除，除数为1，所以余数为1，
+ /: 除法 5/2 = 2.5 1/10 = 0.1   0/2 = 0   -1/2 == -0.5
+ % : 除法 5%2 = 1   1%10 = 1   0%5=0   2%10 = 2  3%5 = 3
+ |   2.5 | 0 = 2    -2.5 | 0 = -2
+ ~取反的用法是，是因为-1的取反操作等于0，而其他数的取反操作不等于0
+ 按位与 AND  a & b	在a,b的位表示中，每一个对应的位都为1则返回1， 否则返回0.
+ 按位或 OR  a | b	在a,b的位表示中，每一个对应的位，只要有一个为1则返回1， 否则返回0.
+ 按位异或 XOR  a ^ b 在a,b的位表示中，每一个对应的位，两个不相同则返回1，相同则返回0.
+ 按位非 NOT ~ a 反转被操作数的位。
  + 就来看看~1的计算步骤：
  + 将1(这里叫：原码)转二进制 ＝ 00000001
  + 按位取反 ＝ 11111110
  + 发现符号位(即最高位)为1(表示负数)，将除符号位之外的其他数字取反 ＝ 10000001
  + 末位加1取其补码 ＝ 10000010
  + 转换回十进制 ＝ -2
+ 左移 shift a<< b将a的二进制串向左移动b位,右边移入0.
+ 算术右移 a>>b 把a的二进制表示向右移动b位，丢弃被移出的所有位.
+ 无符号右移 a >>> b 把a的二进制表示向右移动b位，丢弃被移出的所有位，并把左边空出的位都填充为0
  + // console.log(9>>>2) // 0000 1001-》 0000 0010   2

## 数组
+ some: 测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
+ every 是否都符合
+ filter(function (current index arr))检测数值元素，并返回符合条件所有元素的数组
+ find find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
+ map 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
+ findIndex() findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1
+ includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
+ join: join() 方法用于把数组中的所有元素放入一个字符串
+ indexOf() 搜索数组中的元素，并返回它所在的位置。 不存在返回-1
  + arr.indexOf(searchElement[, fromIndex]);fromIndex:开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。
+ slice(start, end) 方法可从已有的数组中返回选定的元素。返回一个新数组；不修改数组。可选。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。可选。规定从何处结束选取。
+ splice(index, homany, item1, item2) 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。 index, 必需。规定从何处添加/删除元素。 homany: 可选。规定应该删除多少元素。必须是数字，但可以是 "0"。
+ shift() 删除并返回数组的第一个元素。
+ pop() 方法用于删除并返回数组的最后一个元素
+ unshift() 向数组的开头添加一个或更多元素，并返回新的长度。
+ push() push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
+ reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
  + 返回计算结果,函数累计处理的结果。不一定是数组
  + accumulator累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue
  + arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
  return accumulator + currentValue;
}, initialValue = 0);


const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer)); // 10
```
+ sort() 方法用原地算法对数组的元素进行排序，并返回数组；可以处理二层数组，function (a, b) {return a[0]-b[0]}
+ map() 一个由原数组每个元素执行回调函数的结果组成的新数组
```
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
}[, thisArg]// 执行 callback 函数时值被用作this)

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
```
  
## 字符串
+ split() 方法用于把一个字符串分割成字符串数组。 如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。separator 可以是一个字符串或正则表达式。一个整数，限定返回的分割片段数量
+ charAt() 返回在指定位置的字符。
+ concat()
+ str.substr(start, [length])
+ substring() 包左不包右边;str.substring(indexStart[, indexEnd])
+ slice(start, end) 提取字符串的片断，并在新的字符串中返回被提取的部分。(0, 1)  (1) 包括左边不包右边 start（包含） 和 end（不包含） 参数来指定字符串提取的部分。  返回一个从原字符串中提取出来的新字符串
+ trim() trim() 方法会从一个字符串的两端删除空白字符
+ indexOf() 返回某个指定的字符串值在字符串中首次出现的位置 
+ replace() // str.replace("Microsoft","Runoob");
+ search() 如果没有找到任何匹配的子串，则返回 -1。 n=str.search("Runoob");
+ startsWith() 查看字符串是否以指定的子字符串开头
+ match 可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。n=str.match(/ain/g); 返回数组
+ matchAll() 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。const regexp = /t(e)(st(\d?))/g;const str = 'test1test2';
+ charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。
+ includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。 includes() 方法是区分大小写的

## Math
+ Math.abs(x) 返回一个数的绝对值。
+ Math.floor(x) 返回小于一个数的最大整数，即一个数向下取整后的值。
+ Math.round(x) 返回四舍五入后的整数。
+ Math.random() 返回一个 0 到 1 之间的伪随机数。
+ Math.pow(x, y) 返回一个数的 y 次幂。
+ Math.sqrt(x) 返回一个数的平方根。 开根号
+ Math.sign() 函数返回一个数字的符号, 指示数字是正数，负数还是零。

## 散列表（Hash table，也叫哈希表），是根据关键码值(Key value)而直接进行访问的数据结构。也就是说，它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫做散列函数，存放记录的数组叫做散列表。
+ 给定表M，存在函数f(key)，对任意给定的关键字值key，代入函数后若能得到包含该关键字的记录在表中的地址，则称表M为哈希(Hash）表，函数f(key)为哈希(Hash) 函数。

## 函数 Function
+ 每个 JavaScript 函数实际上都是一个 Function 对象。运行 (function(){}).constructor === Function // true
+ 属性
  + Function.arguments caller displayName length name
+ 方法：
  + Function.prototype.apply() call bind toString
```
[].prototype.slice.call(argument)
args.concat([].slice.call(argument))
args.concat([].slice.call(arguments))
```
+ call 使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined。  Production.call(this, argument)，调用父类的构造函数

## Object Object 构造函数创建一个对象包装器
+ Object构造函数的方法
  + Object.assign() 通过复制一个或多个对象来创建一个新的对象。
  + create() 使用指定的原型对象和属性创建一个新对象。
    + 方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
  + defineProperty 给对象添加一个属性并指定该属性的配置。
    + value: value, function
    + configurable: 该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除
    + enumerable: 该属性才会出现在对象的枚举属性中
    + writable: 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变。
  + defineProperties 给对象添加多个属性并分别指定它们的配置。
  + entries 返回给定对象自身可枚举属性的 [key, value] 数组。
  + freeze 
  + seal: 一个对象是可扩展的（可以添加新的属性）。密封一个对象会让这个对象变的不能添加新属性，且所有已有属性会变的不可配置
  + getOwnPropertyDescriptor 返回对象指定的属性配置。
  + getOwnPropertyNames  返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。
  + getOwnPropertySymbols 返回一个数组，它包含了指定对象自身所有的符号属性。
  + getPrototypeOf 返回指定对象的原型对象。
  + is:
  + keys
  + setPrototypeOf
  + values
+ 原型上的方法
  + Object.prototype.hasOwnProperty() 返回一个布尔值 ，表示某个对象是否含有指定的属性，而且此属性非原型链继承的。
  + Object.prototype.isPrototypeOf() 返回一个布尔值，表示指定的对象是否在本对象的原型链中。
  + Object.prototype.toString() 返回对象的字符串表示。
  + Object.prototype.valueOf() 返回指定对象的原始值。
+ 属性
  + Object.prototype.constructor 特定的函数，用于创建一个对象的原型。
  + Object.prototype.__proto__ 指向当对象被实例化的时候，用作原型的对象。

## promise
+ promise all(方法返回一个 Promise 实例，此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败的原因是第一个失败 promise 的结果。)
+ 它通常在启动多个异步任务并发运行并为其结果创建承诺之后使用，以便人们可以等待所有任务完成。
+ 在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组，它包含所有的传入迭代参数对象的值（也包括非 promise 值）
```
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```

+ promise then （等内部执行完才执行then内部）
+ 返回一个promises

+ Promise.allSettled()方法返回一个在所有给定的promise已被决议或被拒绝后决议的promise，并带有一个对象数组，每个对象表示对应的promise结果
```
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));
// expected output:
// "fulfilled"
// "rejected"
```

+ Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝
```
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
```

## 正则
+ 字面量
+ 构造函数
```
/ab+c/i;
new RegExp('ab+c', 'i');
new RegExp(/ab+c/, 'i');
```
  + lastIndex: 该索引表示从哪里开始下一个匹配
  + 实例属性
  + 实例方法
    + RegExp.prototype.compile() 不推荐compile方法。你可以使用 RegExp 构造函数来得到相同效果
    + exec: 字符串中执行匹配项的搜索;方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。每次更新lastIndex, 最后不疲累返回null lastIndex为0；完全匹配成功的文本将作为返回数组的第一项，从第二项起，后续每项都对应正则表达式内捕获括号里匹配成功的文本。
    ```
    const regex1 = RegExp('foo*', 'g');
    const str1 = 'table football, foosball';
    let array1;

    while ((array1 = regex1.exec(str1)) !== null) {
      console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
      // expected output: "Found foo. Next starts at 9."
      // expected output: "Found foo. Next starts at 19."
    }
    ```
    + test: 该正则在字符串里是否有匹配。如果正则表达式与指定的字符串匹配 ，返回true；否则false。每次更新lastIndex, 
  + 支持正则表达式的 String 对象的方法
    + RegExp.prototype[@@match]() 对给定字符串执行匹配并返回匹配结果。
      + 如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。 格式数组
      + 如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 在这种情况下，返回的项目将具有如下所述的其他属性。
        + 0: 匹配到的字符串
        + groups: 一个捕获组数组 或 undefined（如果没有定义命名捕获组）。
        + index: 匹配的结果的开始位置
        + input: 搜索的字符串.
    + RegExp.prototype[@@matchAll]() 对给定字符串执行匹配，返回所有匹配结果。
    + RegExp.prototype[@@replace]() 给定新的子串，替换所有匹配结果。
      + 如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。否则，它只替换第一个匹配子串。
      + replacement 可以是字符串，也可以是函数。如果它是字符串，那么每个匹配都将由字符串替换。但是 replacement 中的 $ 字符具有特定的含义。
      + $1、$2、...、$99	与 regexp 中的第 1 到第 99 个子表达式相匹配的文本。
    ```
    var re = /(\w+)\s(\w+)/;
    var str = "John Smith";
    var newstr = str.replace(re, "$2, $1");
    // Smith, John
    console.log(newstr);

    function replacer(match, p1, p2, p3, offset, string) {
      // p1 is nondigits, p2 digits, and p3 non-alphanumerics
      return [p1, p2, p3].join(' - ');
    }
    var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
    console.log(newString);  // abc - 12345 - #$*%
    ```
    + RegExp.prototype[@@search]() 在给定字符串中搜索匹配项，并返回在字符串中找到字符索引。search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。如果没有找到任何匹配的子串，则返回 -1；与指定查找的字符串或者正则表达式相匹配的 String 对象起始位置。
  + 方括号：
    + [abc] 	查找方括号之间的任何字符。 [^abc] [0-9] [a-z] [A-Z] [A-z] (red|blue|green)查找任何指定的选项。
    + [^abc] 匹配除了 [...] 中字符的所有字符，例如 [^aeiou] 匹配字符串 "google runoob taobao" 中除了 e o u a 字母的所有字母。
  + 元字符
    + .(查找单个字符，除了换行和行结束符。\n) \w(查找单词字符。) \W(查找非单词字符。)  \d查找数字。  \s查找空白字符。\S匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。 \b匹配单词边界。 \0查找 NULL 字符。 \n查找换行符。 \xxx查找以八进制数 xxx 规定的字符。 \uxxxx查找以十六进制数 xxxx 规定的 Unicode 字符。
      ```
      var str="Visit W3Schools. Hello World!";
      var patt1=/\u0057/g;
      ```
    + | 
    + \
  ```
  /\bm/匹配“moon”中的‘m’；
  /oo\b/并不匹配"moon"中的'oo'，因为'oo'被一个“字”字符'n'紧跟着。
  /oon\b/匹配"moon"中的'oon'，因为'oon'是这个字符串的结束部分。这样他没有被一个“字”字符紧跟着。
  /\w\b\w/将不能匹配任何字符串，因为在一个单词中间的字符永远也不可能同时满足没有“字”字符跟随和有“字”字符跟随两种情况。
  ```
  + 量词(https://www.runoob.com/jsref/jsref-obj-regexp.html)
    + n+ 匹配任何包含至少一个n的字符串。
    + n*  匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。
    + n? 匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 、 "does" 中的 "does" 、 "doxy" 中的 "do" 。? 等价于 {0,1}。
    + n{x} n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。
    + n{X,}
    + () ()表示捕获分组，()会把每个分组里的匹配的值保存起来，使用$n(n是一个数字，表示第n个捕获组的内容)
    + 中括号 []：表示范围，括号中的内容只要有一个匹配到就可以
    + n{X,Y} X 和 Y 为正整数。前面的模式 n 连续出现至少 X 次，至多 Y 次时匹配。
    + ?:  (?:)表示非捕获分组，和捕获分组唯一的区别在于，非捕获分组匹配的值不会保存起来
    + ?=n 匹配任何其后紧接指定字符串 n 的字符串。var patt1=/is(?= all)/g;
    + ?!n 匹配任何其后没有紧接指定字符串 n 的字符串。

## 正则常用
+ \u4e00-\u9fa5表示的是中文范围
+ /[0-9]/   0123456789
+ /[a-z]/   全部英文小写
+ /[A-Z]/   全部英文大写
+ {0,} 相当于 *
+ {1,} 相当于 +
+ {0,1}相当于 ?
+ \d：数字
+ \D：非数字
+ \s：空格
+ \S：非空格
+ \w：数字字母下划线
+ \W：非数字字母下划线
+ \b：字符边界
+ \B：非字符边界
+ ^: 例如，/^A/ 并不会匹配 "an A" 中的 'A'，但是会匹配 "An E" 中的 'A'。
+ $: 例如，/t$/ 并不会匹配 "eater" 中的 't'，但是会匹配 "eat" 中的 't'。
+ const reg = /a[bc]*c/g  // 贪婪 由于 abcbcbc 一直到字符串最后都符合正则的规则，所以一直匹配到不符合位置
+ const reg1 = /a[bc]*?c/g // 惰性 惰性：只匹配一个符合规则的就返回，不继续匹配。
```
所谓贪婪匹配就是匹配重复字符是尽可能多的匹配，比如：
"aaaaa".match(/a+/); 
//["aaaaa", index: 0, input: "aaaaa"]

非贪婪匹配就是尽可能少的匹配，用法就是在量词后面加上一个“？”，比如：
"aaaaa".match(/a+?/); 
//["a", index: 0, input: "aaaaa"]
"aaaaa".match(/a*?/); 
//["", index: 0, input: "aaaaa"]

但是非贪婪匹配有时候和我们期待的并不一样，比如：从a开始要去找b
"aaab".match(/a+b/); 
["aaab", index: 0, input: "aaab"] 
"aaab".match(/a+?b/); 
["aaab", index: 0, input: "aaab"]
```
+ /(?<!-)\d+/.exec('3') 匹配到 "3". // 反向否定查找
+ /(?<!-)\d+/.exec('-3') 因为这个数字前有负号，所以没有匹配到。
+ 组匹配 ?<组名>
+ 匹配后缀 ?= 和 ?!
+ 匹配前缀 ?<= 和 ?<!
```
const reg = /(?<name>[a-zA-Z]{3,6})(?<age>\d{2})/
const str = 'xiaoming23'
str.match(reg).groups.name // xiaoming
str.match(reg).groups.age // 23
```
+ const html = '<div></div>' const reg = /<(\w+)><\/(\1)>/g   \1引用上一个分组的正则规则上面的内容已经说过。
+ [\s\S]* 使用 [\s\S] 可以匹配到 \n。因为 [\s\S] 代表的是空格和非空格。相同的用法还有 [\w\W]、[\b\B]、[\d\D]

## Symbol 是一种基本数据类型 （primitive data type）。Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的symbol注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："new Symbol()"
+ let sy = Symobl()

## console.log(eval('2 + 2') === eval('4'));

## globalThis isNaN()
+ decodeURI() decodeURIComponent() encodeURI() encodeURIComponent()

## Number
+ Number.isNaN
```
var a = new Number('123'); // a === 123 is false
var b = Number('123'); // b === 123 is true
a instanceof Number; // is true
b instanceof Number; // is false
```

## set map WeakMap
+ const set = new Set([1, 2, 3, 4, 4]); [...set]
  + size 属性
  + Set.prototype.keys()：返回键名的遍历器
  + Set.prototype.values()：返回键值的遍历器  由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致
  + Set.prototype.entries()：返回键值对的遍历器
  + Set.prototype.forEach()：使用回调函数遍历每个成员
  + Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
  + Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是
  + Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
  
+ const m = new Map()  // Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组
  + Map.prototype.set(key, value)
  + Map.prototype.get(key)
  + Map.prototype.has(key)
  + Map.prototype.delete(key)
  + Map.prototype.keys()：返回键名的遍历器。
  + Map.prototype.values()：返回键值的遍历器。
  + Map.prototype.entries()：返回所有成员的遍历器。
  + Map.prototype.forEach()：遍历 Map 的所有成员。
```
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);
const m = new Map();
const o = {p: 'Hello World'};
m.set(o, 'content')
m.get(o) // "content"
m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

+ WeakMap: new WeakMap([iterable])
  + WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意
  + 原生的 WeakMap 持有的是每个键对象的“弱引用”，这意味着在没有其他引用存在时垃圾回收能正确进行。原生 WeakMap 的结构是特殊且有效的，其用于映射的 key 只有在其没有被回收时才是有效的
  + 正由于这样的弱引用，WeakMap 的 key 是不可枚举的 (没有方法能给出所有的 key)。
  
## reflect
+ reflect: Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与proxy handlers的方法相同。Reflect不是一个函数对象，因此它是不可构造的。
+ 与大多数全局对象不同Reflect并非一个构造函数，所以不能通过new运算符对其进行调用，或者将Reflect对象作为一个函数来调用。Reflect的所有属性和方法都是静态的（就像Math对象）
+ Reflect的所有属性和方法都是静态的（就像Math对象）。Reflect对象的方法与Proxy对象的方法相同。Reflect 一共有13个静态方法：
```
const duck = {
  name: 'Maurice',
  color: 'white',
  greeting: function() {
    console.log(`Quaaaack! My name is ${this.name}`);
  }
}

Reflect.has(duck, 'color');
// true
Reflect.has(duck, 'haircut'); // 判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。
// false
Reflect.ownKeys(duck); // 返回一个包含所有自身属性（不包含继承属性）的数组。
// [ "name", "color", "greeting" ]
Reflect.set(duck, 'eyes', 'black'); // 将值分配给属性的函数。返回一个Boolean，如果更新成功，则返回true。
// returns "true" if successful
// "duck" now contains the property "eyes: 'black'"

Reflect.apply(target, thisArgument, argumentsList) // console.log(Reflect.apply(Math.floor, undefined, [1.75]));


Reflect.get(target, propertyKey[, receiver]) 需要取值的目标对象 需要获取的值的键值  如果target对象中指定了getter，receiver则为getter调用时的this值


var x = {p: 1};
var obj = new Proxy(x, {
  get(t, k, r) { return k + "bar"; }
});
Reflect.get(obj, "foo"); // "foobar"
```

## proxy const p = new Proxy(target, handler) // 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
+ handler: 它是一个对象，它的属性提供了某些操作发生时所对应的处理函数
+ ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。 
```
var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});
```

## for in  for of
+ for in 遍历顺序有可能不是按照实际数组的内部顺序,因为for in是遍历可枚举的属性，也包括原型上的属性
+ for of 只是遍历数组的内部，不会遍历原型上的属性和索引
+ 使用for in 来遍历对象，for of 遍历数组

## window.onscroll || onresize || onclick || onchange || onfocus || onblur || oninput || onerror || ondblclick || onkeydown || onkeyup || onload || onmousedown || onmousemove || onmouseout || onmouseover || onmouseup 
```
window.onscroll = function() {
  //为了保证兼容性，这里取两个值，哪个有值取哪一个
  //scrollTop就是触发滚轮事件时滚轮的高度
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  console.log("滚动距离" + scrollTop);
}
```

## touch
+ touchstart事件：当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。
+ touchmove事件：当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。
+ touchend事件：当手指从屏幕上离开的时候触发。
+ touchcancel事件：当系统停止跟踪触摸的时候触发。关于这个事件的确切出发时间，文档中并没有具体说明，咱们只能去猜测了。
```
触摸事件还包含下面三个用于跟踪触摸的属性
touches: 当前屏幕上所有触摸点的列表;
targetTouches: 当前对象上所有触摸点的列表;
changedTouches: 涉及当前(引发)事件的触摸点的列表

每个Touch对象包含的属性如下。
clientX：触摸目标在视口中的x坐标。
clientY：触摸目标在视口中的y坐标。
identifier：标识触摸的唯一ID。
pageX：触摸目标在页面中的x坐标。
pageY：触摸目标在页面中的y坐标。

screenX：触摸目标在屏幕中的x坐标。
screenY：触摸目标在屏幕中的y坐标。
target：触目的DOM节点目标。
```

## canvas
+ 颜色、样式和阴影
  + fillStyle 	设置或返回用于填充绘画的颜色、渐变或模式。
  + strokeStyle 设置或返回用于笔触的颜色、渐变或模式。
  + createLinearGradient() 创建线性渐变（用在画布内容上）。
  + addColorStop() 	规定渐变对象中的颜色和停止位置。
+ 路径
  + fill()
  + stroke() 
  + beginPath() 起始一条路径，或重置当前路径。
  + moveTo() 把路径移动到画布中的指定点，不创建线条。
  + closePath() 创建从当前点回到起始点的路径。
  + lineTo() 添加一个新点，然后在画布中创建从该点到最后指定点的线条。
  + arc() 创建弧/曲线（用于创建圆形或部分圆）。
  + arcTo() 在画布上创建介于两个切线之间的弧：
+ 线条样式
  + lineCap 设置或返回线条的结束端点样式。
  + lineJoin 设置或返回两条线相交时，所创建的拐角类型。
  + lineWidth 设置或返回当前的线条宽度。
+ 矩形
  + rect() context.rect(x,y,width,height);
  + fillRect() context.fillRect(x,y,width,height);
  + strokeRect() context.strokeRect(x,y,width,height);
  + clearRect() context.clearRect(x,y,width,height);
  + bezierCurveTo() context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y); 三次贝塞尔
  + quadraticCurveTo() context.quadraticCurveTo(cpx,cpy,x,y); 二次贝塞尔
+ 转换
  + scale()
  + rotate() 旋转只会影响到旋转完成后的绘图。 context.rotate(angle);
  + translate() 方法重新映射画布上的 (0,0) 位置。将新的 (0,0) 位置设置为 (70,70) 重新映射画布上的 (0,0) 位置。
  + transform() 替换绘图的当前转换矩阵。
  + setTransform() 将当前转换重置为单位矩阵。然后运行 transform()。
+ 文本
  + font
  + textAlign
  + textBaseline
+ 图像绘制
  + drawImage()
+ 像素操作
  + width
  + height
  + data
+ 合成

## JSON: 
+ JSON.parse(text[, reviver]) 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象
```
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null

JSON.parse('{"p": 5}', function (k, v) {
    if(k === '') return v;     // 如果到了最顶层，则直接返回属性值，
    return v * 2;              // 否则将属性值变为原来的 2 倍。
});                            // { p: 10 }

JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}', function (k, v) {
    console.log(k); // 输出当前的属性名，从而得知遍历顺序是从内向外的，
                    // 最后一个属性名会是个空字符串。
    return v;       // 返回原始属性值，相当于没有传递 reviver 参数。
});
```

+ JSON.stringify(value[, replacer [, space]]) 方法将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性
```
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""

function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
var jsonString = JSON.stringify(foo, replacer); // JSON序列化结果为 {"week":45,"month":7}.

JSON.stringify(foo, ['week', 'month']); // 数组
// '{"week":45,"month":7}', 只保留 “week” 和 “month” 属性值。

// both will throw a SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
```

## \n \t \r
+ \t TAB(制表符)
+ \n 换行 换行(LF) ，将当前位置移到下一行开头
+ \r 回车 回车(CR) ，将当前位置移到本行开头


## hasOwnProperty： 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）
+ hasOwnProperty和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。

## Array
+ 方法：
  + Array.from: 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。Array.from(arrayLike[, mapFn[, thisArg]])
    + Array.from("foo)
    + Array.([1,2,3], x=>x+x)
    + const set = new Set(['foo', 'bar', 'baz', 'foo']); Array.from(set);
  + Array.isArray()
  + Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。 Array.of(element0[, element1[, ...[, elementN]]])
+ 属性：
  + length
  + prototype

## hashchange onhashchange 

## history.pushState() history.replaceState（）

## typeof
+ typeof [] === Object

## popstate onpopstate 
+ 当活动历史记录条目更改时，将触发popstate事件。如果被激活的历史记录条目是通过对history.pushState（）的调用创建的，或者受到对history.replaceState（）的调用的影响，popstate事件的state属性包含历史条目的状态对象的副本
+ 调用history.pushState()或history.replaceState()不会触发popstate事件。只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()或者history.forward()方法）

## 判断javascript数据类型的方法有哪些
+ typeof: 返回一个字符串，表示未经计算的操作数的类型。
  + undefined, boolean, string, number, object, symbol, function
  + 如果是引用类型的数值，Array, Date, RegExp,这些都是object
  + typeof null object
+ instanceof: 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。 person.__proto__ = Person.prototype
  + 可以判断Array, Date, RegExp,
  + 不能判断null undefined
+ [object].constructor
  + f.__proto__ = F.prototype  F.prototype.constructor === F  => f.constructor === F
  + null undefined报错

## webworker优缺点
### 缺点
+ 不能直接访问web页面，和dom api，
+ 消耗cpu周期且导致系统反应速度变慢
+ 不能跨域
### 优点
+ 避免卡顿

## 宏任务和微任务
### 宏任务
+ script 中的代码块
+ setTimeout()
+ setInterval()
+ i/o
+ requestAnimationFrame
+ setImmediate()（非标准，IE 和 Node.js 中支持）
+ 注册事件
### 微任务: 微任务的执行时机，晚于当前本轮事件循环的 Call Stack（调用栈）中的代码（宏任务），早于事件处理函数和定时器函数
+ Promise
+ MutationObserver
+ queueMicrotask()
+ async await
  + async隐性的返回一个promise,也就是在await执行完后会往微任务队列增加一个微任务
```
queueMicrotask(() => {
	console.log('微任务')
});
``` 
### 怎么计算组件在适口中出现几次
+ let io = new intersectionObserver(callBack, option)
  + io.observe(document.getElementById("example"))
  + io.unobserve(element)
  + io.disconnect() // 关闭
+ scroll: getBoundingClientRect()

## 箭头函数实现

## 事件循环和node事件循环的区别
### 时间循环
  + 主任务
  + 任务队列
### node
+ libuv中 timers,执行setinterval setTimeout注册的回调函数
+ pending callbacks,一些i/o的callback，推迟到下一个循环中执行，
+ idle prepare阶段： 执行一些node内部回调
+ poll阶段：执行i/o事件回调，同事检查定时器是否到达
+ check阶段：执行setimmediate注册的回调函数
+ close callback阶段： 执行socket.on('close‘，。。。)等回调函数

## 