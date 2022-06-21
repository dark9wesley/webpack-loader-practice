// row loader
// 默认情况下，资源文件会被转化为 UTF-8 字符串，然后传给 loader
// 通过设置 raw 为 true，loader 可以接收原始的 Buffer

module.exports = function(context, map, meta){
  // 接收到的context为Buffer数据
  console.log('test3', context);
  return context
}

module.exports.raw = true
