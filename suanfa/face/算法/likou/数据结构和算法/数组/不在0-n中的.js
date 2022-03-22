function isIn(arr) {
    let n = arr.length;
    let set = new set();
    for (let i = 0; i < n; i++) {
        set.add(arr[i]);
    }
    for (let j = 0; j <= n; j++) {
        if (!set.has(arr[j])) {
            return j;
        }
    }
    return -1;
}