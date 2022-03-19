/*
 * @Author: zhouchangping
 * @Date: 2022-03-07 18:00:45
 * @LastEditTime: 2022-03-07 18:43:45
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/js功能Demo/异步调度器schedule.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// js实现一个带并发限制的异步调度器schedule，保证同时运行的任务最多有两个
// function Schedule () {
//   this.list = [];
//   this.add =  function (promises){
//     this.list.push(promises)
//   }
//   this.maxCount = 2;
//   let tempRunIndex = 0;
//   this.taskStart = function () {
//     for (let i = 0; i < this.maxCount; i++) {
//       request.bind(this)()
//     }
//   }
//   function request() {
//     if (!this.list || !this.list.length || tempRunIndex >= this.maxCount) {
//       return;
//     }
//     tempRunIndex++;
//     this.list.shift()().then(()=> {
//       tempRunIndex--
//       request.bind(this)();
//     })
//   }
// }
// const timeout = (time) => new Promise(resolve=> {
//   setTimeout(resolve, time)
// })
// const schedule = new Schedule()
// const addTask = (time, order)=> {
//   schedule.add(()=> timeout(time).then(()=> console.log(order)))  
// }
// addTask(1000, '1')
// addTask(500, '2')
// addTask(300, '3')
// addTask(400, '4')
// schedule.taskStart()
// 2 ,3, 4, 1




/**
 * 题目: JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
 * 条件: 只能修改Sheduler
 **/
 class Scheduler {
  constructor(){
    this.cache = [] // 缓存任务数据
    this.task = [] // 当前执行任务队列
    this._max =  2 // 最大并发任务
  }
  add(promiseCreator) { 
      return new Promise(resolve=>{
        promiseCreator.resolve = resolve; // 保存当前promise的状态
        if(this.task.length < this._max) { // 最大并发任务处理
          this.runWork(promiseCreator)
        } else {
          this.cache.push(promiseCreator)
        }
      })
   }
   runWork(promiseCreator) {
    this.task.push(promiseCreator)
    promiseCreator().then(() => {
      promiseCreator.resolve() // 把add返回的promise执行  
      this.task.splice(this.task.indexOf(promiseCreator), 1) // 当前任务执行完成 清除task中的数据
      if(this.cache.length) {
           this.runWork(this.cache.shift()) // 根据执行的缓存顺序执行，保证执行的有序性
      }
    })
   }
}
const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})
const scheduler = new Scheduler()
const addTask = (time, order) => {
  const result = scheduler.add(() => timeout(time))
  result.then(() => console.log(order + 'order'))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')// output: 2 3 1 4
