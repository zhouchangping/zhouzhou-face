## http https(https://zhuanlan.zhihu.com/p/57142784 漫画)
## http(https://blog.csdn.net/sinat_41696687/article/details/121029136)
+ http: 无状态，无法保持会话。
  + http-分块传输;分块传输，就是将传输的文件分解成多个小块，然后分发给浏览器，浏览器收到后再重新组装复原。
    + Transfer-Encoding:chunked表示报文里的body部分不是一次性发送过来的，而是分成了许多块逐个发送的;Transfer-Encoding：chunked和Content-Length中，这两个字段是互斥的。
  + http-范围请求: 要实现该功能需要制定下载的实体范围，这种制定范围发送请求叫做范围请求(断点续传)
    + Accept-Ranges：服务器使用http响应头Accept-Ranges标识自身支持范围请求，字段的具体值用于定义范围请求的单位。
    + 范围请求时用于不需要全部数据，只需要其中的部分请求时，可以使用范围请求，允许客户端在请求头里使用专用字段来表示只获取文件的一部分
    + REQUEST: Range的格式，请求头Range是HTTP范围请求的专用字段，格式是“bytes=x-y”,以字节为单位的数据范围。
  + http-多段数据: Content-Type 表明 multipart-byteranges; 分隔标记boundary来区分不同的分段
+ 影响一个 HTTP 网络请求的因素主要有两个：带宽和延迟。
+ http0.9: http0.9只是一个简单的协议，只有一个GET方法，没有首部，目标用来获取HTML

+ http1.0: 首部，响应码，重定向，错误，条件请求，内容编码
  - 缓存处理：HTTP1.1则引入了更多的缓存控制策略例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match
  - 带宽优化及网络连接的使用： HTTP1.0中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能
  错误通知的管理： 新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。
  - Host头处理： 请求消息中如果没有Host头域会报（虚拟机公用ip)
  - 轮询

+ http1.1: 缓存相关首部的扩展，OPTIONS方法，Upgrade首部，Range请求，压缩和传输编码，管道化，长链接等
  + 管道化特性可以让客户端一次发送所有的请求，但是有些问题阻碍了管道化的发展，即是某个请求花了很长时间，那么队头阻塞会影响其他请求。）http中的队头阻塞问题
    + 在宽带连接中，加速不是那么显著的，因为需要服务端应用 HTTP/1.1 协议:服务端必须按照客户端的请求顺序恢复请求，这样整个连接还是先进先出的，队头阻塞（HOL blocking）可能会发生，造成延迟。未来的HTTP/2.0或者SPDY中的异步操作将会解决这个问题。因为它可能将多个 HTTP 请求填充在一个TCP数据包内，HTTP 管线化需要在网络上传输较少的 TCP 数据包，减少了网络负载。
    + 管线化机制须透过永久连线（persistent connection）完成，并且只有 GET 和 HEAD 等要求可以进行管线化，非幂等的方法，例如POST将不会被管线化。连续的 GET 和 HEAD 请求总可以管线化的。
  + 改进持久连接和CDN域名的分片机制
  + 不成熟的http管道化
  + 提供虚拟主机支持
  + 对动态生成的内容完美支持
  + 引入cookie以及安全机制
  + HTTP/1.1能压缩请求内容，但是消息首部却不能压缩
  + http1.1中的长连接，使用connection:keep-alive进行长连接，客户端只请求一次，但是服务器会将继续保持连接，再次请求时，避免了重新建立连接；keep-alive不会永久保持连接，只有保持一个时间段。
+ SPDY: tcp + ssl/tls + http
  - 降低延迟,采取了多路复用(通过多个请求stream共享一个tcp连接的方式，解决了HOL blocking的问题，降低了延迟同时- 提高了带宽的利用率)
  - 请求优先级: 多路复用带来一个新的问题是，在连接共享的基础之上有可能会导致关键请求被阻塞;SPDY允许给每个request设置优先级，这样重要的请求就会优先得到响应
  - header压缩
  - 基于HTTPS的加密协议传输
  - 服务端推送（server push）

