function a(p1, p2) {
  if (p1 == null && p2 == null) {
    return true;
  }
  if (p1 == null || p2 == null) {
    return false;
  }
  return (p1.val == p2.val) && a(p1.left, p2.right) && a(p1.right, p2.left)
}