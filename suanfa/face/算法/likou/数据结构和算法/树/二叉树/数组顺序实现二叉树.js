
//    *        1                        
//    *      /   \                      
//    *     2     3 
//    *    / \   / \                  
//    *   4   5 6   7                 


let Node = function (element) {
  this.key = element;
  this.right = null;
  this.left = null;
};
// 按数组顺序遍历实现二叉树
// let list = [1, 2, 3, 'a', 'b', 4, 5, 6, 7, 8, 9, 7, 3, 1, 2]
let list = [1,2,3,4,5,6,7]
function createTree(list, start) {
  // if (list[start] == '#') {
  //   return 'x';
  // }
  // console.log(list[start])
  let root = new Node(list[start]);
  let lnode = 2*start + 1; // 2 5 11
  let rnode = 2*start + 2; // 2 6 12
  if ( lnode > list.length -1) { // 6
      root.left = null;
  }else{
      root.left = createTree(list, lnode);
  }
  if (rnode > list.length -1) {
      root.right = null;
  }else{
      root.right = createTree(list, rnode);
  }
  return root;
}
const root = createTree(list, 0)
preOrderTraverseNode(root)
function preOrderTraverseNode (node) {
  if (node !== null) {
      console.log(node.key);
      preOrderTraverseNode(node.left);
      preOrderTraverseNode(node.right);
  }
}