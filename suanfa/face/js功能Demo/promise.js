// 完整代码 也顺便带大家理顺一下
// ES6 规定，PromiseMe对象是一个构造函数，用来生成PromiseMe实例。
function PromiseMe(executor) {
  let self = this;
  self.value = undefined;  // 成功的值
  self.reason = undefined;  // 失败的值
  self.status = "pending"; // 目前PromiseMe的状态pending
  self.onResolvedCallbacks = []; // 可能new PromiseMe的时候会存在异步操作，把成功和失败的回调保存起来
  self.onRejectedCallbacks = [];
  function resolve(value) { // 把状态更改为成功
    if (self.status === "pending") { // 只有在pending的状态才能转为成功态
      self.value = value;
      self.status = "resolved";
      // console.log(self.onResolvedCallbacks); // 4 7 19
      self.onResolvedCallbacks.forEach(fn => {
        // console.log("0000");
        fn();
      }); // 把new PromiseMe时异步操作，存在的成功回调保存起来
    }
  }
  function reject(reason) {  // 把状态更改为失败
    if (self.status === "pending") { // 只有在pending的状态才能转为失败态
      self.reason = reason;
      self.status = "rejected";
      self.onRejectedCallbacks.forEach(fn => fn()); // 把new PromiseMe时异步操作，存在的失败回调保存起来
    }
  }
  try {
    // 在new PromiseMe的时候，立即执行的函数，称为执行器
    executor(resolve, reject);
  } catch (e) { // 如果执行executor抛出错误，则会走失败reject
    reject(e);
  }
}

// then调用的时候，都是属于异步，是一个微任务
// 微任务会比宏任务先执行
// onFulfilled为成功的回调，onRejected为失败的回调
PromiseMe.prototype.then = function (onFulfilled, onRejected) {
  // console.log(onFulfilled); // 2 13
  // console.log(self.status);
  onFulfilled = typeof onFulfilled === "function"?onFulfilled:val=>val;
  onRejected = typeof onRejected === "function"?onRejected: err=>{throw err;};
  let self = this;
  let PromiseMe2;
  // 上面讲了，PromiseMe和jquery的区别，PromiseMe不能单纯返回自身，
  // 而是每次都是返回一个新的PromiseMe，才可以实现链式调用，
  // 因为同一个PromiseMe的pending resolve reject只能更改一次
  PromiseMe2 = new PromiseMe((resolve, reject) => {
    if (self.status === "resolved") {
      // console.log("PromiseMe2 resloved"); // 14
      // 为什么要加setTimeout？
      // 首先是PromiseMeA+规范要求的
      // 其次是大家写的代码，有的是同步，有的是异步
      // 所以为了更加统一，就使用为setTimeout变为异步了，保持一致性
      setTimeout(()=>{ // 被调用不是当前的上下文，then方法是异步的
        try { // 上面executor虽然使用try catch捕捉错误
          // 但是在异步中，不一定能够捕捉，所以在这里
          // 用try catch捕捉
          // console.log(self.value + "selfvalue"); // 15
          let x = onFulfilled(self.value);
          // console.log(x);
          // 在then中，返回值可能是一个PromiseMe，所以
          // 需要resolvePromiseMe对返回值进行判断
          resolvePromiseMe(PromiseMe2,x,resolve,reject);
          // console.log("end");
        } catch (e) {
          reject(e);
        }
      },0);
    }
    if (self.status === "rejected") {
      setTimeout(()=>{
        try {
          let x = onRejected(self.reason);
          resolvePromiseMe(PromiseMe2,x,resolve,reject);
        } catch (e) {
          reject(e);
        }
      },0);
    }
    if (self.status == "pending") {
      // console.log("PromiseMe2 pending"); // 3
      self.onResolvedCallbacks.push(() => {
        setTimeout(()=>{
          try {
            // console.log(44445454); // 5
            let x = onFulfilled(self.value); // PromiseMe
            // console.log(9999); // 8
            resolvePromiseMe(PromiseMe2,x,resolve,reject);
          } catch (e) {
            reject(e);
          }
        },0);
      });
      self.onRejectedCallbacks.push(() => {
        setTimeout(()=>{
          try {
            let x = onRejected(self.reason);
            resolvePromiseMe(PromiseMe2,x,resolve,reject);
          } catch (e) {
            reject(e);
          }
        },0);
      });
    }
  });
  return PromiseMe2; 
};

