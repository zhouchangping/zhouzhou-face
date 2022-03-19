function isSubSquence(b, a) {
  let bi = 0;
  let ai = 0;
  while(bi < b.length) {
    if (a[ai] === b[bi]) {
      b++;
    }
    a++;
    if (ai > a.length) {
      return false;
    }
  }
  return true;
}