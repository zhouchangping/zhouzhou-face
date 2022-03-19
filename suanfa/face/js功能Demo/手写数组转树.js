/*
 * @Author: zhouchangping
 * @Date: 2021-05-11 16:41:57
 * @LastEditTime: 2022-02-18 15:50:03
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/手写数组转树.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
let array = [
  {
    id: 1, val: '学校', parentId: null,
  },
  {
    id: 2, val: "班级1", parentId: 1,
  },
  {
    id: 3, val: "班级2", parentId: 1,
  },
  {
    id: 4, val: "学生1", parentId: 2,
  },
  {
    id: 5, val: "学生2", parentId: 2,
  },
  {
    id: 6, val: "学生3", parentId: 3,
  } 
]
function arrayToTree(array) {
  let root = array[0];
  array.shift(); // 获取剩余的数组
  let tree = {
    id: root.id,
    val: root.val,
    children: array.length > 0 ? toTree(root.id, array) : []
  }
  return tree;
}

function toTree(parentId, array) {
  let children = [];
  for (let i = 0; i < array.length; i++) {
    let node = array[i];
    if (node.parentId === parentId) {
      children.push({
        id: node.id,
        val: node.val,
        children: toTree(node.id, array)
      });
    }
  }
  return children;
}
console.log(arrayToTree(array))






function arrayToTree(array) {
  let root = array[0];
  array.shift();
  let tree = {
    id: root.id,
    val: root.val,
    children: array.length > 0 ? toTree(root.id, array) : []
  }
  return tree;
}
function toTree(parentId, array) {
  let children = [];
  for (let i = 0; i < array.length; i++) {
    let node = array[i];
    if (node.parentId == parentId) {
      children.push( {
        id: node.id, 
        val: node.val,
        children: toTree(node.id, array)
      })
    }
  }
  return children;
}