+ http2: 两个非常重要的概念，分别是帧（frame）和流（stream）。每一个TCP连接中承载了多个双向流通的流，每一个流都有一个独一无二的标识和优先级，而流就是由二进制帧组成的。二进制帧的头部信息会标识自己属于哪一个流，所以这些帧是可以交错传输，然后在接收端通过帧头的信息组装成完整的数据
  - HTTP2.0 支持明文 HTTP 传输，而 SPDY 强制使用 HTTPS
  - HTTP2.0 消息头的压缩算法采用 HPACK http://http2.github.io/http2-spec/compression.html，而非 SPDY 采用的 DEFLATE http://zh.wikipedia.org/wiki/DEFLATE
  - 新的二进制格式（Binary Format），HTTP1.x的解析是基于文本
  - 多路复用： 一个tcp对应多个流；
  - header压缩:如上文中所言，对前面提到过HTTP1.x的header带有大量信息，而且每次都要重复发送，HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。
  - 服务端推送
  - 重置消息
  - 流量控制
  - 资源优先级和依赖设置
  - http2中的帧（frame），http1不是基于帧（frame）的，是文本分隔的
  - 帧结构总结 所有的帧都包含一个9 byte的帧头 + 可变长的正文部分。根据帧的类型不同，正文部分的结构也不一样。
+ 多路复用和长链接区别：
  + HTTP2采用二进制格式传输，HTTP1.x的文本格式，二进制格式解析更高效
  + 多路复用代替了HTTP1.x的序列和阻塞机制；所有的相同域名请求都通过同一个TCP连接并发完成。在HTTP1.x中，并发多个请求需要多个TCP连接，浏览器为了控制资源会有6-8个TCP连接都限制
  + htpp1x: 连接数过多。我们假设Apache设置了最大并发数为300，因为浏览器限制，浏览器发起的最大请求数为6
  + htpp1x: 串行的文件传输。

+ https: tcp+ssl/tls：在交换密钥环节使用非对称加密方式，之后的建立通信交换报文阶段则使用对称加密方式。（https://juejin.im/post/5ca6a109e51d4544e27e3048）
> 1. 加密 2. 数字签名 3.
  - HTTPS协议需要到CA申请证书，一般免费证书很少，需要交费。
  - HTTP协议运行在TCP之上，所有传输的内容都是明文，HTTPS运行在SSL/TLS之上，SSL/TLS运行在TCP之上，所有传输的内容都经过加密的。
  - HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
  - HTTPS可以有效的防止运营商劫持，解决了防劫持的一个大问题。
## HTTP/3 原理实战（https://zhuanlan.zhihu.com/p/143464334）

## http和https区别
### http
+ 通信使用明文（不加密），内容可能被窃听
  + 由于HTTP本身不具备加密的功能，所以也无法做到对通信整体（使用HTTP协议通信的请求和响应的内容）进行加密。即，HTTP报文使用明文（指未经过加密的报文）方式发送。
+ 无法证明报文的完整性，所以可能遭篡改
  + 有任何办法确认，发出的请求/响应和接收到的请求/响应是前后相同的。
+ 不验证通信方的身份，因此有可能遭遇伪装
  + HTTP协议中的请求和响应不会对通信方进行确认。在HTTP协议通信时，由于不存在确认通信方的处理步骤，任何人都可以发起请求。
### https
+ 数据隐私性：内容经过对称加密，每个连接生成一个唯一的加密密钥
+ 数据完整性：内容传输经过完整性校验
+ 身份认证：第三方无法伪造服务端（客户端）身份
+ 在采用SSL后，HTTP就拥有了HTTPS的加密、证书和完整性保护这些功能
+ TLS/SSL 的功能实现主要依赖于三类基本算法：散列函数 、对称加密和非对称加密，其利用非对称加密实现身份认证和密钥协商，对称加密算法采用协商的密钥对数据加密，基于散列函数验证信息的完整性
### https：
+ 服务端把自己公钥key1给证书颁发机构
+ 证书机构用自己私钥加密key1,用服务端信息生成证书签名，证书签名用私钥加密，再把证书给服务器
+ 把证书发给客户端
+ 客户端浏览器维护了证书机构的名称和公钥，用公钥揭秘证书签名，自己也生成一个签名，比对。用公钥揭秘服务器公钥
+ 客户端生成对称加密key2，用服务端key1公钥加密key2,发给服务端

