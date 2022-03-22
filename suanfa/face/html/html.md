## window(https://developer.mozilla.org/zh-CN/docs/Web/API/Window)
+ 属性：
  + frameElement 返回嵌入窗口的元素，如果未嵌入窗口，则返回null。 frames 返回当前窗口中所有子窗体的数组。
  + history用来获取History 对象的引用，History 对象提供了操作浏览器会话历史
    + go(-1)
    + back()
    + forward() 在浏览器历史记录里前往下一页，用户可点击浏览器左上角的前进(译者注：→)按钮模拟此方法. 等价于 history.go(1).
    + pushState() 按指定的名称和URL（如果提供该参数）将数据push进会话历史栈，数据被DOM进行不透明处理
      + pushState 会调用浏览器原生的 history 的 pushState 接口或者 replaceState 接口，更新浏览器的 url 地址，并把当前 url 压入历史栈中
      + window.addEventListener("hashchange", 
      + window.addEventListener('popstate', // 当点击浏览器返回按钮的时候，如果已经有 url 被压入历史栈，则会触发 popstate 事件
    + replaceState() 按指定的数据，名称和URL(如果提供该参数)，更新历史栈上最新的入口。这个数据被DOM 进行了不透明处理。
  + innerWidth length(窗口中的 frames 数量) outerHeight outerWidth 
  + pageYOffset=scrollY pageYOffset=scrollX
  + top
  + document
    + addEventListener()
    + cookie
    + createAttribute()
    + createDocumentFragment()
    + createElement()
    + createTextNode()
    + documentElement
    + domain
    + getElementsByClassName()  document.getElementsByClassName("example");
    + getElementById() document.getElementById("demo");
    + getElementsByName()
    + getElementsByTagName()
    + lastModified
    + querySelector() document.querySelector("#demo") document.querySelector("body")
    + querySelectorAll() document.querySelectorAll(".example");
    + removeEventListener()
    + referrer
    + readyState
    + scripts
    + title
    + URL
    + links
  + innerHeight
  + parent 返回当前窗口或子窗口的父窗口的引用。
  + location 返回一个 Location  对象，其中包含有关文档当前位置的信息。
  + localStorage
  + name
  + onhashchange oninput onblur  onclick ondblclick onfocus onerror  onkeydown onkeyup onkeypress onload
  + navigator: 表示用户代理的状态和标识。 它允许脚本查询它和注册自己进行一些活动
  + Performance
    + navigation: 对象提供了在指定的时间段里发生的操作相关信息，包括页面是加载还是刷新、发生了多少次重定向
    + memory: 这个属性提供了一个可以获取到基本内存使用情况的对象
    + timeOrigin : 返回性能测量开始时的时间的高精度时间戳。
    + timing: 对象包含延迟相关的性能信息。已经被废弃
    + Performance.clearMarks() 将给定的 mark 从浏览器的性能输入缓冲区中移除。
    + Performance.clearMeasures() 将给定的 measure 从浏览器的性能输入缓冲区中移除。
    + Performance.clearResourceTimings() 从浏览器的性能数据缓冲区中移除所有 entryType 是 "resource" 的  performance entries
    + Performance.getEntries() 基于给定的 filter 返回一个 PerformanceEntry 对象的列表。
    + Performance.getEntriesByName() 基于给定的 name 和 entry type 返回一个 PerformanceEntry 对象的列表。
    + Performance.getEntriesByType() 基于给定的 entry type 返回一个 PerformanceEntry 对象的列表
    + Performance.mark() 根据给出 name 值，在浏览器的性能输入缓冲区中创建一个相关的timestamp
    + Performance.measure() 在浏览器的指定 start mark 和 end mark 间的性能输入缓冲区中创建一个指定的 timestamp
    + Performance.now() 返回一个表示从性能测量时刻开始经过的毫秒数 DOMHighResTimeStamp
    + Performance.toJSON() 其是一个 JSON 格式转化器，返回 Performance 对象的 JSON 对象
    + Performance.setResourceTimingBufferSize() 将浏览器的资源 timing 缓冲区的大小设置为 "resource" type performance entry 对象的指定数量
  + Performance Timeline Level 2标准: PerformanceObserver
    + 扩展了Performance接口的基本定义
    + 在Web Workers中暴露了PerformanceEntry
    + 增加了PerformanceObserver的支持
  + document
    +  属性
       +  window.document.title
    + 方法
      + createDocumentFragment() appendChild  创建一个新的空白的文档片段( DocumentFragment)
      + createElement()
      + createAttribute()
+ 方法：
  + open close confirm focus
  + back=history.back 
  + blur 
  + Window.postMessage() window.addEventLister("message", function)
  + Window.moveTo() moveBy 绝对位置移动当前窗口，而window.moveBy函数按照与当前位置相对的距离移动当前窗口。
  + getComputedStyle() getDefaultComputedStyle()
  + cancleAnimationFrame 
  + clearImmediate()= setImmediate
  + cancelIdleCallback=Window.requestIdleCallback.  启用在浏览器空闲期间对任务进行调度。
  + Window.requestAnimationFrame() 你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画
  + resizeBy() resizeTo
  + scroll() scrollBy() scrollTo()

## html布局元素的分类有哪些
+ 内联元素 textarea span i a b strong em br input 
+ 块状元素: div,h1-h6,hr,menu,ol,ul,li,dl,table,p,from
+ 内联块状元素

## html5新元素
+ canvas, video, header, footer, aside, nav, audio, progress, section, time, rt(定义字符（中文注音或字符）的解释或发音) rp(在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容), meter(定义度量衡。仅用于已知最大和最小值的度量,进度， figure> 标签规定独立的流内容（图像、图表、照片、代码等等，如果被删除，则不应对文档流产生影响）， <details> 标签规定了用户可见的或者隐藏的需求的补充细节

## html5新功能
+ navigator.geolocation
+ canvas, svg
+ video
+ audio
+ 拖放：
  + 拖放元素：draggable= true(设置元素为可拖放) ondragstart（规定当元素被拖动时，会发生什么） dataTransfer.setData() 方法设置被拖数据的数据类型和值，Text 是一个 DOMString 表示要添加到 drag object 的拖动数据的类型。值是可拖动元素的 id ("drag1")
  + ondrop（当放置被拖数据时，会发生 drop 事件） ondragover（ondragover 事件规定在何处放置被拖动的数据）
+ 地理定位：navigator.geolocation.getCurrentPosition
+ 应用程序缓存（Application Cache）
+ web sql
+ web worker 是运行在后台的 JavaScript，不会影响页面的性能。
+ websocket
+ html兼容问题
  + html5shiv.js

## 减少dom数量的办法，一次性给你大量dom怎么优化
+ 减少dom数量的方法
  + 使用伪元素
  + 按需加载
  + 结构合理，语义化表签
+ 大量dom的优化
  + 缓存dom对象
  + 文档片段：document.createDocumentFragment()方法，文档碎片节点，虚拟节点。  document.createDocumentFragment
    + requestAnimationFrame: 
      + 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
      + requestAnimationFrame() 运行在后台标签页或者隐藏的<iframe> 里时，requestAnimationFrame() 会被暂停调用以提升性能和电池寿命
  + cloneNode 复制
+ 用innerHtml替代高频的appendChild
+ 最优化的layout方案
  + 先对一个不在render tree上的节点进行操作，再把节点添加回render tree。使用requestAnimationFrame()把导致重绘的操作放入；
+ 虚拟dom，
+ dom发生变化的时候先对虚拟dom做操作，通过dom diff算法将虚拟dom和原虚拟dom结构进行对比，批量去修改真实的dom结构。


## 
+ html -> html parser-> DOm tree -> 
+ style-> css parser -> style rules->
+ render tree -> layout -> painting -> composite layers（合并图层输出到页面屏幕）
+ transform: renderLayers(渲染合成层)-> 独立的graphicsLayers(绘图层,有一个独立的graphics context,其对应的renderLayers会pait进graphics context中）->compositor（合成器）会将由graphics context输出的位图合并到屏幕。

## 浏览器解析渲染页面(layout(布局、回流)、painting(渲染、绘制、重绘)、渲染层、合成层、位图、纹理、gpu、gpu合并位图)https://blog.csdn.net/wangfeijiu/article/details/106651592
+ DOM Tree：浏览器将HTML解析成树形的数据结构。(https://segmentfault.com/a/1190000014520786)
+ CSS Rule Tree：浏览器将CSS解析成树形的数据结构。
+ Render Tree: DOM和CSSOM合并后生成Render Tree。
+ layout: 布局;有了Render Tree，浏览器已经能知道网页中有哪些节点、各个节点的CSS定义以及他们的从属关系，从而去计算出每个节点在屏幕中的位置。
+ painting:绘制； 按照算出来的规则，通过显卡，把内容画到屏幕上。
+ Composite（渲染层合并）对页面中 DOM 元素的绘制是在多个层上进行的。在每个层上完成绘制过程之后，浏览器会将所有层按照合理的顺序合并成一个图层，然后显示在屏幕上。对于有位置重叠的元素的页面，这个过程尤其重要，因为一旦图层的合并顺序出错，将会导致元素显示异常
  + javascript -style- layout- paint- composite
  + javascript -style- paint- composite
  + javascript -style- composite
  + RenderObject变成了LayoutObject，RenderLayer变成了PaintLayer渲染层）
    + RenderObjects 保持了树结构，一个 RenderObjects 知道如何绘制一个 node 的内容， 他通过向一个绘图上下文（GraphicsContext）发出必要的绘制调用来绘制 nodes。
    + DOM 树中得每个 Node 节点都有一个对应的 LayoutObject 。LayoutObject 知道如何在屏幕上 paint Node 的内容。
  + PaintLayer（渲染层）->GraphicsLayers(合成层)
    + 某些特殊的渲染层会被认为是合成层（Compositing Layers），合成层拥有单独的 GraphicsLayer，而其他不是合成层的渲染层，则和其第一个拥有 GraphicsLayer 父层公用一个
    + 每个 GraphicsLayer 都有一个 GraphicsContext，GraphicsContext 会负责输出该层的位图，位图是存储在共享内存中，作为纹理上传到 GPU 中，最后由 GPU 将多个位图进行合成，然后 draw 到屏幕上，此时，我们的页面也就展现到了屏幕上
    + 渲染层提升为合成层有一个先决条件，该渲染层必须是 SelfPaintingLayer
      + 硬件加速的 iframe 元素（比如 iframe 嵌入的页面中有合成层）
      + 3D 或者 硬件加速的 2D Canvas 元素
      + 覆盖在 video 元素上的视频控制栏
      + video 元素
      + 有 3D transform
      + backface-visibility 为 hidden
      + 对 opacity、transform、fliter、backdropfilter 应用了 animation 或者 transition
+ reflow（回流）：当浏览器发现某个部分发生了点变化影响了布局，需要倒回去重新渲染，内行称这个回退的过程叫 reflow
```
  + display: none
  + 添加或者删除可见的DOM元素；
  + 元素位置改变；
  + 元素尺寸改变——边距、填充、边框、宽度和高度
  + 内容改变——比如文本改变或者图片大小改变而引起的计算值宽度和高度改变；
  + 页面渲染初始化；
  + 浏览器窗口尺寸改变——resize事件发生时；

  + 1）offsetTop, offsetLeft, offsetWidth, offsetHeight
  +（2）scrollTop/Left/Width/Height
  +（3）clientTop/Left/Width/Height
  +（4）width,height
  +（5）请求了getComputedStyle(), 或者 IE的 currentStyle
  + 1）添加css样式而不是利用js控制样式（我就是想到这种办法解决回流问题的）
  +（2）尽量将需要改变DOM的操作一次完成
  +（3）直接改变className，如果动态改变样式，则使用cssText（考虑没有优化的浏览器）
  +（4）不要经常访问会引起浏览器flush队列的属性，如果你确实要访问，利用缓存
  +（5）让元素脱离动画流，减少回流的Render Tree的规模
  +（6）将需要多次重排的元素，position属性设为absolute或fixed，这样此元素就脱离了文档流，它的变化不会影响到其他元素。例如有动画效果的元素就最好设置为绝对定位；
  +（7）尽量不要使用表格布局，如果没有定宽表格一列的宽度由最宽的一列决定，那么很可能在最后一行的宽度超出之前的列宽，引起整体回流造成table可能需要多次计算才能确定好其在渲染树中节点的属性，通常要花3倍于同等元素的时间。
  ```
+ repaint（重绘）：改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性时，屏幕的一部分要重画，但是元素的几何尺寸没有变
  +  visibility:hidden 只会触发 repaint，因为没有发现位置变化


## window.scrollTo || element.scrollTop(这个元素的顶部到视口可见内容(的顶部)的距离的度量)
+ // window.scrollTo || window.pageYOffset
+ // container scrollTop: scroll是在容器，而不是inner
+ // element.scrollTop (返回数字，单位像素) || window.document.documentElement.scrollTop  || window和document没有scrollTop
+ // 兼容性问题：获得整个文档scrollTop，IE是document.documentElement.scrollTop，FF/CH则是document.body.scrollTop.
```
  // window.scroll()，window.scrollBy()，window.scrollTo()
  // window.scroll(x,y)是让window滚动条滚动到那个x,y坐标。//x是水平坐标，y是垂直坐标。
  // window.scrollBy(-x,-y)是让window滚动条相对滚动到某个坐标，- 10即相对向左/向上滚动10像素。
  // window.scrollTo(x,y)和window.scroll(x,y)一样。
```

## Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。
+ getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置, 最底部，最左边，最右边

## scrollHeight, clientHeight, offsetHeight, scrollTop
> clientHeight：包括padding但不包括border、水平滚动条、margin的元素的高度 Element.clientWidth 属性表示元素的内部宽度，以像素计。该属性包括内边距 padding，但不包括边框 border、外边距 margin 和垂直滚动条（如果有的话）
> offsetHeight：包括padding、border、水平滚动条，但不包括margin的元素的高度
> scrollHeight代表包括当前不可见部分的元素的高度。而可见部分的高度其实就是clientHeight scrollHeight>=clientHeight恒成立
+ document.body
+ document.body 属性返回 <body> 元素， document.documentElement 属性返回 <html> 元素。
+ element.clientHeight: 在页面上返回内容的可视高度（不包括边框，边距或滚动条）
```
  // clientHeight 在页面上返回内容的可视高度（不包括边框，边距或滚动条）
  console.log(document.documentElement.clientHeight) // 可见区域高度
  console.log(document.body.clientHeight) // 可见区域高度-------------

  // scrollTop 返回当前视图中的实际元素的顶部边缘和顶部边缘之间的距离
  console.log(document.documentElement.scrollTop) // chrom不起作用
  console.log(document.body.scrollTop); //滚动条距离顶部高度---------

  // offsetHeight 返回任何一个元素的高度包括边框和填充，但不是边距margin
  console.log(document.documentElement.offsetHeight) // 
  console.log(document.body.offsetHeight); //

  // scrollHeight  返回整个元素的高度（包括带滚动条的隐蔽的地方）
  console.log(document.documentElement.scrollHeight) // 
  console.log(document.body.scrollHeight); //

  // offsetTop  返回当前元素的相对垂直偏移位置的偏移容器 父容器   HTMLElement.offsetTop 为只读属性，它返回当前元素相对于其 offsetParent 元素的顶部内边距的距离。
  console.log(document.documentElement.offsetTop) // 0
  console.log(document.body.offsetTop); // 0

  // getBoundingClientRect()  距离顶部窗口
  console.log(document.documentElement.getBoundingClientRect()) // 0
  console.log(document.body.getBoundingClientRect()); // -123123



  <script>
    /*
     ****** 元素视图属性
     * offsetWidth 水平方向 width + 左右padding + 左右border-width
     * offsetHeight 垂直方向 height + 上下padding + 上下border-width
     * 
     * clientWidth 水平方向 width + 左右padding
     * clientHeight 垂直方向 height + 上下padding
     * 
     * offsetTop 获取当前元素到 定位父节点 的top方向的距离
     * offsetLeft 获取当前元素到 定位父节点 的left方向的距离
     * 
     * scrollWidth 元素内容真实的宽度，内容不超出盒子高度时为盒子的clientWidth
     * scrollHeight 元素内容真实的高度，内容不超出盒子高度时为盒子的clientHeight
     * 
     ****** 元素视图属性结束
     * 
     ****** Window视图属性（低版本IE浏览器[<IE9]不支持） 【自测包含滚动条，但网络教程都说不包含？？？】
     * innerWidth 浏览器窗口可视区宽度（不包括浏览器控制台、菜单栏、工具栏） 
     * innerHeight 浏览器窗口可视区高度（不包括浏览器控制台、菜单栏、工具栏）
     * ***** Window视图属性结束
     * 
     ****** Document文档视图
     * （低版本IE的innerWidth、innerHeight的代替方案）
     * document.documentElement.clientWidth 浏览器窗口可视区宽度（不包括浏览器控制台、菜单栏、工具栏、滚动条）
     * document.documentElement.clientHeight 浏览器窗口可视区高度（不包括浏览器控制台、菜单栏、工具栏、滚动条）
     * 
     * document.documentElement.offsetHeight 获取整个文档的高度（包含body的margin）
     * document.body.offsetHeight 获取整个文档的高度（不包含body的margin）
     * 
     * document.documentElement.scrollTop 返回文档的滚动top方向的距离（当窗口发生滚动时值改变）
     * document.documentElement.scrollLeft 返回文档的滚动left方向的距离（当窗口发生滚动时值改变）
     ****** Document文档视图结束
     * 
     ****** 元素方法
     * 1. getBoundingClientRect() 获取元素到body
     *  bottom: 元素底边（包括border）到可视区最顶部的距离
     *  left: 元素最左边（不包括border）到可视区最左边的距离
     *  right: 元素最右边（包括border）到可视区最左边的距离
     *  top: 元素顶边（不包括border）到可视区最顶部的距离
     *  height: 元素的offsetHeight
     *  width: 元素的offsetWidth
     *  x: 元素左上角的x坐标 
     *  y: 元素左上角的y坐标 
     * 
     * 2. scrollIntoView() 让元素滚动到可视区
     * 
     * ***** 元素方法结束
     * 
     */

```

## 进程(https://blog.csdn.net/wangfeijiu/article/details/106563082)
+ brower进程
+ render进程
  
## 浏览器线程(render进场)
+ GUI 渲染线程
+ JS 线程
+ 定时器触发线程 (setTimeout)
+ 浏览器事件线程 (onclick)
+ http 异步线程

## DOM与CSS
+ css的加载不会阻塞DOM的解析（dom树）
+ css的加载会阻塞DOM的渲染（dom树+css树-》页面）

## dom js
+ JS（加载和执行） 都会阻塞 DOM 的解析，因为JS中可能会对DOM进行操作，可能改变DOM的结构，所以JS的加载和执行是会阻塞DOM解析的。
+ JS（加载和执行） 都会阻塞 DOM 的渲染，同上面一样，因为JS中可能对样式进行操作

## CSS与JS
+ CSS的加载阻塞JS的运行，不阻塞JS的加载（浏览器可以预先扫描并下载）
+ CSS的加载与JS的加载之间是否有影响？不考虑，浏览器自身会偷看并预先下载

## link引入的css会阻塞页面渲染吗，js会阻塞吗
+ link标签不会阻塞dom解析，但会阻塞dom渲染。浏览器并行解析生成dom tree和css tree.当两者生成完在生成render tree，页面才会渲染。
+ script标签会阻塞dom解析和渲染，
  + 脚本位置
  + 预加载，link preload
  + dns prefetch预解析
  + script 延迟脚本加载 defer/async

## defer async
> 这个属性的用途是表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在<script>元素中设置defer属性，相当于告诉浏览器立即下载，但延迟执行。
> HTML5规范要求脚本按照它们出现的先后顺序执行，因此第一个延迟脚本会先于第二个延迟脚本执行，而这两个脚本会先于DOMContentLoaded事件执行。在现实当中，延迟脚本并不一定会按照顺序执行，也不一定会在DOMContentLoad时间触发前执行，因此最好只包含一个延迟脚本。


## 你是如何理解 HTML 语义化的？
+ 用正确的标签做正确的事情。
+ html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
+ 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;
+ 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO;
+ 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

## 谈谈你对HTML5的理解？
+ 绘画 canvas
+ 用于媒介回放的 video 和 audio 元素
+ 本地通信（webSocket）
+ 本地存储（localStorage、sessionStorage）
+ 设备能力（地图定位，手机摇一摇）

## cookies localStorage  sessionStorage
+ cookie 最多能存储 4 k 数据，它的生存时间由 expires 属性指定，并且 cookie 只能被同源的页面访问共享
+ localStorage一般能够存储 5M 或者更大的数据。localStorage和 sessionStorage 不同的是，除非主动删除它，否则它不会失效，并且 localStorage 也只能被同源页面所访问共享
+ sessionStorage在当前窗口关闭后失效了，并且 sessionStorage 只能被同一个窗口的同源页面所访问共享。

## 盒子水平垂直居中的五大方案
+ 定位：三种
+ display:flex
+ flex/grid与margin:auto(最简单写法)
+ JavaScript
+ display:table-cell

## requestIdleCallback和requestAnimationFrame详解(https://www.jianshu.com/p/2771cb695c81?tt_from=weixin)