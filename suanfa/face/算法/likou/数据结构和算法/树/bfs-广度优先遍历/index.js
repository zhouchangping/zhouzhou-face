// 该方法是以横向的维度对dom树进行遍历，从该节点的第一个子节点开始，遍历其所有的兄弟节点，再遍历第一个节点的子节点，完成该遍历之后，暂时不深入，开始遍历其兄弟节点的子节点 他的遍历层级依次是
// div=>ul=>p=>button=>li=>li=>li=>a=>span=>img
//将dom 抽象成树
var nodeList = []
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

function BFS (node, nodeList) {
  //由于是广度优先，for循环不是很优雅，我们可以使用队列来解决
  if (node) {
    var q = [node]
    while (q.length > 0) {
      var item = q.shift()
      nodeList.push(item.tag)
      if (item.children) {
        item.children.forEach(e => {
          q.push(e)
        })
      }

    }
  }
}
BFS(dom, nodeList)
console.log(nodeList)