## http请求：八种
+ OPTIONS 返回服务器针对特定资源所支持的HTTP请求方法。也可以利用向Web服务器发送'*'的请求来测试服务器的功能性
+ HEAD 向服务器索要与GET请求相一致的响应，只不过响应体将不会被返回。这一方法可以在不必传输整个响应内容的情况下，就可以获取包含在响应消息头中的元信息
+ GET 向特定的资源发出请
+ POST 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的创建和/或已有资源的修改
+ PUT 向指定资源位置上传其最新内容
+ DELETE 请求服务器删除 Request-URI 所标识的资源
+ trace: 回显服务器收到的请求，主要用于测试或诊断
+ connect: HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器

## HTTP状态码: HTTP Status Code
+ 1--  客户端应继续其请求
  + 100 继续。
  + 101 切换协议
+ 2--  成功，操作被成功接收并处理
  + 200 请求成功。一般用于GET与POST请求
+ 3--  重定向，需要进一步的操作以完成请求
  + 300 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端
  + 301 永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
  + 302 临时移动。与301类似。但资源只是临时被移动
  + 303 查看其它地址
  + 304 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
  + 305 使用代理。所请求的资源必须通过代理访问
+ 4--  客户端错误，请求包含语法错误或无法完成请求
  + 400 客户端请求的语法错误，服务器无法理解
  + 401 请求要求用户的身份认证
  + 402	保留，将来使用
  + 403 服务器理解请求客户端的请求，但是拒绝执行此请求
  + 404 服务器无法根据客户端的请求找到资源（网页）。
  + 405 客户端请求中的方法被禁止
  + 408 服务器等待客户端发送的请求时间过长，超时
  + 410 客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，
+ 5--  服务器错误，服务器在处理请求的过程中发生了错误
  + 500 服务器内部错误，无法完成请求
  + 501 服务器不支持请求的功能，无法完成请求
  + 502 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
  + 503 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中
  + 504 充当网关或代理的服务器，未及时从远端服务器获取请求
  + 505 服务器不支持请求的HTTP协议的版本，无法完成处理

