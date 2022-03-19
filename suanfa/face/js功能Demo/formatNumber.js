function formatNumber(number) {
  let arr = [];
  let str = number + '';
  let count = str.length;
  while(count >= 3) {
    arr.unshift(str.slice(count - 3, count));
    count-=3;
  }
  console.log(arr)
  str.length % 3 && arr.unshift(str.slice(0, str.length % 3));
  console.log(arr)
  return str.toString();
}

function formatNumber1(number) {
  return number.toString().split('').reverse().reduce((prev, next, index)=> {
    return((index % 3) ? next : (next + ',') + prev);
  });
}

function formatNumber2(number) {
  return (number+'').replace(/\B(?=(\d{3})+(\.|$))/g, function (match) {
    console.log(match);
    return ',';
  })
}

function formatNumber3(number) {
  return (number+'').replace(/(\d)(?=(?:\d{3})+$)/g, function (match, p) {
    console.log(match);
    // console.log(p)
    return `${match},`;
  })
}

// console.log(formatNumber2('13435553459089'))
console.log(formatNumber3('13435553459089'))


let num = "12345678";
console.log(num.replace(/(\d)(?=(?:\d{3})+$)/g,'$1,'))//"12,345,678"

var text = "this is a fsormer ftorbrowser!";
console.log(text.match(/\B.o/g)); //  ["so", "to", "ro"]
console.log(text.match(/\b.s/g)); //  ["is", "fs"]