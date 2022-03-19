## 虚拟机： 带环境安装的一种解决方案。它可以在一种操作系统里面运行另一种操作系统，比如在 Windows 系统里面运行 Linux 系统。
## linux容器：Linux 容器不是模拟一个完整的操作系统，而是对进程进行隔离。或者说，在正常进程的外面套了一个保护层。对于容器里面的进程来说，它接触到的各种资源都是虚拟的，从而实现与底层系统的隔离。由于容器是进程级别的，相比虚拟机有很多优势。
## Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口。它是目前最流行的 Linux 容器解决方案。
+ https://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html 
+ https://www.runoob.com/docker/macos-docker-install.html 安装dmg;先启动这个软件
+ Docker 将应用程序与该程序的依赖，打包在一个文件里面。运行这个文件，就会生成一个虚拟容器。程序在这个虚拟容器里运行，就好像在真实的物理机上运行一样。
```
  docker version
  docker info
  列出本机的所有 image 文件。
    $ docker image ls
  删除 image 文件
    $ docker image rm [imageName]
```
+ image文件：Docker 把应用程序及其依赖，打包在 image 文件里面
  只有通过这个文件，才能生成 Docker 容器。image 文件可以看作是容器的模板。Docker 根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。
  image 文件是通用的，一台机器的 image 文件拷贝到另一台机器

+ docker实例：hello-world
  抓去：docker image pull library/hello-world
  docker image ls
  运行：docker container run hello-world
  docker container kill [containID]

+ 容器文件：image 文件生成的容器实例，本身也是一个文件，称为容器文件。也就是说，一旦容器生成，就会同时存在两个文件： image 文件和容器文件。而且关闭容器并不会删除容器文件，只是容器停止运行而已。
```
  列出本机正在运行的容器
    docker container ls
  列出本机所有容器，包括终止运行的容器
    docker container ls --all
  删除容器前必须停止容器：
    docker stop relaxed_jones
    docker rm relaxed_jones
  终止运行的容器文件
  docker container rm [containerID]
```

+ Dockerfile 文件：它是一个文本文件，用来配置 image。Docker 根据 该文件生成二进制的 image 文件。
```
编写自己的dockerfile
  .dockerignore
  Dockerfile
  创建image文件: 也是docker镜像
    docker image build -t koa2-blog .
    docker iamge build -t koa2-blog:0.0.1
    docker image ls
  生成容器
    docker container run -p 8000:3000 -it koa-demo /bin/bash // /bin/bash 容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell
  另一个窗口查询容器id
    docker container ls
  停止指定容器运行
    docker container kill ID
  // RUN命令在 image 文件的构建阶段执行，执行结果都会打包进入 image 文件；CMD命令则是在容器启动后执行
```

+ 发布image文件
```
docker login
docker image push [username]/[repository]:[tag]
```


## docker实例（https://mp.weixin.qq.com/s/qGS730MzNFzRB3MhHhHtpw）