const scheme = require('./scheme.json')

module.exports = function(context) {
  const options = this.getOptions(scheme)

  const prefix = `
    /**
     * Author: ${options.author}
     */ 
  `

  return prefix + context
}
