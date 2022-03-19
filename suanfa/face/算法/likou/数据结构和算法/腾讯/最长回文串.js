/*
 * @Author: zhouchangping
 * @Date: 2021-12-01 15:00:40
 * @LastEditTime: 2022-01-17 17:44:46
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/likou/数据结构和算法/腾讯/最长回文串.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// function longestPalindrome(s) { // 两边扩展,左右指针
//   let res = '';
//   for (let i = 0; i < s.length; i++) {
//       // 寻找长度为奇数的回文子串(以当前元素向两边扩散)
//       const s1 = palindrome(s, i, i);
//       // 寻找长度为偶数的回文子串(以s[i],s[i + 1])向两边扩散
//       const s2 = palindrome(s, i, i + 1);
//       res = res.length > s1.length ? res : s1;
//       res = res.length > s2.length ? res : s2;
//   }
//   return res;
// };

// function palindrome(s, l, r) {
//   // 左右指针，从s[l]和s[r]向两边扩散，找到最长回文串
//   while (l >= 0 && r < s.length && s[l] == s[r]) {
//       l--; r++;
//   }
//   console.log(l, r)
//   return s.substr(l + 1, r - l - 1); // 1
// }


var longestPalindrome = function(s) {
  let n = s.length;
  let res = '';
  let dp = Array.from(new Array(n),() => new Array(n).fill(false));//初始化数组 
  for(let i = n-1;i >= 0;i--){//循环字符串
      for(let j = i;j < n;j++){
        //dp[i][j]表示子串i～j是否是回文子串
        //回文子串必须满足s[i]，s[j]相等。并且向外扩展一个字符也相等，即dp[i+1][j-1]也是回文子串
        //j - i < 2表示子串小于等于1也是回文串
          dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i+1][j-1]);
          if(dp[i][j] && j - i +1 > res.length){//当前回文子串比之前的大，更新最大长度
              res = s.substring(i,j+1);
          }
      }
  }
  return res;
};
const re = longestPalindrome('acdca')
console.log(re)


import java.util.*;
public class Main {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        String s = input.nextLine();
        int max = 0;
        /**
        *双指针遍历找到最长子串
        */
        for (int i = 0; i < s.length(); i++) {
            for (int j = s.length(); j > i; j--) {
                String toBeJuged = s.substring(i, j);
                if (isPalindromeString(toBeJuged)) {
                    max = Math.max(max, j - i);
                }
            }
        }
        System.out.print(max);
    }
    /**
    *判断一个字符串是否是回文字符串的方法
    */
    static boolean isPalindromeString(String s) {
        return s.equals(new StringBuilder(s).reverse().toString());
    }
}