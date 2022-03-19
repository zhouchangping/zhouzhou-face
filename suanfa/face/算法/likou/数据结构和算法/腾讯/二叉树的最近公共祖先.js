var lowestCommonAncestor = function (root, p, q) { // 递归+后序遍历（左右自己）
  if (root == p || root == q || root == null) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left != null && right != null) {
    return root;
  }
  if (left == null && right != null) {
    return right;
  } else if (right == null && left != null) {
    return left;
  } else {
    return null;
  }
}

var lowestCommonAncestor = function(root, p, q) {
  // 1. 确定递归的函数
  const travelTree = function(root,p,q) {
      // 2. 确定递归终止条件
      if(root === null || root === p||root === q) {
          return root;
      }
      // 3. 确定递归单层逻辑
      let left = travelTree(root.left,p,q);
      let right = travelTree(root.right,p,q);
      //如果在某一个节点的左右子树都能找到p和q说明这个节点就是公共祖先
      if(left !== null&&right !== null) {
          return root;
      }
      if(left ===null) {//如果左子树没找到就说明p，q都在右子树
          return right;
      }
      return left;//如果右子树没找到就说明p，q都在左子树
  }
 return  travelTree(root,p,q);//递归开始
};

var lowestCommonAncestor = function (root, p, q) {
  let map = new Map();
  let set = new Set();
  dfs(root);
  function dfs(root) {
    if (root.left != null) {
      map.set(root.left.val, root);
      dfs(root.left)
    }
    if (root.right != null) {
      map.set(root.right.val, root);
      dfs(root.right);
    }
  }
  while (p != null) {
    set.add(p.val);
    p = map.get(p.val);
  }
  while (q != null) {
    if (set.has(q.val)) {
      return q;
    }
    q = map.get(q.val);
  }
  return null;
}

