## 基本类型: 数字，布尔，字符串，元组，枚举，任何值，空值， null和undefined, never(https://github.com/zhongsp/TypeScript)
+ let id: Boolean = false;
+ let number: number = 1;
+ let name: string = "bob";
+ let list: number[] = [1,2,3,4]   //使用数组泛型 let list: Array<number> = [1, 2, 3];
+ let x: [string, number]; 元组 x = ['hello', 10]; // OK 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
+ enum类型是对JavaScript标准数据类型的一个补充
  + enum Color { red=1, green, blue} let c: Color = Color.Green;
  + enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}; console.log(Days["Sun"] === 0); // true
+ let notSure: any = 4;
  + notSure = "maybe a string instead";
+ void类型像是与any类型相反，它表示没有任何类型
```
function warnUser(): void {
    alert("This is my warning message");
}
```
+ let u: undefined = undefined; let n: null = null;
+ // 返回never的函数必须存在无法达到的终点
```
function error(message: string): never {
    throw new Error(message);
}
```

## 函数 类 接口 变量申明 范型 枚举 类型推导 高级类型（联合类型|） 类型兼容 symbols Iterators 和 Generators 模块 命名空间namespace Validation { export interface str {}}, 模块解析， 申明合并，混入(mixin) 
+ decorators(装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，访问符，属性或参数上)用@expression这种形式，expression求值后必须为一个函数;装饰器是一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入
+  /// <reference path="..." />指令是三斜线指令中最常见的一种，它用于声明文件间的依赖。三斜线引用告诉编译器在编译过程中要引入的额外的文件。

## ES6 中实例的属性只能通过构造函数中的 this.xxx 来定义，ES7 提案中可以直接在类里面定义：this.name = name;和name = 'Jack';

## // type interface

## 全局变量的声明文件
+ declare var 声明全局变量
+ declare function 声明全局方法
+ declare class 声明全局类
+ declare enum 声明全局枚举类型
+ declare namespace 声明（含有子属性的）全局对象
+ interface 和 type 声明全局类型
+ export 导出变量
+ export namespace 导出（含有子属性的）对象
+ export default ES6 默认导出
+ export = commonjs 导出模块
+ export as namespace UMD 库声明全局变量
+ declare global 扩展全局变量
+ declare module 扩展模块
+ /// <reference /> 三斜线指令

## 类实现接口： 一个类可以实现多个接口

## 接口继承接口

## 接口继承类： 常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的：

## 范型： 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。