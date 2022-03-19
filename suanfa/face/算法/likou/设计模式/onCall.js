let event = {
  arr: [],
  result: [],
  on(fn) {
    this.arr.push(fn);
  },
  emit(data) {
    this.result.push(data);
    if (this.result.length === 2) {
      this.arr.forEach(fn=> {
        return this.result;
      })
    }
  }
}

event.on(function (data) {
  if (data.length === 2) {
    console.log(data)
  }
})

event.emit(1)
event.emit(2)