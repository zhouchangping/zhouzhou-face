/*
* flattenDeep([1, [2, [3, 4]] ,5])
*/
function flattenDeep(arr, deepLength) {
  return arr.flat(deepLength);
}


function flattenDeep(arr) {
  return arr.reduce((prev, cur)=>
    Array.isArray(cur) ? prev.concat(flattenDeep(cur)) : prev.concat(cur), []
  )
}

flattenDeep([1, [2, [3, [4]], 5]])