// lodash get
// var object = { 'a': [{ 'b': { 'c': 3 } }] };
// _.get(object, 'a[0].b.c'); //  3

function get(source, path, defaultValue) {
  // a[3].b -> a.3.b-> [a, 3, b]
  // const paths = path.replace(/\[(\d+)\]/g, ".$1").split("."); // 匹配 [3]
  // const paths = path.replace(/\[(\d+)\]/g, function (match, p1, p2, p3, offset, string) {
  //   console.log(match, "------p1")
  //   return match.split('.')
  // });
  console.log(paths)
  let result = source; // 外部变量
  for (const p of paths) {
    result = Object(result)[p]
    console.log(result)
    if (result == undefined) {
      return defaultValue;
    }
  }
  return result;
}

// console.log(get({a: null}, "a.b.c", 3))
// console.log(get({a: undefined}, "a.b.c", 3))
// console.log(get({a: null}, "a", 3))
console.log(get({a: [{b: 1}]}, "a[0].b", 3))