// https://time.geekbang.org/column/article/67856 遍历
// 二叉查找树/二叉搜索树（BST——Binary Search Tree）是二叉树的一种，它规定在左子节点上存储小（比父节点）的值，在右子节点上（比父节点）存储大（或等于）的值。
// 双向链表来实现二叉搜索树中的每一个节点。双向链表DoubleLinkedList类来模拟树中的节点，在DoubleLinkedList类中，每一个节点有三个属性：element、next和prev。

// 二叉查找树 == 顺序二叉树 ==  二叉排序树 == 二叉搜索树 ： 左子树小于根节点，右子树大于根节点，子树也满足这样的条件
//    *
//    *       8                        
//    *      / \                      
//    *     3   10 
//    *    / \    \                  
//    *   2   6    14                  
//    *  /   / \
//    * 1   4   7

// 排序二叉树： 左子树小于根节点，右子树大于根节点，子树也满足这样的条件，这样的树叫做排序二叉树。

// 访问树的所有节点有三种方式：中序、先序、后序。)
// 先序遍历：节点本身 => 左侧子节点 => 右侧子节点
// 中序遍历：左侧子节点 => 节点本身 => 右侧子节点
// 后序遍历：左侧子节点  => 右侧子节点=> 节点本身
let Node = function (element) {
  this.element = element;
  this.next = null;
  this.prev = null;
};

class BinarySearchTree {
  constructor () {
      this.root = null;
  }

  // 向树中插入一个节点
  insert (key) {
    let newNode = new Node(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    // console.log(this.root) // null 11
  }

  insertNode = function (node, newNode) {
    if (newNode.element < node.element) {
        if (node.prev === null) node.prev = newNode;
        else this.insertNode(node.prev, newNode);
    } else {
        if (node.next === null) node.next = newNode;
        else this.insertNode(node.next, newNode);
    }
  }

  // 通过先序遍历方式遍历树中的所有节点
  preOrderTraverseNode (node, callback) {
    if (node !== null) {
        callback(node.element);
        this.preOrderTraverseNode(node.prev, callback);
        this.preOrderTraverseNode(node.next, callback);
    }
  }

  // 通过中序遍历方式遍历树中的所有节点
  inOrderTraverseNode (node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.prev, callback);
      callback(node.element);
      this.inOrderTraverseNode(node.next, callback);
    }
  }
  // 通过后序遍历方式遍历树中的所有节点
  postOrderTraverseNode (node, callback) {
    if (node !== null) {
        this.postOrderTraverseNode(node.prev, callback);
        this.postOrderTraverseNode(node.next, callback);
        callback(node.element);
    }
  }

  // 通过先序遍历方式遍历树中的所有节点
  preOrderTraverse (callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  // 通过中序遍历方式遍历树中的所有节点
  inOrderTraverse (callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  // 通过后序遍历方式遍历树中的所有节点
  postOrderTraverse (callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  // 返回树中的最小节点
  minNode = function (node) {
    if (node === null) return null;
    while (node && node.prev !== null) {
        node = node.prev;
    }
    return node;
  }

  // 返回树中的最大节点
  maxNode = function (node) {
    if (node === null) return null;
    while (node && node.next !== null) {
        node = node.next;
    }
    return node;
  }

  searchNode = function (node, key) {
    if (node === null) return null;
    if (key < node.element) return this.searchNode(node.prev, key);
    else if (key > node.element) return this.searchNode(node.next, key);
    else return node;
  }

  // 从树中移除一个节点
  removeNode = function (node, key) {
    if (node === null) return null;

    if (key < node.element) {
        node.prev = this.removeNode(node.prev, key);
        return node;
    }
    else if (key > node.element) {
        node.next = this.removeNode(node.next, key);
        return node;
    }
    else {
        // 第一种情况：一个叶子节点（没有子节点）
        if (node.prev === null && node.next === null) {
            node = null;
            return node;
        }
        // 第二种情况：只包含一个子节点
        if (node.prev === null) {
            node = node.next;
            return node;
        }
        else if (node.next === null) {
            node = node.prev;
            return node;
        }

        // 第三种情况：有两个子节点
        let aux = this.minNode(node.next);
        node.element = aux.element;
        node.next = this.removeNode(node.next, aux.element);
        return node;
    }
  }
}

let tree = new BinarySearchTree();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(2);
tree.insert(6);
tree.insert(14);
tree.insert(1);
tree.insert(4);
tree.insert(7);

// 先序号遍历
tree.preOrderTraverse((value) => console.log(value));

// 先序号遍历
// tree.inOrderTraverse((value) => console.log(value));


