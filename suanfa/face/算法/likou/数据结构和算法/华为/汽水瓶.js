/*
 * @Author: zhouchangping
 * @Date: 2022-01-12 10:23:48
 * @LastEditTime: 2022-01-18 09:15:40
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/likou/数据结构和算法/华为/汽水瓶.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// https://www.nowcoder.com/ta/huawei


// 完全数，除了本身，其他因素相加等于自己
let a;
while (a = parseInt(readline())) {
    let b = 0;
    let c = 0;
    for (let i = 2; i <= a; i++) {
        let b = 0;
        for (let j = 1; j <= i / 2; j++) {
            if (i % j == 0) {
                b = b + j;
            }
        }
        if (b == i) {
            c = c+1;
//             console.log(b)
        }
    }
    console.log(c)
}

// 数字颠倒
let s = 1516000
let ss = s+''
console.log(ss.split('').reverse().toString().replace(/,/g, ''))

// 杨辉三角变形，求某一行的偶数    杨辉三角如何输出
var line;
while(line=readline()){
  console.log(fun(parseInt(line)));
}
function fun(a){
    if(a==1||a==2){
        return -1;
    }else if(a%2==1){
        return 2;
    }else if(a%4==0){
        return 3;
    }else{
        return 4;
    }
}

// 表达式求值 3+2*{1+2*[-4/(8-6)+7]}
const opsMap = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
};
 
const calc = (nums = [], ops = []) => {
//   console.log(nums, ops)
  if (nums.length < 2 || ops.length === 0) return;
  const op = ops.pop();
  const b = ~~nums.pop();
  const a = ~~nums.pop();
//   console.log(op, a, b)
 
  switch (op) {
    case "+":
      nums.push(a + b);
      break;
    case "-":
      nums.push(a - b);
      break;
    case "*":
      nums.push(a * b);
      break;
    default:
      nums.push(a / b);
  }
};
 
const calculator = (str = "") => {
  const cs = str.split("");
  const nums = [0];
  const ops = [];
 
  for (let i = 0; i < cs.length; i++) {
    let c = cs[i];
    if (c === "(") {
      // 入栈
      ops.push("(");
      if (cs[i + 1] === "-" || cs[i + 1] === "+") {
        nums.push(0);
      }
    } else if (c === ")") {
      while (ops.length) {
        if (ops[ops.length - 1] !== "(") {
          calc(nums, ops);
        } else {
          ops.pop();
          break;
        }
      }
    } else {
      if (/\d/.test(c)) {
        while (i + 1 < cs.length && /\d/.test(cs[i + 1])) {
          c += cs[i + 1];
          i++;
        }
        nums.push(c);
      } else {
        // 加减乘除
        while (ops.length && ops[ops.length - 1] !== "(") {
          // 根据优先级进行运算
          const topOp = ops[ops.length - 1];
          if (opsMap[topOp] >= opsMap[c]) {
            calc(nums, ops);
          } else {
            break;
          }
        }
        ops.push(c);
      }
    }
  }
  while (ops.length) calc(nums, ops);
  return nums[nums.length - 1];
};
 
while(input = readline()) {
  console.log(calculator(input))
}


// 放苹果
function getCount(m, n) {
  if (m == 0 || n == 1) {
      return 1;
  } else if (n > m) {
      return getCount(m, m);
  } else {
      return getCount(m, n - 1)+ getCount(m - n, n);
  }
}

// 最小公倍数
function getO(a, b) {
  if (a > b) {
      let i = 1;
      while ((a * i) % b !== 0 ) {
          i++
      }
      return a * i;
  } else if (b > a) {
      let j = 1;
      while ((b * j) % a !== 0 ) {
          j++
      }
      return b * j
  } else {
      return a || b;
  }
}
let re = getO(5, 7);
console.log(re)
let B_ = A_.split(' ')
let C_=0;
let data = B_[0] *B_[1]
for(let i = 1 ; i <=data ; i++){
    if(i%B_[0]==0 && i%B_[1]==0) {
        C_ = i
        break;
    }
}
console.log(C_)

let [A, B] = readline().split(' ')
 
let min = Math.min(parseInt(A), parseInt(B));
let max = Math.max(parseInt(A), parseInt(B));
let res = min * max;
for (let i = max - 1; i * min >= max; i--) {
    let temp = i * min;
    if (temp % max === 0) {
        res = temp
    }
}
console.log(res)


// 等差数列公式
// 利用等差数列前n项和公式 n(a1+aN)/2
// 等差数列{an}的通项公式为：an=a1+(n-1)d。前n项和公式为：Sn=n*a1+n(n-1)d/2或Sn=n(a1+an)/2
while(line = readline()) {
  const num = parseInt(line);
  print(num * (2 + 2 + 3*(num -1)) / 2);
}


// 字符串反转
var name = "I am a student";
var resultStr = name.split('').reverse().join(''); 
console.log(resultStr);  // HW si ytic yM


// 走方格的方案数
while (line = readline())
function sum(m, n) {
  if (m == 0 || n == 0) {
    return 1;
  }
  return sum(m, n - 1) + sum(m - 1, n)
}
console.log(sum(4, 4))



// 查找输入整数二进制中1的个数
let str;
while(str = readline()){
  let two = parseInt(str).toString(2);
  let arr = two.split('');
  let num = 0;
  arr.forEach((v)=>{
    if(v == '1'){
      num++;
    }
  })
  console.log(num)
}