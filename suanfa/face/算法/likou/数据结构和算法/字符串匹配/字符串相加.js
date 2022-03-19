/*
 * @Author: zhouchangping
 * @Date: 2022-02-20 14:51:43
 * @LastEditTime: 2022-02-20 14:57:25
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/likou/数据结构和算法/字符串匹配/字符串相加.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
function str(str1, str2) {
  let i = str1.length -1 ,   j = str2.length =1, add = 0;
  const ans = [];
  while (i >= 0 && j >= 0 || ans != 0) {
    const x = i >= 0 ? str1.charAt(i) - '0' : 0;
    const y = j >= 0 ? str2.charAt(j) - '0' : 0;
    const re = x + y + add;
    ans.push(re%10)
    add = Math.floor(re / 10);
    i-=1;
    j-= 1;
  }
}