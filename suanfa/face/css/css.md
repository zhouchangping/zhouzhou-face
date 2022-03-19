
# css
## css书写规范

## css
+ script 放在底部还会影响dom的解析和渲染吗
  + script放在底部不会影响dom渲染，不会影响解析
  + script内代码执行会等待css加载
  + css代码下若无script代码段，就不会影响domcontenloaded;

## bfc ifc gfc ffc（https://segmentfault.com/a/1190000009545742）
+ 内部的Box会在垂直方向，一个接一个地放置。
+ Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
+ 每个元素的左外边缘（margin-left)， 与包含块的左边（contain box left）相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。除非这个元素自己形成了一个新的BFC。
+ BFC的区域不会与float box重叠。
+ BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
+ 计算BFC的高度时，浮动元素也参与计算

## 如何创建bfc
+ 根元素或其它包含它的元素
+ 浮动 (元素的 float 不是 none)
+ 绝对定位的元素 (元素具有 position 为 absolute 或 fixed)
+ 非块级元素具有 display: inline-block，table-cell, table-caption, flex, inline-flex
+ 块级元素具有overflow ，且值不是 visible
+ inline-block的元素的内部是一个BFC，但是它本身可以和其它inline元素一起形成IFC

## 垂直水平居中: https://segmentfault.com/a/1190000006108996
  + 绝对定位+margin：auto
  + 绝对定位+margin反向偏移
  + 绝对定位+transform反向偏移
  + display：tabel
  + display: inline-block
  + display: flex

## 1px(https://juejin.im/post/5d19b729f265da1bb2774865)
```
.setBorderAll{
     position: relative;
       &:after{
           content:" ";
           position:absolute;
           top: 0;
           left: 0;
           width: 200%;
           height: 200%;
           transform: scale(0.5);
           transform-origin: left top;
           box-sizing: border-box;
           border: 1px solid #E5E5E5;
           border-radius: 4px;
      }
    }
```

## 伪类和伪元素
+ :hover :active :visited :link :first-child :focus :lang
+ 伪元素： ::after ::before 
+ .switch:hover.switch:before {}
+ nth-last-of-type (1) nth-last-child(1)
+ :not(:last-child)

## 定位
+ 相对定位： position：relative; 对象不可层叠
+ 绝对定位： position: absolute; 取最近一个最有定位设置的父级对象进行绝对定位，如果对象的父级没有设置定位属性，则将以body原点
+ position: sticky;不脱离文档流，仍然保留元素原本在文档流中的位置
+ fixed: 根据body布局

## css实现div宽度自适应，宽高比缩放
```
width: 30%;
padding-bottom: 30vh;
height: 0;
```

## link @import
+ 区别1：link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS
+ link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。
+ link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
+ link支持使用Javascript控制DOM去改变样式；而@import不支持。

## flex
### 容器属性
+ flex-direction: row column（垂直）
+ flex-wrap: nowrap
+ flex-flow: flex-direction flex-wrap 
+ justify-content: flex-start space-between 主轴
+ align-items: center  交叉
+ align-content: center flex-start 多轴
### 项目属性
+ order: 1
+ flex-shrink: 1
+ flex-grow: 1
+ flex-basis: 
+ flex: 1
+ align-self
### flex: 1
+ flex-shrink: 1;
+ flex-grow: 1;
+ flex-basis: 0%;

## ie模型和标准盒模型
+ IE盒模型的content包括border、padding  ，width  = content + padding + border; width要包含content和padding和border
+ 标准： width = content;  width不包含content和padding和border； 页面显示的宽度大于自定义的width
+ 标准：box-sizing: content-box
+ ie模型： box-sizing: border-box

## css盒模型？border-box 和content-box区别
### 盒模型
+ display position float width height margin padding border

## css单位有哪些
+ rem: (html: font-size: 16px)
+ em
+ vw
+ vh
+ px

## transform（变形）
+ + transform: translate(30px, 20px) rotate(20deg);

## translate（移动，为transform的一个属性）

## transition(过度): property(属性) duration timing-function(速度曲线) delay
+ transition: background 1s ease 1s, width 2s, 

## animation
+ name 
+ duration 
+ delay 
+ iteration-count（次数）: 1   infinite
+ play-state(状态) running  paused
+ fill-mode： 动画结束后，元素样式
  + forwards
  + both
  + none;
+ direction: alternate(来回)  normal  reverse  alternate-reverse
+ timing-function: ease

## css如何实现动画
```
.div:hover {
  width: 200px;
}

.div {
  width: 100px;
  height: 100px;
  background: red;
  transition: 1s;
}
.div:hover {
  width: 100px;
  height: 100px;
  background: yellow;
}

.div {
  width: 100px;
  height: 100px;
  background: red;
}
.div:hover {
  animation:div-ani 1s linear;
}
@keyframes div-ani {
  100% {
    width: 100px;
    height: 100px;
    background: yellow;
  }
}
```
+ hover; 没有过度效果
+ transition
+ animation

## 居中为啥使用transform
+ transform是独立的层，而margin会导致重绘回流