// 这个函数为核心，所有的PromiseMe都遵循这个规范
// 主要是处理then中返回的值x和PromiseMe2的关系
function resolvePromiseMe(PromiseMe2,x,resolve,reject){
  // console.log(x); // 9 17
  // 当PromiseMe2和then返回的值x为同一个对象时，变成了自己等自己，会陷入死循环
  if(PromiseMe2 === x){
    return reject(new TypeError("Chaining cycle"));
  }
  let called;
  // x可能是一个PromiseMe也可能是一个普通值
  if(x!==null && (typeof x=== "object" || typeof x === "function")){
    // console.log(typeof x); // 10
    try{
      let then = x.then;
      // console.log(then); // 11
      if(typeof then === "function"){
        // console.log(5555); // 12
        then.call(x,y=>{
          // console.log(y + "12377777"); // 16
          if(called) return;
          called = true;
          resolvePromiseMe(PromiseMe2,y,resolve,reject);
          // console.log(8888888888);
        },err=>{
          if(called) return;
          called = true;
          reject(err);
        });
      }else{
        // console.log(x);
        resolve(x);
      }
    }catch(e){
      if(called) return;
      called = true;
      reject(e);
    }
  }else{
    // console.log(x+ "123888"); // 18
    resolve(x);
  }
}

PromiseMe.reject = function (reason) {
  return new PromiseMe((resolve, reject)=> {
    reject(reason);
  })
}

PromiseMe.resolve = function (value) {
  return new PromiseMe((resolve, reject)=> {
    resolve(value)
  })
}

PromiseMe.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}

PromiseMe.all = function (promises) { // const p = PromiseMe.all([p1, p2, p3]);PromiseMe.all()方法用于将多个 PromiseMe 实例，包装成一个新的 PromiseMe 实例。结果是值的数组
  // 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
  // return new PromiseMe((resolve, reject)=> {
  //   let arr = [];
  //   let i = 0;
  //   function processData(index, data) {
  //     arr[index] = data;
  //     if (++i == PromiseMes.length) {
  //       resolve(arr)
  //     }
  //   }
  //   for (let i = 0; i < PromiseMes.length; i++) {
  //     PromiseMes[i].then(data=>{
  //       processData(i, data)
  //     }, reject);
  //   }
  // })

  return new PromiseMe(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      throw new TypeError(`arguments must be a array`)
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolveResult = [];
    for (let i = 0; i < promiseNum; i++) {
      PromiseMe.resolve(promises[i]).then(value=> { // 遍历，获取每一个promise的value
        resolvedCounter++;
        resolveResult[i] = value;
        if (resolvedCounter == promiseNum) {
          return resolve(resolveResult)
        }
      },error=> {
        return reject(error);
      })
    }
  })
}

PromiseMe.all = function (promises) {
  return new PromiseMe((resolve, reject)=> {
    let promiseNum = promises.length;
    let count = 0;
    let resultArr = [];
    for (let i = 0; i < promiseNum; i++) {
      PromiseMe.resolve(promises[i]).then(data=> {
        count++;
        resultArr[i] = data;
        if (count == promiseNum) {
          return resolve(resultArr);
        }
      }, error=> {
        return reject(error);
      });
    }
  })
}

PromiseMe.allSettled = function (iterators) { // 不管对错都保存
  const promise = Array.from(iterators);
  const num = promise.length;
  const resultNum = 0;
  const resultList = new Array(num);
  return PromiseMe((resolve, reject)=> {
    for (let i = 0; i < num; i++) {
      PromiseMe.resolve(promise[i]).then((value)=> {
        resultList[i] = value;
        if (++resultNum === num) {
          resolve(resultList);
        }
      }).catch((error)=> {
        resulList[i] = error;
        if (++resultNum === num) {
          resolve(resultList);
        }
      })
    }
  })
}

