const babel = require('@babel/core')
const scheme = require('./scheme.json')

module.exports = function (context) {
  const options = this.getOptions(scheme)
  const callback = this.async()

  //使用babel对代码进行转译
  return babel.transform(context, options, function(err, result){
    if(err){
      return callback(err)
    }
    callback(null, result.code)
  })
}
