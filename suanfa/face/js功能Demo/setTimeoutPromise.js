// macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
// micro-task(微任务)：Promise，process.nextTick

// console.log('1');
// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7'); // 然后回到 promise ， new promise 会立即执行， then会分发到微任务
//     resolve();
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })



// 依次执行promises
function promiseAll(promises) {
    return new Promise((resolve, reject)=> {
        nextPromise(0, promises)
        function nextPromise(index, promises) {
            let length = promises.length;
            console.log(index)
            if (index >= length) {
                resolve()
                return;
            }
            promises[index]().then(()=> { // then是在执行完之后采取执行；就有一个时机问题
                nextPromise(index+1, promises)
            })
        }
    })
}



let promise1 = function () {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('promise1')
            resolve('p1')
        }, 100)
    });
};

let promise2 = function () {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('promise2')
            resolve('p2')
        }, 400)
    });
};

let promise3 = function () {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('promise3')
            resolve('p3')
        }, 300)
    });
};

// let promiseResult = Promise.all([promise1, promise2, promise3]).then((values)=> {
//     console.log(values)
//     return values
// });
// let result = promiseAll([100,300,200])
// let result = promiseAll([promise1, promise2, promise3])
// console.log(result)


new Promise((resolve, reject)=> {
    console.log('promise1')
        resolve('p3')
        console.log('promise3')
}).then((value)=> {
    console.log(value)
});

// new Promise((resolve, reject)=> {
//     console.log('promise1')
//     setTimeout(()=> {
//         console.log('promise2')
//         resolve('p3')
//         console.log('promise3')
//     }, 300)
// }).then((value)=> {
//     console.log(value)
// });

