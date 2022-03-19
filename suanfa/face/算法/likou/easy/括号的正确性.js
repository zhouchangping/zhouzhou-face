// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// function a(x) {
//   let map = new Map()
//   map.set("{", '}');
//   map.set("[", ']');
//   map.set("(", ')');
//   let re = x.split('');  console.log(re)
//   if (re.length % 2 !== 0) {
//     return false;
//   }
//   let info = re.every((item, j)=> {
//     console.log(re[j])
//     console.log(re[re.length - j - 1])
//     return (re[j] == re[re.length -j -1] || re[j] == re[j + 1])
//   })
//   return info;
// }



// function b(x) {
//   let arr = [];
//   if (x % 2 !== 0) {
//     return false;
//   }
//   for (let i = 0; i < x.length; i++) {
//     let re = x[i];
//     switch(re) {
//       case "(": {
//         arr.push(re);
//         break;
//       }
//       case "[": {
//         arr.push(re);
//         break;
//       }
//       case "{": {
//         arr.push(re);
//         break;
//       }
//       case ")": {
//         if (arr.pop() !== re) {
//           return false;
//         };
//         break;
//       }
//       case "]": {
//         if (arr.pop() !== re) {
//           return false;
//         };
//         break;
//       }
//       case "}": {
//         if (arr.pop() !== re) {
//           return false;
//         };
//         break;
//       }
//     }
//   }
// }

var c = function(s) {
  let map = {
      '{': '}',
      '(': ')',
      '[': ']'
  }
  if (s.length % 2 !== 0) {
    return false;
  }
  let stack = []
  for(let i = 0; i < s.length ; i++) {
      if(map[s[i]]) {
          stack.push(s[i])
      } else if(s[i] !== map[stack.pop()]){
          return false
      }
  }
  return stack.length === 0
};


let result = c('[{}]')
console.log(result)