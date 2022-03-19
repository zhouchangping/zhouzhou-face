<!--
 * @Author: zhouchangping
 * @Date: 2022-03-03 11:05:43
 * @LastEditTime: 2022-03-03 11:05:44
 * @LastEditors: zhouzhou
 * @Description: 
 * @FilePath: /reactVue/suanfa/项目/webpack.md
 * 可以输入预定的版权声明、个性签名、空行等
-->
## webpack流程
合并webpack.config.js和命令行传递的参数，形成最终的配置
解析配置，得到entry入口
读取入口文件内容，通过@babel/parse将入口内容（code）转换成ast
通过@babel/traverse遍历ast得到模块的各个依赖
通过@babel/core（实际的转换工作是由@babel/preset-env来完成的）将ast转换成es5 code
通过循环伪递归的方式拿到所有模块的所有依赖并都转换成es5
