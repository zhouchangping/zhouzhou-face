Array.prototype.binarySearch = function (key) {
  var low = 0;
  var high = this.length - 1;
  while (low <= high) {
    var mid = parseInt((low + high) / 2);
    if (key === this[mid]) {
      return mid;
    }
    else if (key < this[mid]) {
      high = mid + 1;
    }
    else if (key > this[mid]) {
      low = mid - 1;
    } else {
      return -1;
    }
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.binarySearch(3));
