const negativeArray = els => new Proxy(els, {
  get: function (target, propKey, receiver) {
    return Reflect.get(
      target, 
      ++propKey < 0 ? String(target.length + Number(propKey)) : propKey, 
      receiver
    )
  }  
});
const unicorn = negativeArray([1, 2, 3, 4]);
console.log(unicorn)
console.log(unicorn[-1])