/*
 * @Author: zhouchangping
 * @Date: 2022-02-18 16:26:04
 * @LastEditTime: 2022-02-18 16:31:45
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/千分位.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
function format (num) {  
  var reg=/\d{1,3}(?=(\d{3})+$)/g;   
  return (num + '').replace(reg, '$&,');  
}
1、正则表达式 \d{1,3}(?=(\d{3})+$)  表示前面有1~3个数字，后面的至少由一组3个数字结尾
2、?=表示正向引用，可以作为匹配的条件，但匹配到的内容不获取，并且作为下一次查询的开始
3、$& 表示与正则表达式相匹配的内容，具体的可查看 w3school的replace()方法




function format(num){  
  num=num+'';//数字转字符串  
  var str="";//字符串累加  
  for(var i=num.length- 1,j=1;i>=0;i--,j++){  
      if(j%3==0 && i!=0){//每隔三位加逗号，过滤正好在第一个数字的情况  
          str+=num[i]+",";//加千分位逗号  
          continue;  
      }  
      str+=num[i];//倒着累加数字
  }  
  return str.split('').reverse().join("");//字符串=>数组=>反转=>字符串  
}


function format(num) {
  var str = num+'';
  // ["8", "7", "6", "5", "4", "3", "2", "1"]
  return str.split("").reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev;
  })
}
console.log(format(12345678));