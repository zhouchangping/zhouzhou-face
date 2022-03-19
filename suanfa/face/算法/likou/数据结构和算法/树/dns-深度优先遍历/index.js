// 纵向的维度对dom树进行遍历，从一个dom节点开始，一直遍历其子节点，直到它的所有子节点都被遍历完毕之后再遍历它的兄弟节点，如此往复，直到遍历完他所有的节点
// div=>ul=>li=>a=>img=>li=>span=>li=>p=>button
//将dom 抽象成树

var dom = {
  tag: 'div',
  children: [
      {
          tag: 'ul',
          children: [
              {
                  tag: 'li',
                  children: [
                      {
                          tag: 'a',
                          children: [
                              {
                                  tag: 'img'
                              }
                          ]
                      }

                  ]
              },
              {
                  tag: 'li',
                  children: [
                      {
                          tag: 'span'
                      }
                  ]
              },
              {
                  tag: 'li'
              }
          ]
      },
      {
          tag: 'p'
      },
      {
          tag: 'button'
      }
  ]
}
var nodeList = []
//深度优先遍历算法
function DFS(node, nodeList) {
  if (node) {
      nodeList.push(node.tag);
      var children = node.children;
      if (children) {
          for (var i = 0; i < children.length; i++) {
              //每次递归的时候将 需要遍历的节点 和 节点所存储的数组传下去
              DFS(children[i], nodeList);
          }
      }
  }
  return nodeList;
}
DFS(dom, nodeList)
console.log(nodeList)
