<!--
 * @Author: zhouchangping
 * @Date: 2020-07-09 10:45:46
 * @LastEditTime: 2022-02-14 14:18:14
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/face/vue/vue.md
 * 可以输入预定的版权声明、个性签名、空行等
-->
# vue ------ vue-dev项目源码分析
## Vue.js是基于Object.defineProperty对对象实现“响应式化”，而对于数组，Vue.js提供的方法是重写push、pop、shift、unshift、splice、sort、reverse这七个数组方法。需要用数组下标修改数组并实现响应式数据变化，Vue.js提供了$set()及$remove()方法。Vue.set(vm.items,indexOfItem, newValue)

## Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因

## 警用展示数据响应式

## 资源释放
+ $on $ off
+ 闭包 null
+ eventBus
+ iframe不足点

## vue-if v-show
+ vue-if是惰性的，v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。 
+ vue-show: v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换
+ v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销

## computed watch
+ computed计算属性是基于它们的响应式依赖进行缓存的。
+ 计算属性会缓存，依赖其他，其他计算大的话。
+ 计算属性不支持异步
+ 计算属性的 setter getter
  ```
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
  vm.fullName = 'John Doe'
  ```
  + watch: 当需要在数据变化时执行异步或开销较大的操作时
  ```
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  ```

## vue-for

## vue双向原理
+ 一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的
+ 

## vue-loader 和vue-template必须同一个版本

## computed


## vue组件初始化过程
+ 先app vue created-》top vue created-》top vue mounted-》app vue mounted

## vue生命周期
+ 