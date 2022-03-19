function a(nums) {
  let re = [];
  for (let j = 1; j < nums + 1; j++) {
    if (j == 1) {
      re.push([1])
      continue;
    }
    let arr = [];
    for (let i = 0; i < j; i++) {
      if (i == 0 || i == j - 1) {
        arr.push(1);
      } else {

        arr.push(re[j-2][i-1] + re[j-2][i])
      }
    }
    re.push(arr);
  }
  return re;
}
const result = a(5);
console.log(result)