/**
 * loader 就是一个函数
 * 当webpack解析资源时，会调用相应的loader去处理
 * loader会接收到文件内容作为参数，并且返回处理后的文件内容
 * context: 文件内容
 * map: SourceMap
 * meta： 其他loader传递过来的数据
 */
module.exports = function(context){
  console.log('test-loader', context);
  return context
}
