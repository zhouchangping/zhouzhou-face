
// 图
// 图最常见的实现是邻接矩阵；每个节点都和一个整数相关联，该整数将作为数组的索引。我 们用一个二维数组来表示顶点之间的连接。如果索引为 i 的节点和索引为 j 的节点相邻，则array[i][j] ===1，否则array[i][j] === 0
// 缺点：不是强连通的图（稀疏图）如果用邻接矩阵来表示，则矩阵中将会有很多0,这意味着我们 浪费了计算机存储空间来表示根本不存在的边；邻接矩阵表示法不够好的另一个理由是，图中顶点的 数量可能会改变，而2维数组不太灵活。

// 邻接表：邻接表由图中每个顶点的相邻顶 点列表所组成。存在好几种方式来表示这种数据结构。我们可以用列表（数组）、链表，甚至是 散列表或是字典来表示相邻顶点列表。
// 邻接表由图中每个顶点的相邻顶 点列表所组成。
class Dictionary {
  constructor() {
    this.items = {}
  }
  set(key, value) {
    this.items[key] = value
  }

  get(key) {
    return this.items[key]
  }

  remove(key) {
    delete this.items[key]
  }

  get keys() {
    return Object.keys(this.items)
  }

  get values() {
    /*
    也可以使用ES7中的values方法
    return Object.values(this.items)
    */

    // 在这里我们通过循环生成一个数组并输出
    return Object.keys(this.items).reduce((r, c, i) => {
        r.push(this.items[c])
        return r
    }, [])
  }
}


// const dictionary = new Dictionary()
// dictionary.set('Gandalf', 'gandalf@email.com')
// dictionary.set('John', 'johnsnow@email.com')
// dictionary.set('Tyrion', 'tyrion@email.com')

// console.log(dictionary)
// console.log(dictionary.keys)
// console.log(dictionary.values)
// console.log(dictionary.items)

// class Graph {
//     constructor() {
//         this.vertices = []
//         this.adjList = new Dictionary()
//     }

//     // 添加顶点
//     addVertex(v) {
//         this.vertices.push(v)
//         this.adjList.set(v, [])
//     }

//     // 添加线
//     addEdge(v, w) {
//         this.adjList.get(v).push(w)
//         this.adjList.get(w).push(v)
//     }

//     toString() {
//         console.log(this.adjList)
//         // return this.vertices.reduce((r, v, i) => {
//         //     return this.adjList.get(v).reduce((r, w, i) => {
//         //         return r + `${w} `
//         //     }, `${r}\n${v} => `)
//         // }, '')
//     }
//     // breadth first search
//     bfs(v, callback) {
//         const read = []
//         const adjList = this.adjList
//         let pending = [v || this.vertices[0]]
//         const readVertices = vertices => {
//             vertices.forEach(key => {
//                 read.push(key)
//                 pending.shift()
//                 adjList.get(key).forEach(v => {
//                     if (!pending.includes(v) && !read.includes(v)) {
//                         pending.push(v)
//                     }
//                 })
//                 if (callback) callback(key)
//                 if (pending.length) readVertices(pending)
//             })
//         }
//         readVertices(pending)
//     }
// }


// const graph = new Graph()

// ;['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].forEach(c => graph.addVertex(c))

// graph.addEdge('A', 'B')
// graph.addEdge('A', 'C')
// graph.addEdge('A', 'D')
// graph.addEdge('C', 'D')
// graph.addEdge('C', 'G')
// graph.addEdge('D', 'G')
// graph.addEdge('D', 'H')
// graph.addEdge('B', 'E')
// graph.addEdge('B', 'F')
// graph.addEdge('E', 'I')

// console.log(graph.toString())
// graph.bfs(graph.vertices[0], value => console.log('Visited vertex: ' + value))

// 输出
/*
A => B C D 
B => A E F 
C => A D G 
D => A C G H 
E => B I 
F => B 
G => C D 
H => D 
I => E 
*/
