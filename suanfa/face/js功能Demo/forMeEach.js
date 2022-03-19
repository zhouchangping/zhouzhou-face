Array.prototype.forMeEach = function (fn) {
  if (typeof fn !== "function") {
    throw new TypeError(fn + "is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    fn.call(this, this[i], i, this);
  }
}