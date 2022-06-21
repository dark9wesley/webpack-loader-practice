module.exports = function (context, map, meta) {
  const callback = this.async()
  setTimeout(() => {
    console.log('test2');
    callback(null, context, map, meta)
  }, 1000)
}

module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("do somethings test2");
  return '111'
}
