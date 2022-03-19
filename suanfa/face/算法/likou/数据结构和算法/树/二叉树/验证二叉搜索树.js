var isValidBST = function(root) {
  let stack = [];
  let inorder = -Infinity;

  while (stack.length || root !== null) {
      while (root !== null) {
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
      if (root.val <= inorder) {
          return false;
      }
      inorder = root.val;
      root = root.right;
  }
  return true;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} pre 当前节点值的下限
 * @param {TreeNode} next 当前节点值的上限
 * @return {boolean}
 */
var isValidBST = function(root, pre = null, next = null) {
  if (!root) return true;
  // 在这里打印日志可以很好的观察到遍历顺序以及每个节点到底与哪些上下限进行了比较
  // console.log(root && root.val, pre && pre.val, next && next.val);
  if (pre && pre.val >= root.val) return false;
  if (next && next.val <= root.val) return false;
  return isValidBST(root.left, pre, root) && isValidBST(root.right, root, next);
};

