function subQuence(b, a) { // 子序列一般连续 b是否为a的子序列
  let bi = 0, ai = 0;
  while(bi < b.length) {
    if (b[bi] === a[ai]) {
      bi++;
    }
    ai++;
    if (ai > a.length) return false;
  }
  return true;
}