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

// https://blog.csdn.net/qq_40816360/article/details/95322779
//广度优先： 使用队列实现,未访问的元素入队,访问后则出队,并将其左右子元素入队,直到叶子元素结束. BFS
//是从左至右，对树的每一层所有结点依次遍历，当一层的结点遍历完全后，对下一层开始遍历，而下一层结点又恰好是上一层的子结点。因此广搜的步骤符合队列先进先出的思想。
var levelOrder = function(root) {
	if(root == null) {
		return []
	}
	var result = [];
  let queue = [root]
	while(queue.length) {
		// 每一层的节点数
    let level = queue.length
    // console.log(queue)
		let currLevel = []
		// 每次遍历一层元素
		for(let i = 0;i < level;i++) {
			// 当前访问的节点出队
      let curr = queue.shift() // 出队列，删除了root
      // console.log(curr)
			// 出队节点的子女入队
			curr.left ? queue.push(curr.left) : ''
			curr.right ? queue.push(curr.right) : ''
			currLevel.push(curr.val)
    }
    console.log('----------')
    console.log(currLevel)
    console.log(result)
    result.concat(currLevel)
    console.log(result)
    // result.con(currLevel)
	}
	return result
};
const results = levelOrder(root)
// console.log(results)



// 深度优先搜索：是从上至下，对每一个分支一直往下一层遍历直到这个分支结束，然后返回上一层，对上一层的右子树这个分支继续深搜，直到一整棵树完全遍历，因此深搜的步骤符合栈后进先出的特点
// 深度优先遍历分先序遍历、后序遍历、中序遍历

// 前序遍历 递归版
// var preorderTraversal = function(root) {
//   let result = []
//   let preorder = (node)=> {
//     if (!node) {
//       return 
//     }
//     result.push(node.val);
//     preorder(node.left);
//     preorder(node.right)
//   }
//   preorder(root)
//   return result
// };


// // 中序遍历 递归版
// var inorderTraversal = function(root) {
//   let result = []
//   let inorder = (node) => {
//       if (!node) {
//           return
//       }
//       inorder(node.left);
//       result.push(node.val);
//       inorder(node.right);
//   }
//   inorder(root)
//   return result
// };

// // 后续遍历 递归版
// var postorderTraversal = function(root) {
//   let result = []
//   let inorder = (node) => {
//       if (!node) {
//           return
//       }
//       inorder(node.left);
//       inorder(node.right);
//       result.push(node.val);
//   }
//   inorder(root)
//   return result
// };

// const result1 = preorderTraversal(root)
// console.log(result1)

// const result2 = inorderTraversal(root)
// console.log(result2)

// const result3 = postorderTraversal(root)
// console.log(result3)


function a(root) {
  if (root == null) {
    return 0;
  } else {
    let left = a(root.left);
    let right = a(root.right);
    return Math.max(left, right) + 1;
  }
}
console.log(root)
const re = a(root);
console.log(re)