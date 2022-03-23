/**
 * description: 等差数列
 * 
 */
 async function async1() {
    console.log('async1 start');
    await async2();
    console.log('asnyc1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(() => {
    console.log('setTimeOut');
}, 0);
async1();
new Promise(function (reslove) {
    console.log('promise1');
    reslove();
}).then(function (resolve) {
    console.log('promise2');
    new Promise(function (resolve) {
        console.log(13)
        resolve()
    }).then(function () {
        console.log('promise3')
    })
})
function setp() {
    requestAnimationFrame(function () {
        console.log(452)
    })
}
requestAnimationFrame(function() {
    console.log(3466)
    setp();
})
console.log('script end');
