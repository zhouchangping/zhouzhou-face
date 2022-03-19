//给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
function a(str, need) {
  if (need.length == 0) {
    return 0;
  }
  if (str.length < need.length) {
    return -1;
  }
//  return str.indexOf(need);
  let arr = need.split('');
  let len = arr.length;
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (arr.indexOf(str[i]) != '-1' && strArr.length - i >= len) {
      let arrNew = strArr.splice(i, len);
      let re = arrNew.every((item, index)=> {
        return arr[index] == item;
      })
      return re == true ? i : '-1';
    }
  }
}

var strStr = function(haystack, needle){
  if (needle==="") return 0
  for(var i=0;i<haystack.length;i++){
      if(haystack[i]===needle[0]){
          var flag = true;
          for (var j=1;j<needle.length;j++){
              if (haystack[i+j]!=needle[j]){
                  flag = false
                  break;
              }
          }
          if (flag) return i
      }
  }
  return -1
};

var strStr = function (haystack, needle) {
  if (needle === "") return 0
  for (var i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[0]) {
          if (haystack.substring(i, i + needle.length) === needle) return i;
      }
  }
  return -1
};



let result = a('weed', 'eedd')
console.log(result)