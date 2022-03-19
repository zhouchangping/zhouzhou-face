#!/usr/bin/env node 
var fs = require('fs')
var path = require('path')
var chalk = require('chalk')
var tildify = require('tildify')
var ora = require('ora')
var projectPath = process.cwd()
var bundleFile = require('../lib/index')

console.log(projectPath)
// var configPath = path.join(projectPath, '../example/tinypack.config.js')
var configPath = '../example/tinypack.config.js';

function init() {
  var spinner = ora('正在打包配置文件...')
  spinner.start()

  if (!fs.existsSync(configPath)) {
    spinner.stop()
    chalk.red('找不到 "tinypack.config.js" 配置文件.')
  }
  var config = require(configPath)
  console.log(config)

  const result = bundleFile(config)
console.log(result)

  // try {
  //   fs.writeFileSync(path.join(projectPath, config.output), result)
  // } catch (e) {
  //   fs.mkdirSync(path.dirname(config.output))
  //   fs.writeFileSync(path.join(projectPath, config.output), result)
  // }
  spinner.stop()
  chalk.yellow('已生成对应文件.')
}

init()
