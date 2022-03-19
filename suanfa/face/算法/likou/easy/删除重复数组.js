//
// function a(x) {
//   return [...new Set(x)]
// }

// function b(x) {
//   // for (let i = 0; i < x.length; i++) {
//   //   if ()
//   // }
//   return x.reduce((result, item)=> {
//     if (!result.includes(item)) {
//       result.push(item)
//     }
//     return result;
//   }, [])
// }

// function b(x) {
//   let i = 0;
//   while(i < x.length) {
//     if (x[i] !== x[i+1]) {
//       i++
//       console.log(i)
//     } else {
//       x.splice(i + 1, 1);
//     }
//   }
//   return x;
// }

var removeDuplicates = function(nums) { // 双指针
  var j = 0;
  var n = nums.length;
  for(let i = 1; i < n; i++){
      if(nums[i] !== nums[i-1]) {
          j++;
          console.log(j)
          nums[j] = nums[i];
      }
  }
  return j+1;
  // return nums;
};


let result = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
console.log(result)
