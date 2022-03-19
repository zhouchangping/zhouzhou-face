let map = new Map();
let o = {n: 1};
map.set(o, "A"); //add
map.set("2", 9);
console.log(map.has("2")); //check if key exists
console.log(map.get(o)); //retrieve value associated with key
console.log(...map);
console.log(map);