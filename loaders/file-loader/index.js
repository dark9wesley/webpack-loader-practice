const loaderUtils = require('loader-utils')

module.exports = function(content){
  // 1. 根据文件内容生成带hash值文件名
  const interpolatedName = loaderUtils.interpolateName(
    this,
    "[hash].[ext][query]",
    { content }
  ); 
  // 2. 将文件输出
  this.emitFile(interpolatedName, content)
  // 3. 返回：module.exports = "文件路径/文件名"
  return `module.exports = "${interpolatedName}"`
}

module.exports.raw = true
