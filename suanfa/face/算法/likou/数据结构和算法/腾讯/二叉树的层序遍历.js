// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
// 广度优先遍历
var levelOrder = function (root) {
  let ret = [];
  if (!root) {
    return ret;
  }
  let q = [];
  q.push(root);
  while (q.length != 0) {
    let currentLenth = q.length;
    ret.push([]);
    for (let i = 0; i < currentLenth; i++) {
      const node = q.shift();
      ret[ret.length-1].push(node.val);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
  }
  return ret;
}