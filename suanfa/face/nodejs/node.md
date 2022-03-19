# node
## event loop
+ javascript
  + heap stack
  + 主线程
  + 消息队列
+ nodejs： 每个用户请求的时候，是否用一套代码？
  + js源码首先交给node 中的v8引擎进行编译
  + 编译好的js代码通过node api 交给 libuv库 处理
  + libuv库通过阻塞I/O和异步的方式，为每一个js任务（文件读取等等）创建一个单独的线程，形成多线程
  + 通过Event Loop的方式异步的返回每一个任务执行的结果，然后返回给V8引擎，并反馈给用户
  ```
  timers：此阶段执行由setTimeout（）和setInterval（）调度的回调。
  pending callbacks：执行I / O回调，推迟到下一个循环迭代。
  idle,prepare：只在内部使用。
  poll：检索新的I / O事件; 执行I / O相关的回调函数;  适当时节点将在此处阻塞。
  check：setImmediate（）回调在这里被调用。
  close backbacks：一些关闭回调，例如 socket.on（'close'，...）。


  node中只有一个js引擎在主线程上运行。其他异步IO和事件驱动相关的线程通过libuv来实现内部的线程池和线程调度。libv中存在了一个Event Loop，通过Event Loop来切换实现类似于多线程的效果。简单的来讲Event Loop就是维持一个执行栈和一个事件队列，当前执行栈
  不同于浏览器的是，在每个阶段完成后，而不是MacroTask任务完成后，microTask队列就会被执行;
  setTimeout(()=>{
    console.log('timer1')

    Promise.resolve().then(function() {
        console.log('promise1')
    })
  }, 0)

  setTimeout(()=>{
      console.log('timer2')

      Promise.resolve().then(function() {
          console.log('promise2')
      })
  }, 0)

  最初timer1和timer2就在timers阶段中。开始时首先进入timers阶段，执行timer1的回调函数，打印timer1，并将promise1.then回调放入microtask队列，同样的步骤执行timer2，打印timer2；
  至此，timer阶段执行结束，event loop进入下一个阶段之前，执行microtask队列的所有任务，依次打印promise1、promise2。
  而浏览器则因为两个setTimeout作为两个MacroTask, 所以先输出timer1, promise1，再输出timer2，promise2。

  浏览器输出：
  time1
  promise1
  time2
  promise2

  Node输出：
  time1
  time2
  promise1
  promise2
  ```
## node gc(https://juejin.im/post/5d1b69b051882579d428d458)
+ V8垃圾回收机制： 垃圾回收是指回收那些在应用程序中不在引用的对象，当一个对象无法从根节点访问这个对象就会做为垃圾回收的候选对象。这里的根对象可以为全局对象、局部变量，无法从根节点访问指的也就是不会在被任何其它活动对象所引用。
+ 内存在服务端本来就是一个寸土寸金的东西，在 V8 中限制 64 位的机器大约 1.4GB，32 位机器大约为 0.7GB
+ V8的内存管理机制
  + 通过process.memoryUsage()可以查看此Node进程的内存使用状况
  + 进程占用的所有内存称为常驻内存
    + 代码区（Code Segment）：存放即将执行的代码片段
    + 堆（Heap）：存放对象、闭包上下文
    + 栈（Stack）：存放局部变量
    + 堆外内存：不通过V8分配，也不受V8管理。Buffer对象的数据就存放于此。
    + V8为堆分配的内存不超过1.4G：64位系统1.4G，32位则仅分配0.7G;Node的启动命令更改V8为堆设置的内存上限
    ```
    //更改老年代堆内存
    --max-old-space-size=3000 // 单位为MB
    // 更改新生代堆内存
    --max-new-space-size=1024 // 单位为KB
    ```
