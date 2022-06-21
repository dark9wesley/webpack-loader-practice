module.exports = function (context, map, meta) {
  const callback = this.async()
  setTimeout(() => {
    console.log('test2');
    callback(null, context, map, meta)
  }, 1000)
}
