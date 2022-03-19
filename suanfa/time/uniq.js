/*
 * uniq([1, 2, 3, 4, 3, 5, 2]),数组去重 for indexOf includes ... reduce Map(has,set)
 */
function uniq(arr) {
  let length = arr.length;
  let arrs = [];
  for(let i = 0; i < length; i++) {
    if (arrs.indexOf(arr[i]) == '-1') {
      arrs.push(arr[i])
    }
  }
  return arrs;
}

function uniq(arr) {
  let length = arr.length;
  let arrs = [];
  for(let i = 0; i < length; i++) {
    if (!arrs.includes(arr[i])) {
      arrs.push(arr[i])
    }
  }
  return arrs;
}

function uniq(arr) {
  return [...new Set(arr)];
}

function uniq(arr) {
  return arr.reduce((prev, cur)=> 
    prev.includes(cur) ? prev : [...prev, cur], []
  )
}

function uniq(arr) {
  let map = new Map();
  let result = new Array();
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], true)
    } else {
      map.set(arr[i], false);
      result.push(arr[i])
    }
  }
  console.log(map)
  return result;
}
uniq([1, 2, 3, 4, 3, 5, 2])