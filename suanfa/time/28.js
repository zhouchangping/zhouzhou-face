var arr = [];
var count = 0;
function insert(data) {
  let n = 20;
  if (count >= n) return;
  count++;
  arr[count] = data;
  console.log(arr.length)
  // console.log(count)
  let i = count;
  let k = Math.floor(i/2);
  while(k > 0 && arr[i] > arr[k]) {
    swap(arr, i, k);
    i = k
  }
  // console.log(arr)
}

function swap(arr, i, j) {
  console.log(arr)
  let temp = arr[i];
  arr[j] = temp;
  arr[i] = arr[j];
}


insert(7)
insert(6)
insert(5)
insert(4)
insert(2)
insert(1)
insert(9)