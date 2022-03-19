var binaryTreePaths = function(root) { // dns
  const paths = [];
  const construct_paths = (root, path) => {
      if (root) {
          path += root.val.toString();
          if (root.left === null && root.right === null) { // 当前节点是叶子节点
              paths.push(path); // 把路径加入到答案中
          } else {
              path += "->"; // 当前节点不是叶子节点，继续递归遍历
              construct_paths(root.left, path);
              construct_paths(root.right, path);
          }
      }
  }
  construct_paths(root, "");
  return paths;
};


var binaryTreePaths = function(root) {
  const paths = [];
  if (root === null) {
      return paths;
  }
  const node_queue = [root];
  const path_queue = [root.val.toString()];

  while (node_queue.length) {
      const node = node_queue.shift(); 
      const path = path_queue.shift();

      if (node.left === null && node.right === null) {
          paths.push(path);
      } else {
          if (node.left !== null) {
              node_queue.push(node.left);
              path_queue.push(path + "->" + node.left.val.toString());
          }

          if (node.right !== null) {
              node_queue.push(node.right);
              path_queue.push(path + "->" + node.right.val.toString());
          }
      }
  }
  return paths;
};
