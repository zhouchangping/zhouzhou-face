var reverseList = function (head) {
    let prev = null;
    let current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

var find = function (arr, key) {
    let i = 0;
    while (arr[i] !== key) {
        ++i;
    }
    if (i == arr.length ) {
        return -1;
    } else {
        return i;
    }
}
let re = find([1,2,3,4,6,7], 8)
console.log(re)