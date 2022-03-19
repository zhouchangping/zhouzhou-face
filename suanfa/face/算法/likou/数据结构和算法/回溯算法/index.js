/*
 * @Author: zhouchangping
 * @Date: 2020-12-08 15:54:11
 * @LastEditTime: 2022-02-21 20:10:27
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/likou/数据结构和算法/回溯算法/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 基本思路就是找一条可能的路去走，如果走不通，回到上一步，继续选择另一条路，知道问题解决，回朔算法是一种暴力求解法，有着一种试错的思想，因为其简单粗暴而闻名
//给定一个 没有重复 数字的序列，返回其所有可能的全排列。
      //输入: [1,2,3]
      //输出:
      //[
      //[1,2,3],
      //[1,3,2],
      //[2,1,3],
      //[2,3,1],
      //[3,1,2],
      //[3,2,1]
      //]
      //=========题目解析===========
      //1、采用回溯算法求解
      //2、将不重复数字一次放入数组的每个位置，如果满足条件，取出来，否则回溯寻找下一组
      //3、使用递归实现回溯思路
      const permute = (nums) => {
        const res = [];
        var dfs = function (path) {
          if (path.length === 3) { res.push(path); return }
          nums.forEach(element => {
            if (path.includes(element)) { return }
            // 多层递归实现回溯
            dfs(path.concat(element))
          });
        }
        dfs([])
        console.log(res)
      };
      permute([1, 2, 3])



  class EventLister {
    constructor() {
      this.events = {};
    }
    emit(type, data) {
      if (this.events[type]) {
        this.events.forEach(fn=> {
          fn(data);
        })
      }
    }
    on(type, fn) {
      this.events[type] = this.events[type] || [];
      if (this.events[type].indexOf(fn) == -1) {
        fn();
      }
      this.events[type].filter(item=> {
        return item !== fn;
      });

      newArr.concat(fn);
      this.events[type] = newArr;
    }
    off(type, fn) {
      if (this.events[type]) {
        let newArr =  this.events.filter(item=> {
          return item !== fn;
        });
        this.events[type] = newArr;
      }
    }
    once(type, fn) {
      let that = this;
      function _fn() {
        fn.apply(that, arguments);
        that.off(type, fn);
      }
      that.on(type, _fn)
    }
  }