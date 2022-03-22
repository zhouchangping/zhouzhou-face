var lengthOfLongestSubstring = function (s) {
  let res = 0;
  let map = new Map();
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1);
    }
    map.set(s[j], j);
    res = Math.max(res, j - i + 1);
  }
  return res;
}


function test (s) {
  let ret = 0;
  let map = new Map();
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i);
    }
    map.set(s[j], j);
    ret = Math.max(ret, j - i + 1);
  }
  return ret;
}
// abc
// abcb
// aba