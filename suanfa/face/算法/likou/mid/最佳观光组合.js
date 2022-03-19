// 给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。
// 一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。
function a(x) {
  let re = 0;
  for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length; j++) {
      re = Math.max(re, x[i] + x[j] + i -j);
    }
  }
  return re;
}