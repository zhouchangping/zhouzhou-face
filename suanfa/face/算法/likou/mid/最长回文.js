
// // 暴力法：
// var longestPalindrome = function(s) {
//   function isPalindrome(str) {
//     var len  = str.length
//     var middle = parseInt(len/2)
//     for(var i = 0;i<middle;i++){
//         if(str[i]!=str[len-i-1]){
//             return false
//         }
//     }
//     return true
//   }
//   var ans = '';
//   var max = 0;
//   var len = s.length
//   for(var i = 0;i<len;i++){
//     for(var r = i+1;r<=len;r++){
//         var tmpStr = s.substring(i,r)
//         if(isPalindrome(tmpStr) && tmpStr.length > max){
//             ans = s.substring(i,r)
//             max = tmpStr.length;
//         }
//     }
//   }
//   return ans;
// }




// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//   let n = s.length;
//   let res = '';
//   let dp = Array.from(new Array(n),() => new Array(n).fill(0));
//   console.log(dp)
//   for(let i = n-1;i >= 0;i--){
//       for(let j = i;j < n;j++){
//           dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i+1][j-1]);
//           if(dp[i][j] && j - i +1 > res.length){
//               res = s.substring(i,j+1);
//           }
//       }
//   }
//   return res;
// };



/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(!s || s.length < 2){
      return s;
  }
  var s_f = s.split('').reverse().join('');
  console.log(s_f)
  var resultStr = s[0];
  var maxLen = 1;
  var tmpLen = 1;
  var maxStrIndex = 0;
  var len = s.length;
  //判断字符串是否回文
  function isPalinerome(i,r){
      if(len - i - 1 == r -tmpLen + 1){
          return true
      }
      return false;
  }
  //初始化二维数组
  var len = s.length;
  var arr = new Array(len);
  for(var i = 0;i<len;i++){
      arr[i] = [];
      for(var r = 0;r<len;r++){
          arr[i][r] = 0
      }
  }
  console.log(arr)
  for(var i = 0;i<len;i++){
      for(var r=0;r<len;r++){
          if(s[i] == s_f[r]){
              if(i==0 || r==0){
                  arr[i][r] = 1
              }else{
                  arr[i][r] = arr[i-1][r-1] + 1
                  tmpLen = arr[i][r]
              }
              if(tmpLen > maxLen && isPalinerome(i,r)){
                  maxStrIndex = r;
                  maxLen = tmpLen;
                  resultStr =  s.substring(i-tmpLen+1,i+1);
              }
          }
      }
  }
  return resultStr;
};



const result = longestPalindrome('baba')
console.log(result)



