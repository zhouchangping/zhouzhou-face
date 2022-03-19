if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    value: function (callback) {
      if (this === null) {
        throw new TypeError(
          "Array.prototype.reduce called on null"
        )
      }
      if (typeof callback !== "function") {
        throw new TypeError(callback + "is not a function")
      }
      var o = Object(this);
      var len = o.length >>> 0;
      var k = 0;
      var value;
      if (arguments.length >= 2) {
        value = argument[1];
      } else {
        while(k < len && !(k in o)) {
          k++;
        }
        if (k >= length) {
          throw new TypeError("Reduce of empty array with no initial value")
        }
        value = o[k++];
      }
      while (k < len) {
        if (k in o) {
          value = callback(value, o[k], k, o);
        }
        k++
      }
      return value;
    }
  })
}