var pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
console.log(pattern.test('cn42du@163.com'));
console.log(pattern.test('895813341@qq.com'));
console.log(pattern.test('邮箱@qq.com'));
