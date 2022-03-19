
// 我们用 dfs 遍历，从 JFK 开始，尝试所有可能的选择，这需要知道当前可以飞哪些城市，需要构建邻接表。根据当前选择，往下递归，尝试找出第一个用完机票的路径，如果找不出来，返回false，否则，返回true。
// 访问过的边要删掉。比如，北京飞广州，到了广州，北京的邻居list中删掉广州。
// 为什么要返回真假，因为要用它判断要不要提前回溯，在该分支走不下去，就要离开。
// 我们选择飞入的城市，如果困住了，那就是飞错了，就要回溯，将北京的邻居list中删除的广州恢复回来，不飞广州了，飞别的试试，离开当前分支，切入别的分支，继续探索路径。

const findItinerary1 = function (tickets){
  const res = ['JFK']; // 初始放入起点'JFK'
  const map = {};      // 邻接表

  for (const ticket of tickets) { // 遍历tickets，建表
    const [from, to] = ticket;    // 每一张机票，读出起点和终点
    if (!map[from]) {
      map[from] = []; // 初始化
    }
    map[from].push(to); // 建立映射
  }
console.log(map)
  for (const city in map) { // 按照字母顺序，小的在前
    map[city].sort();
  }
  console.log(map)

  const dfs = (city, used) => { // city是当前访问的城市、used是已用掉的机票数
    if (used == tickets.length) { // 用光了所有机票，路径找到了
      return true;
    };
    const nextCities = map[city]; // 获取下一站能去的城市list
    if (!nextCities || nextCities.length == 0) { // 没有邻接城市了
      return false; // 还没用光机票，就没有下一站了，返回false
    }
    for (let i = 0; i < nextCities.length; i++) { // 设置出各种选项（递归分支）
      const next = nextCities[i]; // 当前选择的下一站
      nextCities.splice(i, 1);    // 飞出地的list中删掉这一站
      res.push(next);             // 将该选择推入res
      if (dfs(next, used + 1)) {  // 在该递归分支中能找到一个用完所有机票的路径
        return true;
      } else {
        nextCities.splice(i, 0, next); // 将删掉的这一站重新插回去
        res.pop();                     // 推入res的选择，也撤销
      }
    }
  };

  dfs('JFK', 0); // 从'JFK'城市开始遍历，当前用掉0张机票
  return res;
};


const findItinerary = (tickets) => {
  const res = [];
  const map = {};
  
  for (const ticket of tickets) { // 建表
    const [from, to] = ticket;
    if (!map[from]) {
      map[from] = [];
    }
    map[from].push(to);
  }
  for (const city in map) {
    map[city].sort();
  }

  const dfs = (node) => { // 当前城市
    const nextNodes = map[node]; // 当前城市的邻接城市
    while (nextNodes && nextNodes.length) { // 遍历，一次迭代设置一个递归分支
      const next = nextNodes.shift(); // 获取并移除第一项，字母小的城市
      dfs(next);                      // 向下递归
    }    
    console.log(node)             
    // 当前城市没有下一站，就把他加到res里，递归开始向上返回，选过的城市一个个推入res 
    res.unshift(node); 
  };

  dfs('JFK'); // 起点城市
  return res;
};


const tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
const result = findItinerary(tickets)
console.log(result)
