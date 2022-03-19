// 1265347
// achfncs
function c(s, indices) {
  let result = [];
  let length = indices.length;

  for (let i = 0; i < length; i++) {
    
  }
}


var restoreString = function(s, indices) {
  const length = s.length;
  const result = new Array(length);
  
  for (let i = 0; i < length; ++i) {
      result[indices[i]] = s.charAt(i);
  }
  
  return result.join('');
};