+ 垃圾回收机制 :在 V8 中也提供了两个参数仅在启动阶段调整内存限制大小;V8将堆中的对象分为两类;V8为老年代分配的空间，大概是新生代的40多倍。
  + 新生代: 年轻的新对象，未经历垃圾回收或仅经历过一次;新对象都会被分配到新生代中，当新生代空间不足以分配新对象时，将触发新生代的垃圾回收。
    + 由于新空间中的垃圾回收很频繁，因此它的处理方式必须非常的快，采用的 Scavenge 算法
    + Scavenge 是一种复制算法，新生代空间会被一分为二划分成两个相等大小的 from-space 和 to-space。
      + Scavenge是依次连续复制，所以To空间永远不会存在内存碎片。
    + 新生代触发垃圾回收时是将 from space 中存活的对象复制出来，然后移动它们到 to space 中或者被提升到老生代空间中，对于 from space 中没有存活的对象将会被释放。
      + 对象此前已经经历过一次新生代垃圾回收，这次依旧应该存活，则晋升至老年
      + To空间已经使用了25%，则将此对象直接晋升至老年代。
      + From空间所有应该存活的对象都复制完成后，原本的From空间将被释放，成为闲置空间，原本To空间则成为使用中空间，两个空间进行角色翻转。
      + 为何To空间使用超过25%时，就需要直接将对象复制到老年代呢？因为To空间完成垃圾回收后将会翻转为From空间，新的对象分配都在此处进行，如果没有足够的空闲空间，将会影响程序的新对象分配。
  + 老生代:至少都已经历过一次甚至更多次垃圾回收,更大的概率继续存活(https://www.jianshu.com/p/4129a3fce7bb)
    + 老年代的堆内存是新生代的几十倍，其中生活着大量对象，因此如果使用Scavenge算法回收老年代，将会面临大量的存活对象需要复制的情况，将老年代空间对半划分，也会浪费相当大的空间，效率低下。
    + 主要采用标记清除(Mark-Sweep)和标记整理(Mark-Compact)。这两种方式并非互相替代关系，而是配合关系
    + 新生代中死亡对象占多数，因此采用Scavenge算法只处理存活对象，提高效率。老年代中存活对象占多数，于是采用标记清除算法只处理死亡对象，提高效率。
    + 当老年代的垃圾回收被触发时，V8会将需要存活对象打上标记，然后将没有标记的对象，也就是需要死亡的对象，全部擦除，一次标记清除式回收就完成了
    + 为了解决这种空间碎片的问题，就出现了标记整理算法

## Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境

## koa2 egg

## SOLID设计与inversifyjs

## v8

## koa-bodyparser中的body指的就是请求报文中的报文主体部分
+ ctx.body = ctx.request.body;

## koa-static

## koa-json
+ ctx.body = { foo: 'bar' };

## fs
+ 权限位 mode
  + 三种类型进行权限分配，即文件所有者（自己）、文件所属组（家人）和其他用户（陌生人），文件操作权限又分为三种，读、写和执行，数字表示为八进制数，具备权限的八进制数分别为 4、2、1，不具备权限为 0。
  + process.stdin（标准输入）、process.stdout（标准输出）和 process.stderr（错误输出）ls -al
    + drwxr-xr-x 第一位代表是文件还是文件夹，d 开头代表文件夹，- 开头的代表文件，而后面九位就代表当前用户、用户所属组和其他用户的权限位，按每三位划分，分别代表读（r）、写（w）和执行（x），- 代表没有当前位对应的权限
+ 标识位 flag 
  + r：读取
  + w：写入
  + s：同步
  + +：增加相反操作
  + x：排他方式
+ 文件描述符 fs
  + process.stdin（标准输入）、process.stdout（标准输出）和 process.stderr（错误输出）
+ api
  + 读：
    + 异步模式下读取文件 fs.read(fd, buffer, offset, length, position, callback)
    + fs.readFile(filename,[encoding],[callback(error,data)]
  + 写 
    + fs.writeFile(filename,data,[options],callback)
  + 获取文件信息
    + fs.stat(path, callback)
  + 关闭
    + fs.close(fd, callback)
  + 截取文件
    + fs.ftruncate(fd, len, callback)
  + 删除文件
    + fs.unlink(path, callback)
  + 创建目录
    + fs.mkdir(path[, options], callback)
  + 读取目录
    + fs.readdir(path, callback)
  + 删除目录
    + fs.rmdir(path, callback)
  + 复制
    + fs.copyFile(filenameA, filenameB，callback)
  + 检查目录
    + 异步fs.exists(path, callback)
    + 同步fs.existsSync(path)
  + 文件信息
    + fs.stat(path, callback)
    + fs.lstat(path, callback)
    + fs.statSync(path)
    + fs.lstatSync(path)
  + 文件高级操作
    + fs.open(path,flags,[mode],callback)

## process对象
+ process.stdout 输出
  + write
+ process.stdin 输入
+ 方法：
  + process.chdir()：切换工作目录到指定目录。
  + process.cwd()：返回运行当前脚本的工作目录的路径。
  + process.exit()：退出当前进程。

## cluster
+ worker对象：const work = cluster.forks()
+ cluster.workers对象
+ work方法：
  + kill()
  + fork()
  + cluster.workers[id].kill()

## pm2
+ PM2 的主要特性
  + 内建负载均衡（使用 Node cluster 集群模块）
  + 后台运行
  + 0 秒停机重载，我理解大概意思是维护升级的时候不需要停机.
  + 具有 Ubuntu 和 CentOS 的启动脚本
  + 停止不稳定的进程（避免无限循环）
  + 控制台检测
  + 提供 HTTP API
  + 远程控制和实时的接口 API ( Nodejs 模块,允许和 PM2 进程管理器交互 )
+ 用法
  + npm install -g pm2
  + pm2 start // pm2 start ./build/server.js
  + pm2 list 查看所有启动的进程列表
  + pm2 show (appname|id)
  + pm2 logs 显示所有进程的日志信息
  + pm2 web 监控运行这些进程的机器的状态   0.0.0.0:9615
  + pm2 monit 监控每个 node 进程的 cpu 和内存使用情况
  + pm2 stop (id|all) 停止 指定/所有 进程
  + pm2 restart (id|all) 重启 指定/所有 进程
  + pm2 delete (id|all) 杀死 指定/所有 进程
  + 配置 PM2 启动文件 pm2.config.js 
  + pm2 start server.js -i (number|max) 负载均衡   pm2 start app.js -i max
  + log4js 日志分割 log4js来进行按日期写入 pm2为我们提供了插件系统、，pm2-logrotate-ext
  + 配合pm2-web实现监控可视化： npm install -g pm2-web
    + pm2 web
    + pm2-web --config pm2-web-config.json

## child_process
+ spawn ： 子进程中执行的是非node程序，提供一组参数后，执行的结果以流的形式返回。
+ execFile：子进程中执行的是非node程序，提供一组参数后，执行的结果以回调的形式返回。
+ exec：子进程执行的是非node程序，传入一串shell命令，执行后结果以回调的形式返回，与execFile不同的是exec可以直接执行一串shell命令。
+ fork：子进程执行的是node程序，提供一组参数后，执行的结果以流的形式返回，与spawn不同，fork生成的子进程只能执行node应用。接下来的小节将具体的介绍这一些方法。
  + 在子进程中：通过process.on('message')和process.send()的机制来接收和发送消息
  + 在父进程中：通过child.on('message')和process.send()的机制来接收和发送消息
  + 中断父子间通信的方式，可以通过在父进程中调用: child.disconnect()

+ exec、execFile、spawn和fork执行的子进程都是默认异步的，子进程的运行不会阻塞主进程;child_process模块同样也提供了execFileSync、spawnSync和execSync来实现同步的方式执行子进程。
+ 第一个方面就是集成了child_process.fork方法创建node子进程的方式，第二个方面就是集成了根据多核CPU创建子进程后，自动控制负载均衡的方式。
