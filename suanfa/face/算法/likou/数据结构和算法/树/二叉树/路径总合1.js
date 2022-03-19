/*
 * @Author: zhouchangping
 * @Date: 2022-03-07 17:38:11
 * @LastEditTime: 2022-03-07 18:02:17
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/算法/likou/数据结构和算法/树/二叉树/路径总合1.js
 * 可以输入预定的版权声明、个性签名、空行等
 */


// 求一个二叉树所有根节点到叶子节点的路径所组成数字的和function sumTree(root,sum=0) {
const dfs = (root, presum)=> {
  if (root == null) {
    return 0;
  }
  const sum = presum * 10 + root.val;
  if (root.left == null && root.right == null) {
    return sum;
  }
  return dfs(root.left, sum) + dfs(root.right, sum)
}
// 时间复杂度：O(n)O(n)，其中 nn 是二叉树的节点个数。对每个节点访问一次。
// 空间复杂度：O(n)O(n)，其中 nn 是二叉树的节点个数。空间复杂度主要取决于递归调用的栈空间，递归栈的深度等于二叉树的高度，最坏情况下，二叉树的高度等于节点个数，空间复杂度为 O(n)O(n)。



var sumNumbers = function(root) {
  if (root === null) {
      return 0;
  }
  let sum = 0;
  const nodeQueue = [];
  const numQueue = [];
  nodeQueue.push(root);
  numQueue.push(root.val);
  while (nodeQueue.length) {
      const node = nodeQueue.shift();
      const num = numQueue.shift();
      const left = node.left, right = node.right;
      if (left === null && right === null) {
          sum += num;
      } else {
          if (left !== null) {
              nodeQueue.push(left);
              numQueue.push(num * 10 + left.val);
          }
          if (right !== null) {
              nodeQueue.push(right);
              numQueue.push(num * 10 + right.val);
          }
      }
  }
  return sum;
};
