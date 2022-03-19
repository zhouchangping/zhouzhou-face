// https://blog.csdn.net/qq_34826261/article/details/97319790
function longestDupSubstring(s) {
  let len = s.length;
  let maxLen = 0;
  if (len <=1) {
    return "";
  }
  let strings = new Array(len);
  for (let i = 0; i < len; i++) {
    strings[i] = s.substring(i, len);
  }
  strings.sort();
  for (let j = 0; j < len -1; j++) {
    let tmp = lenTowStr(strings[j], strings[j+1]);
    if (tmp > maxLen) {
      maxLen = tmp;
      result = strings[j].substring(0, maxLen);
    }
  }
  return result;
}
function longTowStr(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return 0;
  }
  let i = 0;
  while(i < s1.length && i < s2.length && s1.charAt(i) == s2.charAt(i)) {
    i++
  }
  return i;
}