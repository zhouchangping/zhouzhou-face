var letterCasePermutation = function(S) { // bfs 可见最后一排的叶子即为最终所有的组合
  const REG = /[A-Za-z]/;
  function collect(S, index){
      if(index >= S.length)return [S]; //到了叶子节点，也就是我们需要收集的其中一个组合
      const letter = S.charAt(index);
    //   console.log(letter)
      let pos = index+1;
      if(REG.test(letter)){
          const r = S.slice(0,index)+letter.toLowerCase()+S.slice(index+1);
          
          const arr = collect(r, pos); //左边节点  1 
        //   console.log(arr)
          const l = S.slice(0,index)+letter.toUpperCase()+S.slice(index+1); 
          return arr.concat(collect(l, pos)); //右边
      }else{
          return collect(S, pos); //如果当前的元素不是字母，原样返回   2
      }
  }
  const result = collect(S, 0);
  return result;
};

const re = letterCasePermutation('a12');
console.log(re)

