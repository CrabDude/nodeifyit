var nodeify = require('bluebird-nodeify')

module.exports = function nodeifyit(promiseReturningFunction, options) {
  // Provide extraneous arguments to circumvent callback detection
  return function(a, b, c, d, e, f, g) {
    var callback = arguments[arguments.length-1]
    var promise = promiseReturningFunction.apply(this, arguments)
    nodeify(promise, callback, options)
  }
}
