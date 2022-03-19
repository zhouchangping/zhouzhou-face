var obj = {
  a: function () {
    return this;
  },
  b: function () {
    return this;
  }
}
obj.a().b()