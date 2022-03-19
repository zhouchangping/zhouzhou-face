// 将一个问题拆成几个子问题，分别求解这些子问题，即可推断出大问题的解。
// 如果一个奇葩国家的钞票面额分别是1、5、11，那么我们在凑出15的时候，
// https://www.zhihu.com/question/23995189
function a(n) {
  let i = 0,
  con = 0,
  arr = [];
  for (let i = 0; i <= n; i++) {
    if (i - 1 >= 0) {
      con = Math.min(con, arr[i-1] + 1)
    }
    if (i - 5 >= 0) {
      con = Math.min(con, arr[i-5] + 1)
    }
    if (i - 11 >= 0) {
      con = Math.min(con, arr[i-11] + 1)
    }
    arr[i] = con
    console.log(con)
    // console.log(i + '---' + arr[i])
  }
  return con;
}

const result = a(15)
console.log(result)