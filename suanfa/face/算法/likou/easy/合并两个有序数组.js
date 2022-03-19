// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
function a(nums1, nums2) {
  nums1 = nums1.concat(nums2);
  nums1.sort()
  return nums1;
}

var merge = function(nums1, m, nums2, n) { // 归并 + 双指针
  let left = 0;
  let right = 0;
  let tmp_nums1 = nums1.slice(0,m);
  let tmp_nums2 = nums2.slice(0,n);
  let result = [];
  while(left < m && right < n){
      if(tmp_nums1[left] < tmp_nums2[right]){
          result.push(tmp_nums1[left]);
          left++;
      }else{
          result.push(tmp_nums2[right]);
          right++;
      }
  }
  result = result.concat(tmp_nums1.slice(left)).concat(tmp_nums2.slice(right));
  for(let i = 0;i < result.length;i++){
      nums1[i] = result[i];
  }
};


const result = a([1,2,3], [3,4,6])
console.log(result)