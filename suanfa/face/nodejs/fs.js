// fs
  // 权限位：mode
  // 标识位置： flag
  // 文件描述符 fs
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(__dirname,'koalaFile.txt')
  const filePath1 = path.join(__dirname,'koalaFile1.txt')


  // // -- 异步读取文件
  // fs.readFile(filePath,'utf8',function(err,data){
  //     console.log(data);// 程序员成长指北
  // });
  
  // // -- 同步读取文件
  // const fileResult=fs.readFileSync(filePath1,'utf8');
  // console.log(fileResult);// 程序员成长指北



// 写入文件内容（如果文件不存在会创建一个文件）
// 写入时会先清空文件
// fs.writeFile(filePath, '写入成功：程序员成长指北123', function(err) {
//   if (err) {
//       throw err;
//   }
//   // 写入成功后读取测试
//   var data=fs.readFileSync(filePath, 'utf-8');
//   console.log('new data -->'+data);
// });

// // // 通过文件写入并且利用flag也可以实现文件追加
// fs.writeFile(filePath, '程序员成长指北追加的数据', {'flag':'a'},function(err) {
//    if (err) {
//        throw err;
//    }
//    console.log('success');
//    var data=fs.readFileSync(filePath, 'utf-8')
//    // 写入成功后读取测试
//    console.log('追加后的数据 -->'+data);
// });




// -- 异步另一种文件追加操作(非覆盖方式)
// 写入文件内容（如果文件不存在会创建一个文件）
// fs.appendFile(filePath, '新数据程序员成长指北456', function(err) {
//   if (err) {
//       throw err;
//   }
//   // 写入成功后读取测试
//   var data=fs.readFileSync(filePath, 'utf-8');
//   console.log(data);
// });

// -- 同步另一种文件追加操作(非覆盖方式)
// fs.appendFileSync(filePath, '同步追加一条新数据程序员成长指北789');


// 将filePath文件内容拷贝到filePath1文件内容
// fs.copyFileSync(filePath, filePath1);
// let data = fs.readFileSync(filePath1, 'utf8');
// console.log(data); // 程序员成长指北


// -- 异步文件删除
// fs.unlink(filePath,function(err){
//   if(err) return;
//  });
 // -- 同步删除文件
//  fs.unlinkSync(filePath,function(err){
//      if(err) return;
//  });




// fs.open(filePath,'r','0666',function(err,fd){
//   console.log('哈哈哈',fd); //返回的第二个参数为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄
// })


// let buf = Buffer.alloc(6);// 创建6字节长度的buf缓存对象
// // 打开文件
// fs.open('6.txt', 'r', (err, fd) => {
//   // 读取文件
//   fs.read(fd, buf, 0, 3, 0, (err, bytesRead, buffer) => {
//     console.log(bytesRead);
//     console.log(buffer);

//     // 继续读取
//     fs.read(fd, buf, 3, 3, 3, (err, bytesRead, buffer) => {
//       console.log(bytesRead);
//       console.log(buffer);
//       console.log(buffer.toString());
//     });
//   });
// });

// let buf = Buffer.alloc(6);// 创建6字节长度的buf缓存对象
// fs.open('6.txt', 'r', (err, fd) => {
//   fs.write(fd, buf, 0, 3, 0, (err, bytesRead, buffer) => {
//     console.log(bytesRead);
//     console.log(buffer);
//     console.log(buffer.toString());
//   })
// })



// 注意文件描述符fd
// fs.open(filePath, 'r', (err, fd) => {
//   fs.close(fd, err => {
//     console.log('关闭成功');// 关闭成功
//   });
// });




// copy 方法
function copy(src, dest, size = 16 * 1024, callback) {
  // 打开源文件
  fs.open(src, 'r', (err, readFd) => {
    // 打开目标文件
    fs.open(dest, 'w', (err, writeFd) => {
      let buf = Buffer.alloc(size);
      let readed = 0; // 下次读取文件的位置
      let writed = 0; // 下次写入文件的位置

      (function next() {
        // 读取
        fs.read(readFd, buf, 0, size, readed, (err, bytesRead) => {
          readed += bytesRead;

          // 如果都不到内容关闭文件
          if (!bytesRead) fs.close(readFd, err => console.log('关闭源文件'));

          // 写入
          fs.write(writeFd, buf, 0, bytesRead, writed, (err, bytesWritten) => {
            // 如果没有内容了同步缓存，并关闭文件后执行回调
            if (!bytesWritten) {
              fs.fsync(writeFd, err => {
                fs.close(writeFd, err => { !err && callback()});
              });
            }
            writed += bytesWritten;

            // 继续读取、写入
            next();
          });
        });
      })();
    });
  });
}


// buffer 的长度
const BUFFER_SIZE = 3;

// 拷贝文件内容并写入
copy('6.txt', '7.txt', BUFFER_SIZE, () => {
  fs.readFile('7.txt', 'utf8', (err, data) => {
    // 拷贝完读取 7.txt 的内容
    console.log(data); // 你好
  });
});