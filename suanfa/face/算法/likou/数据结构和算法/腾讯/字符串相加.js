// var addStrings = function(num1, num2) {
//   if (num1.length == 0) {
//       return num2;
//   }
//   if (num2.length == 0) {
//       return num1;
//   }
//   let numOne = num1.length > num2.length ? num2 : num1;
//   let numTow = num1.length > num2.length ? num1 : num2;
//   let len = numTow.length - numOne.length;
//   let info = false;
//   let stack = '';
//   let sum = 0;

//   for (let i = numOne.length - 1; i >= 0; i--) {
//     if (info) {
//       sum = Number(numOne[i])+Number(numTow[len+i]) + 1;
//     } else {
//       sum = Number(numOne[i])+Number(numTow[len+i]);
//     }
//     console.log(numOne[i])
//     console.log(numTow[len+i])
//     console.log(sum, '---')
//     let temp = sum % 10;
//     console.log(temp, '-------')
//     stack = temp+ stack;
//     if (sum >= 10) {
//       info = true;
//     } else {
//       info = false;
//     }
//   }

//   let other = numTow.slice(0, len)
//   let stacks = '';
//   let sums = 0;
//   for (let j = len -1; j >= 0; j--) {
//     if (info) {
//       sums = Number(other[j])+1;
//     } else {
//       sums = other[j] + sums;
//     }
//   }
//   return sums + stack
// };



var addStrings = function(num1, num2) {
  let i = num1.length - 1, j = num2.length - 1, add = 0;
  const ans = [];
  while (i >= 0 || j >= 0 || add != 0) {
    console.log(num1.charAt(i) - '0')
      const x = i >= 0 ? num1.charAt(i) - '0' : 0;
      const y = j >= 0 ? num2.charAt(j) - '0' : 0;
      const result = x + y + add;
      ans.push(result % 10);
      add = Math.floor(result / 10);
      i -= 1;
      j -= 1;
  }
  return ans.reverse().join('');
};

const num1 = '456';
const num2 = '77';
const result = addStrings(num1, num2);
console.log(result)