## http请求头 响应头： http请求一个HTTP请求报文由请求行（request line）、请求头（header）、空行和请求数据4个部分组成
```
<method> <request-URL> <version>
<headers>

<entity-body>
```
+ 请求行：GET /home.html HTTP/1.1 （请求方法，url, 协议版本）
+ 请求头：
  + 浏览器请求头： 请求头是浏览器端设置
    + Accept: application/json, text/plain, */*
    + Accept-Charset: 可支持字符集
    + range: 范围传递
    + Accept-Encoding: gzip, deflate, br 带上自己支持的内容编码格式列表
      + Accept-Encoding 和 Content-Encoding 是 HTTP 中用来对「采用何种编码格式传输正文」进行协定的一对头部字段。它的工作原理是这样：浏览器发送请求时，通过 Accept-Encoding 带上自己支持的内容编码格式列表；服务端从中挑选一种用来对正文进行编码，并通过 Content-Encoding 响应头指明选定的格式；浏览器拿到响应正文后，依据 Content-Encoding 进行解压。当然，服务端也可以返回未压缩的正文，但这种情况不允许返回 Content-Encoding。这个过程就是 HTTP 的内容编码机制。
      + 客户端会将内容编码的方式放入请求报文头部信息Content-Encoding属性中，服务器端接收报文主体的二进制数据了时，会根据该头部信息进行解压操作，当然服务器端可以在响应报文头部信息Accept-Encoding属性中添加支持的解压方式。
    + Accept-Language: zh-CN,zh;q=0.9
    + Access-Control-Request-Method: PUT/post
    + Connection: keep-alive
    + Host: localhost:3000 // 请求的服务器地址
    + Origin: http://localhost:8080
    + Referer: http://localhost:8080/
    + token: XMLHttpRequest // 自定义，需要服务器允许
    + Cookie: cookies=123  // 自定义，需要服务器允许
    + User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1  客户端软件名称
    + from
    + If-Modified-Since: 上一次请求资源的缓存时间，与Last-Modified对应 Mon, 18 Jul 2016 02:36:04 GMT-------- last-modify
    + If-None-Match: 客户段缓存数据的唯一标识，与Etag对应 "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a" ---------etag 
    + Cache-Control: max-age=300；   表示时间间隔，再次请求的时间间隔300s内，就在缓存中获取，否则就在服务器中
    + Authorization	包含用服务器验证用户代理的凭证
  + 服务器响应头：
    + Access-Control-Allow-Headers: token // 服务器设置
    + Access-Control-Allow-Methods: POST // 服务器设置
    + Access-Control-Allow-Origin: * // 服务器设置
    + Access-Control-Allow-Credentials: true // 服务器设置cookies
    + Connection: keep-alive
    + Content-Length: 11
    + last-modify 在服务器端最后被修改的时间
    + etag ------ 被请求变量的实体值,用于判断请求的资源是否发生变化 ---If-None-Match
    + content-encoding: gzip;
    + Content-Type: application/zip // 服务器设置   默认Content-Type: text/plain;charset=utf-8  multipart/form-data; boundary={boundary}  application/x-www-form-urlencoded
    + Set-Cookie: cookies=123; path=/; expires=Wed, 15 Jul 2020 08:28:54 GMT; domain=localhost // 服务器设置cookies
    + Date: Wed, 15 Jul 2020 07:47:17 GMT
    + userName: 111111 // 服务器设置
+ 空行：当服务器在解析请求头的时候，遇到了空行，表明后面的内容是请求体
+ 请求体：请求数据； HTTP请求的请求体有三种不同的形式 任意类型 text/html  application/json ; POST 提交的数据必须放在消息主体（entity-body）
  + 多个键值对之间用&连接，键与值之间用=连接，且只能用 ASCII 字符，非 ASCII 字符需使用UrlEncode编码
  + 请求体是任意类型的，服务器不会解析请求体，请求体的处理需要自己解析
  + 分成多个部分，文件上传 时会被使用，这种格式最先是被用于邮件传输中，每个字段/文件都被 boundary（Content-Type中指定的）分成单独的段，每段以--加 boundary 开头，然后是该段的描述头，描述头之后空一行接内容，请求结束的标识为 boundary 后面加--
+ post请求体（https://imququ.com/post/four-ways-to-post-data-in-http.html）
  + application/x-www-form-urlencoded： key1=val1&key2=val2 
  + multipart/form-data： 消息主体里按照字段个数又分为多个结构类似
  + application/js 消息主体是序列化后的 JSON 字符串 {"title":"test","sub":[1,2,3]}
  + text/xml XML 作为编码方式的远程调用规范

## cache-control有哪些预设值（https://segmentfault.com/a/1190000015245578，强缓存弱缓存）
+ public 表示响应可被任何中间节点缓存
+ private 表示中间节点不允许缓存
+ no-cache 表示不使用Cache-Control的缓存控制方式做前置验证
+ no-store 表示真正的不缓存任何东西
+ max-age 表示当前资源的有效时间

## 五层网络模型 | osi七层 | tcp/ip体系   五层协议只是OSI和TCP/IP的综合，实际应用还是TCP/IP的四层结构；  数据包从应用层到物理层-物理层-》应用层
+ 应用层（应用 表示 会话）：消息   直接为用户的应用进程（例如电子邮件、文件传输和终端仿真）提供服务。支持万维网应用的HTTP协议，支持电子邮件的SMTP协议，支持文件传送的FTP协议，DNS，POP3，SNMP，Telnet
+ 运输层：分段 负责向两个主机中进程之间的通信提供服务。由于一个主机可同时运行多个进程，因此运输层有复用和分用的功能
  + 传输控制协议TCP(Transmission Control Protocol)：面向连接的，数据传输的单位是报文段，能够提供可靠的交付。
  + 用户数据包协议UDP(User Datagram Protocol)：无连接的，数据传输的单位是用户数据报，不保证提供可靠的交付，只能提供“尽最大努力交付”；如QQ聊天数据
+ 网络层：分组或包进行传送  数据报
  + 负责为分组交换网上的不同主机提供通信服务。在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组或包进行传送。在TCP/IP体系中，由于网络层使用IP协议，因此分组也叫做IP数据报，或简称为数据报。
  + 选中合适的路由，使源主机运输层所传下来的分组，能够通过网络中的路由器找到目的主机。
  + IP,ICMP,IGMP,ARP,RARP
+ 数据链路层： 帧
  + 两个主机之间的数据传输，总是在一段一段的链路上传送的，也就是说，在两个相邻结点之间传送数据是直接传送的(点对点)，这时就需要使用专门的链路层的协议
  + 在两个相邻结点之间传送数据时，数据链路层将网络层交下来的IP数据报组装成帧(framing)，在两个相邻结点之间的链路上“透明”地传送帧中的数据。
  + 每一帧包括数据和必要的控制信息(如同步信息、地址信息、差错控制等)。典型的帧长是几百字节到一千多字节。
+ 物理层： 比特
  + 在物理层上所传数据的单位是比特。物理层的任务就是透明地传送比特流。

## tcp和udp协议的区别： TCP/IP协议集包括应用层,传输层，网络层，网络访问层（https://zhuanlan.zhihu.com/p/24860273）
+ tcp: 
  + 面向连接的协议,提高了数据通信的可靠性
  + 拥塞窗口 防止网络出现恶性拥塞
  + 字节流，不限制数据大小，打包成报文段，保证有序接收，重复报文自动丢弃
  + 全双工的，双向传输
  + 可靠的传输服务，保证可达，丢包时通过重发机制实现可靠性
  + tcp中的慢启动概念 解决双方处理能力的不匹配
  + 可靠的传输服务，保证可达，丢包时通过重发机制实现可靠性
+ UDP
  + 是一个非连接的协议，
  + UDP程序结构较简单；
  + 传输数据之前源端和终端不建立连接; 
  + UDP信息包的标题很短，只有8个字节，相对于TCP的20个字节信息包的额外开销很小。
  + 一对多
  + 不堵塞
  + 字节流模式与数据报模式
  + TCP保证数据顺序，UDP不保证
+ ping命令基于ICMP协议，ping”命令是使用 IP 和网络控制信息协议 (ICMP)

## TCP协议作为最可靠的协议之一，其核心是拥塞窗口 https://mp.weixin.qq.com/s/KoqN7Dq1aLhqEFAJP8V0KA
+ 拥塞窗口，是卫星通信在因特网中防止通信拥塞的一种措施，它是在发端采用了一种“拥塞避免”算法和“慢速启动”算法相结合的机制。“拥塞窗口”就是“拥塞避免”的窗口，它是一个装在发送端的可滑动窗口，窗口的大小是不超过接收端确认通知的窗口
+ tcp中的慢启动概念，是用来探索当前连接对应拥塞窗口的合适大小。用来弄清楚新连接当前的网络情况。“慢速启动”是在连接建立后，每收到一个来自收端的确认，就控制窗口增加一个段值大小，当窗口值达到“慢速启动”的限值后，慢速启动便停止工作，避免了网络发生拥塞
+ ssl/tls协议传输，包含证书，卸载，流量转发，负载均衡，页面适配，浏览器适配，refer传递等

## get和post区别
+ GET在浏览器回退时是无害的，而POST会再次提交请求。
+ GET产生的URL地址可以被Bookmark，而POST不可以。
+ GET请求会被浏览器主动cache，而POST不会，除非手动设置。
+ GET请求只能进行url编码，而POST支持多种编码方式。
+ GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
+ GET请求在URL中传送的参数是有长度限制的，而POST么有。
+ 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
+ GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
+ GET参数通过URL传递，POST放在Request body中。



## fetch
+ 当接收到一个代表错误的 HTTP 状态码时，从 fetch() 返回的 Promise 不会被标记为 reject， 即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject
+ fetch() 可以接受跨域 cookies,你也可以使用 fetch() 建立起跨域会话。
+ fetch 不会发送 cookies。除非你使用了credentials 的初始化选项。
```
fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json() // 它只是一个 HTTP 响应，而不是真的JSON。为了获取JSON的内容，我们需要使用 json() ，转化为json格式).then(function(myJson) {
    console.log(myJson);
  });// parses response to JSON
```
