const getIntersectionNode = function (headA, headB) {
  const visited = new Set();
  let temp = headA;
  while (temp != null) {
    visited.add(temp);
    temp = temp.next; 
  }
  temp = headB;
  while (temp != null) {
    if (visited.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
}

const getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) {
    return null;
  }
  let pa = headA; let pb = headB;
  while (pa != pb) {
    headA = headA == null ? headB : headA.next;
    headB = headB == null ? headA : headA.next;
  }
  return pa;
}