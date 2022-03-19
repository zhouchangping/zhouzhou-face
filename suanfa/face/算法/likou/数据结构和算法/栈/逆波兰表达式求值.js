// 输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// 栈
class Stack {
  constructor() {
      this._data = []
  }
  push(e) {
      this._data.push(e)
  }
  pop() {
      return this._data.pop()
  }
}

const SIGN = {
  '*': (a, b) => a * b,
  '/': (a, b) => a / b | 0,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b
}

var evalRPN = function(tokens) {
  const stack = new Stack()
  tokens.forEach(item => {
    if (item in SIGN) {
      const b = stack.pop()
      const a = stack.pop()
      const res = SIGN[item](a, b)
      stack.push(res)
    } else {
      stack.push(+item)
    }
  })
  return stack.pop()
};


// 逆序递归
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const map = {
      '*' : (a, b) => a * b,
      '/' : (a, b) => parseInt(a / b, 10),
      '+' : (a, b) => a + b,
      '-' : (a, b) => a - b
  }
  let fun = () => {
      let char = tokens.pop();
      if(map[char]){
          let num = fun();//由于减法和除法的存在顺序问题
          return map[char](fun(), num);
      }else{
          return parseInt(char, 10);
      }  
  }
  return fun();
};


// 数组模拟栈解法 用时84ms 内存37.3MB
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let arr = [];
    let index = 0;
    let nowIdx;
    for (let char of tokens) {
        switch (char) {
        case "+":
            nowIdx = index - 2;
            index--;
            arr[nowIdx] += arr[index];
            break;
        case "-":
            nowIdx = index - 2;
            index--;
            arr[nowIdx] -= arr[index];
            break;
        case "*":
            nowIdx = index - 2;
            index--;
            arr[nowIdx] *= arr[index];
            break;
        case "/":
            nowIdx = index - 2;
            index--;
            arr[nowIdx] = parseInt(arr[nowIdx] / arr[index], 10);
            break;
        default:
            arr[index] = parseInt(char, 10);
            index++;
        }
    }
    return arr[0];
};
