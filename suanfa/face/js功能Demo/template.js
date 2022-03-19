function template(str) {
    return data => str.replace(/<%=(\w+)%>/g, function (match, p) {
      console.log(match) // 匹配到的
      console.log(p) // 执行多次
      data[p] || ''
  });
}
var str = "您好， <%=name%>。欢迎来到<%=location%>";
var compiled = template(str);

let result = compiled({
  name: '张三',
  location: '网易游戏'
});
console.log(result)


const regex1 = RegExp('foo*', 'g');
const str1 = 'table football, foosball';
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
  console.log(array1)
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
}