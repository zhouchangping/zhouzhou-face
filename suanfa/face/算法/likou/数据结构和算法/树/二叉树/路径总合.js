// 思路
// sum —— 从根节点到叶子节点的路径上的节点值相加的目标和
// 递归。转为判断：左、右子树中能否找出和为 sum - root.val 的路径
// 每遍历一个节点，sum 就减去当前节点值，当遍历到叶子节点时，已经没有子节点了，如果 sum - 当前叶子节点值 == 0 ，就是找到了从根节点到叶子节点的和为 sum 的路径
// 时间复杂度：O(n)，每个节点被遍历一次
const hasPathSum = (root, sum) => {
  if (root == null) return false;                // 遍历到null节点
  if (root.left == null && root.right == null) { // 遍历到叶子节点
    return sum - root.val == 0;                  // 如果满足这个就返回true
  }
  console.log(root.val)
  return hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val);      // 大问题转成两个子树的问题
}



var hasPathSum = function(root, sum, total = 0) { // dns
  if(!root) return false                                                         
  total += root.val                                              // 和累加
  if(sum === total && !root.left && !root.right) return true    // 当 和 等于 sum 且 该节点是子叶点 返回true
  return hasPathSum(root.left, sum, total) || hasPathSum(root.right, sum, total)
};

var hasPathSum = function (root, sum) { // bfs
  if (root === null) return false;
  let que = [
    root
  ]
  let quePath = [
    root.val
  ]
  while(que) {
    let node = que.shift();
    let temp = quePath.shift()
    if (node.left === null && node.right === null && path === sum) return true;
    if (node.left) {
      que.push(node.left)
      quePath.push(node.left.val+temp)
    }
    if (node.right) {
      que.push(node.right)
      quePath.push(node.right.val+temp)
    }
  }
}

