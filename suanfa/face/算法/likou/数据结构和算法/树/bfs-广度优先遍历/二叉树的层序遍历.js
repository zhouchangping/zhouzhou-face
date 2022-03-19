/*
 * @Author: zhouchangping
 * @Date: 2021-01-05 17:13:32
 * @LastEditTime: 2022-02-15 14:51:04
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/likou/数据结构和算法/树/bfs-广度优先遍历/二叉树的层序遍历.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
var levelOrder = function(root) {
  const ret = [];
  if (!root) {
      return ret;
  }

  const q = [];
  q.push(root); // 放入队列，依次取出
  while (q.length !== 0) {
      const currentLevelSize = q.length;
      ret.push([]);
      for (let i = 1; i <= currentLevelSize; ++i) { // 依次取出当前层
          const node = q.shift();
          ret[ret.length - 1].push(node.val);
          if (node.left) q.push(node.left);
          if (node.right) q.push(node.right);
      }
  }
      
  return ret;
};


// 前序遍历，不实用递归
function preOrder(root){
  let res=[],
  stack=[root];
  while(stack.length>0){
      let node=stack.pop();
      res.push(node.val);
      if(node.right){
          stack.push(node.right);
      }
      if(node.left){
          stack.push(node.right);
      }

  }
  return res;
}
