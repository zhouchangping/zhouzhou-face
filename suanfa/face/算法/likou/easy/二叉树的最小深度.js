function TreeNode(val) { // [1,2,3,4,5,6,7]
	this.val = val;
	this.left = this.right = null;
}
let root = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
let node4 = new TreeNode(4)
let node5 = new TreeNode(5)
let node6 = new TreeNode(6)
let node7 = new TreeNode(7)
let node8 = new TreeNode(8)
root.left = node2
root.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7
node4.right = node8

// 方法一：递归
// var minDepth = function(root) {
//   if(root == null) {
//       return 0;
//   }
//   if(root.left == null && root.right == null) {
//       return 1;
//   }
//   let ans = Number.MAX_SAFE_INTEGER;
//   if(root.left != null) {
//       ans = Math.min(minDepth(root.left), ans);
//   }
//   if(root.right != null) {
//       ans = Math.min(minDepth(root.right), ans);
//   }
//   return ans + 1;
// };



// DFS
var minDepth = function (root) {
  if (!root) return 0;
  let level = 0;
  let queue = [root];

  while (queue.length) {
    level += 1;
    let len = queue.length;
    while (len--) {
      let node = queue.shift();
      if (!node.left && !node.right) {
        return level;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return level;
};



const result = minDepth(root);
console.log(result)

