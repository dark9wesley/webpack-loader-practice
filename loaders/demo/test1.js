// 同步Loader 第一种写法
// module.exports = function (context) {
//   return context
// }

// 同步Loader 第二种写法
module.exports = function (context, map, meta) {
  console.log('test1');
  /**
   * 第一个参数表示是否有错误 没有则传null
   * 第二个参数context 表示处理后的内容
   * 第三个参数map 表示继续传递的sourcemap
   * 第四个参数meta 表示给下一个Loader传递的参数
   */
  this.callback(null, context, map, meta)
  return
}

module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("do somethings test1");
}