PromiseMe.race = function (PromiseMes) { // 看谁快
  return new PromiseMe((resolve, reject)=> {
    for (let i = 0; i < PromiseMes.length; i++) {
      PromiseMes[i].then(resolve, reject);
    }
  })
}

PromiseMe.mergePromise = (ajaxArray) => {
  // 在这里实现你的代码
  return new PromiseMe(async(resolve)=> {
    const result = [];
    for (let i = 0; i < ajaxArray.length; i++) {
      const res = await ajaxArray[i]();
      result.push(res);
    }
    resolve(result)
  })
}

function TaskLimit(limit) {
  this.taskList = [];
  this.count = 0;
  this.limit = limit;
}
TaskLimit.prototype.scanning = function (fn) {
  const { count, limit} = this
  if (count < limit) {
    return this.run(fn);
  } else {
    return this.hold(fn);
  }
}
TaskLimit.prototype.hold = function (fn) {
  return new PromiseMe((resolve, reject)=> {
    this.taskList.push({fn, resolve, reject})
  })
}
TaskLimit.prototype.wakeUp = function () {
  const  { count, limit, taskList } = this;
  if (count < limit && taskList.length) {
    this.run(fn).then(resolve).catch(reject);
  }
}
TaskLimit.prototype.run = function (fn) {
  this.count++;
  return fn().then(data=> {
    this.count--
    this.wakeUp()
    return data;
  })
}

const list = Array.from({length: 100}).map((item, index)=>()=> new PromiseMe((resolve)=> {
  console.log('list'+ index +'go')
  setTimeout(()=> {
    resolve('list'+ index + 'done');
  }, (index+1) * 1000)
}))

PromiseMe.map = function (list , limit) {
  const tastkLimit = new TaskLimit(limit);
  PromiseMe.all(list.map(item=> tastkLimit.scanning(fn))).then((data)=> {
    console.log(data)
  })
}






const PromiseMe1 = new PromiseMe((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const PromiseMe2 = new PromiseMe((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

PromiseMe.race([PromiseMe1, PromiseMe2]).then((value) => {
  console.log(value);
})




// const p1 = new PromiseMe((resolve, reject) => {
//   resolve('hello');
// })
// .then(result => result)
// .catch(e => e);

// const p2 = new PromiseMe((resolve, reject) => {
//   throw new Error('报错了');
// })
// .then(result => result)
// .catch(e => e);

// let results = PromiseMe.all([p1, p2])
// .then(result => console.log(result))
// .catch(e => console.log(e));
// console.log(results)

// PromiseMe.defer = PromiseMe.deferred = function(){
//   let dfd = {};
//   dfd.PromiseMe = new PromiseMe((resolve,reject)=>{
//     dfd.resolve = resolve;
//     dfd.reject = reject;
//   });
//   return dfd;
// };
// export default  PromiseMe;


// 先执行executor-执行then,返回新的PromiseMe,在数组中追加异步处理； 等reslove处理，->调用数组。执行追加的异步处理，根据结果，判断是否继续执行异步结果，
// 递归resolvePromiseMe，根据追加异步函数的返回值确定执行resolvePromiseMe还是resolve()



var p1 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 1000, 'one'); 
}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 2000, 'two'); 
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four');
});
// var p5 = new Promise((resolve, reject) => {
//   reject('reject1231312312');
// });

let result = Promise.all([p1, p2, p3, p4]).then(values => { 
  console.log(values);
}, reason => {
  console.log(reason)
})
console.log(result)




// 1-promiseAll
function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      throw new TypeError(`arguments must be a array`)
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolveResult = [];
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(value=> { // 遍历，获取每一个promise的value
        resolvedCounter++;
        resolveResult[i] = value;
        if (resolvedCounter == promiseNum) {
          return resolve(resolveResult)
        }
      }),error=> {
        return reject(error);
      }
    }
  })
}