## 清除浮动的方式
+ clear: .clear { clear: both; height: 0; overflow: hidden;}
+ 利用bfc: 计算高度时就会计算float的元素的高度，达到清除浮动影响的效果, 给浮动的父元素加overflwo-hiddin,使其形成bfc
+ 利用clear+伪元素

## css渲染顺序

## transform
+ transform创建了一个renderLayers，拥有独立的grapicsLayers，

## 如何实现高度自适应

## 上下固定中间滚动布局
-

## em和px的区别
+ em相对
+ px绝对

## css选择器权重
+ 标签选择器
+ 类选择器
+ id选择器
+ 相邻选择器：h1+p
+ 子选择器：ul > li
+ 后代选择器： li a
+ 通配符选择器
+ 属性选择器：a[rel="external"]
+ 伪类选择器： a:hover, li:nth-child

## nth-child和nth-type-of区别
+ nth-child(2): 第二个子元素
+ p:nth-of-type(2): 第二个p

## flex布局，把八个元素分两行摆放
+ flex: 0 0 25%;
+ flex-flow: row wrap;
+ flex-content: flex-start;
+ box-sizing: border-box;

## css实现一个不知道宽高的div局中有哪几种方式
+ flex; align-items; center; justify-content: center;
+ position transform;
+ position margin
+ 

## grid布局

## 屏幕占满和未占满，footer固定在底部方法

## css三角形
```
.triangle {
  width: 0;
  height: 0;
  border-width: 0 25px 40px 25px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
```

## css扇形
```
.sector {
  border-radius: 0 0 0 200px 
  width: 200px;
  height: 200px;
  background: yellowgreen;
}
```

## css如何实现半圆
```
.div {
  width: 100px;
  height: 100px;
  border-radius: 100px 100px 0 0;
  background: yellow;
}
```

## css超出省略，三行省略
```
width: 500px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;

// 多行
display: -webkit-box;
word-break: break-all;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
text-overflow: ellipsis;
```

## css inherit initial unset三者区别
+ inherit: 默认
+ initial: 继承
+ unset: 不设置，CSS关键字 unset 从其父级继承，则将该属性重新设置为继承的值，如果没有继承父级样式，则将该属性重新设置为初始值。换句话说，在第一种情况下（继承属性）它的行为类似于inherit ，在第二种情况下（非继承属性）类似于initial
```
.foo {
  color: blue;
}
.bar {
  color: green;
}

p {
  color: red;
}
.bar p {
  color: unset;
}
```

## 响应式布局用到的技术，移动端需要注意哪些

## 响应式布局
+ px和视口
+ 媒体查询
+ 百分比
+ 自适应场景下的rem解决方案
+ 通过vw/vh来实现自适应


## 双飞翼和圣杯布局 flex（https://juejin.im/post/5a9813d6f265da237506506f）

## css左右定宽右边自适应
+ 双飞翼： float
+ 圣杯: float
+ float
+ margin + position
+ flex
+ calc函数

## css左边定宽右边自适应

## web-fonts
+ web Fonts: 在以前使用 CSS 指定字体时只能使用用户电脑本地上现有的字体，而由于每个用户电脑上的字体可能都不一样，所以能用的基本上就是操作系统内置的一些字体，例如微软雅黑，宋体，苹果苹方，这些也叫做安全字体（Web Safe Fonts）。
+ 为了使字体显示正常，我们一般会通过 font-family 属性同时指定多个字体，如果第一个字体没有在操作系统中找到，就会使用下一个后备字体
+ font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
+ CSS 开始支持 @font-face 这个指令，可以加载自定义的字体文件，这个时候可以把字体随网站一起发布，用户在浏览网站的时候，会下载 @font-face 中指定的字体
```
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  src: url(/fonts/raleway.woff2) format('woff2'); // src 属性用于指定字体的位置，其中 url() 函数也接受网络地址，来加载第三方提供的字体文件，这样也催生了像 Google Fonts 这样的云字体服务
}
```

## css houdini

## css矩阵与高性能渲染

## css3d在前端应用

## 现代化css与方法论

## css预处理器，less带来的好处
+ 无法嵌套，重复选择器
+ 没有变量，和合理的样式复用机制
+ 代码量少，便于维护
+ 基础颜色使用变量
+ 代码块，节省代码
+ 混入，变量，提升复用性
+ 额外工具颜色函数


## word-wrap:break-word; word-break:break-all;
+ word-wrap 强调的是是否允许单词内断句，
+ word-break强调的则是怎么样来进行单词内的断句,  word-break 指定了怎样在单词内断行
  + normal: 使用默认的断行规则,中文换行，英文不换行
  + break-all: 对于non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。英文换行，中文换行
  + keep-all: CJK 文本不断行。 Non-CJK 文本表现同 normal。中文英文都不换行
  + break-word： 对于non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。英文换行，中文换行
+ word-wrap || overflow-wrap
  + normal： 行只能在正常的单词断点处中断。（例如两个单词之间的空格）
  + break-word： 表示如果行内没有多余的地方容纳该单词到结尾，则那些正常的不能被分割的单词会被强制分割换行。
+ white-space:

## justify-content：space-between around区别
+ space-between: 两端对齐，项目之间的间隔都相等
+ space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

