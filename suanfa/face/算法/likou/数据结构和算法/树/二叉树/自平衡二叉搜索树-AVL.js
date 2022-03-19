
// // 自平衡二叉搜索树（AVL——Adelson-Velskii-Landi）在AVL中，任何一个节点左右两棵子树的高度之差最多为1，添加或移除节点时，AVL树会尝试自平衡 节点的平衡因子 = 左子树的高度 - 右子树的高度
// // 尽管自平衡二叉搜索树AVL可以很有效地帮助我们解决许多树节点的操作问题，但是在插入和移除节点时其性能并不是最好的。更好的选择是红黑树，红黑树也是一种自平衡二叉搜索树，但是它对其中的节点做了很多特殊的规定，使得在操作树节点的性能上要优于AVL
// AVL树：
// AVL树是一种自平衡二叉搜索树，AVL树本质上是带了平衡功能的二叉查找树（二叉排序树，二叉搜索树），在AVL树中任何节点的两个子树的高度最大差别为一，也就是说这种树会在添加或移除节点时尽量试着成为一棵完全树，所以它也被称为高度平衡树。查找、插入和删除在平均和最坏情况下都是 O（log n），增加和删除可能需要通过一次或多次树旋转来重新平衡这个树。
// 红黑树：
// 红黑树和AVL树类似，都是在进行插入和删除操作时通过特定操作保持二叉查找树的平衡，从而获得较高的查找性能；它虽然是复杂的，但它的最坏情况运行时间也是非常良好的，并且在实践中是高效的：它可以在O(log n)时间内做查找，插入和删除，这里的 n 是树中元素的数目。

// class AVLTree extends BinarySearchTree {
//   constructor () {
//       super();
//   }
//   // 计算节点的高度
//   getNodeHeight (node) {
//       if (node === null) return 0;
//       return Math.max(this.getNodeHeight(node.prev), this.getNodeHeight(node.next)) + 1;
//   };
//   /**
//    * LL旋转: 向右旋转
//    *
//    *       b                           a
//    *      / \                         / \
//    *     a   e -> rotationLL(b) ->   c   b
//    *    / \                         /   / \
//    *   c   d                       f   d   e
//    *  /
//    * f
//    *
//    * @param node Node<T>
//    */
//   rotationLL(node) {
//     let tmp = node.prev;
//     node.prev = tmp.next;
//     tmp.next = node;
//     return tmp;
//   }

//   /**
//   * RR旋转: 向左旋转
//   *
//   *     a                              b
//   *    / \                            / \
//   *   c   b   -> rotationRR(a) ->    a   e
//   *      / \                        / \   \
//   *     d   e                      c   d   f
//   *          \
//   *           f
//   *
//   * @param node Node<T>
//   */
//   rotationRR(node) {
//     let tmp = node.next;
//     node.next = tmp.prev;
//     tmp.prev = node;
//     return tmp;
//   }

//   /**
//   * LR旋转: 先向左旋转，然后再向右旋转
//   * @param node Node<T>
//   */
//   rotationLR(node) {
//     node.prev = this.rotationRR(node.prev);
//     return this.rotationLL(node);
//   }

//   /**
//   * RL旋转: 先向右旋转，然后再向左旋转
//   * @param node Node<T>
//   */
//   rotationRL(node) {
//     node.next = this.rotationLL(node.next);
//     return this.rotationRR(node);
//   }

//   insert (key) {
//     super.insert(key);

//     // 左子树高度大于右子树高度
//     if (this.getNodeHeight(this.root.prev) - this.getNodeHeight(this.root.next) > 1) {
//         if (key < this.root.prev.element) {
//             this.root = this.rotationLL(this.root);
//         }
//         else {
//             this.root = this.rotationLR(this.root);
//         }
//     }
//     // 右子树高度大于左子树高度
//     else if (this.getNodeHeight(this.root.next) - this.getNodeHeight(this.root.prev) > 1) {
//         if (key > this.root.next.element) {
//             this.root = this.rotationRR(this.root);
//         }
//         else {
//             this.root = this.rotationRL(this.root);
//         }
//     }
//   }
//   remove (key) {
//     super.remove(key);

//     // 左子树高度大于右子树高度
//     if (this.getNodeHeight(this.root.prev) - this.getNodeHeight(this.root.next) > 1) {
//       if (key < this.root.prev.element) {
//           this.root = this.rotationLL(this.root);
//       }
//       else {
//           this.root = this.rotationLR(this.root);
//       }
//     }
//     // 右子树高度大于左子树高度
//     else if (this.getNodeHeight(this.root.next) - this.getNodeHeight(this.root.prev) > 1) {
//         if (key > this.root.next.element) {
//             this.root = this.rotationRR(this.root);
//         }
//         else {
//             this.root = this.rotationRL(this.root);
//         }
//     }
//   }
// }

// let tree = new AVLTree();
// tree.insert(11);
// tree.insert(7);
// tree.insert(15);
// tree.insert(5);
// tree.insert(9);
// tree.insert(13);
// tree.insert(20);
// tree.insert(3);
// tree.insert(6);
// tree.insert(8);
// tree.insert(10);
// tree.insert(12);
// tree.insert(14);
// tree.insert(18);
// tree.insert(25);

