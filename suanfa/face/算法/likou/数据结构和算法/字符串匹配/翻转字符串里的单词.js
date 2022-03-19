// 给定一个字符串，逐个翻转字符串中的每个单词。
var reversewords = function (s) {
  // 解法一： 双指针
  // const a = s.trim().split(/\s+/)
  // let l = 0, r = a.length - 1, t
  // while (l < r) {
  //     t = a[l]
  //     a[l++] = a[r]
  //     a[r--] = t
  // }
  // return a.join(' ')


  return s.trim().split(/\s+/).reverse().join(' ');
}

var reverseWords = function(s) { // 双端队列，可以从头部插入
  let left = 0
  let right = s.length - 1
  let queue = []
  let word = ''
  while (s.charAt(left) === ' ') left ++
  while (s.charAt(right) === ' ') right --
  while (left <= right) {
      let char = s.charAt(left)
      if (char === ' ' && word) {
          queue.unshift(word)
          word = ''
      } else if (char !== ' '){
          word += char
      }
      left++
  }
  queue.unshift(word)
  return queue.join(' ')
};

var s = " hello world! "
// var s = "the sky is blue";
var result = reversewords(s);
console.log(result)
