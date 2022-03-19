const rand10 = () => {
  let m, n, num;
  do {
      m = rand7();
      n = rand7();
      // 使生成的[1,49]等概率
      num = m + (n - 1) * 7;
  } while (num > 40);
  // 将[1,40]转化为[1,10]
  return 1 + ((num - 1) % 10);
}

let Solution = function (radius, x_center, y_center) {
  this.radius = radius;
  this.xc = x_center;
  this.yc = y_center;
};

Solution.prototype.randPoint = function () {
  let d = this.radius * Math.sqrt(Math.random());
  let theta = Math.random() * 2 * Math.PI;
  return [d * Math.cos(theta) + this.xc, d * Math.sin(theta) + this.yc];
};


// 点是否在圆内
let Solution = function (radius, x_center, y_center) {
  this.radius = radius;
  this.xc = x_center;
  this.yc = y_center;
}
Solution.prototype.randPoint = function () {
  let x0 = this.xc - this.radius;
  let y0 = this.yc - this.radius;
  while(true) {
    let xg = x0 + Math.random() * this.radius * 2;
    let yg = y0 + Math.random() * this.radius * 2;
    if (Math.sqrt(Math.pow((xg - this.xc), 2) + Math.pow(yg - this.yc), 2) <= this.radius) {
      return [xg, yg]
    }
  }
}

