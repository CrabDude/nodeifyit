var nodeify = require('bluebird-nodeify')

module.exports = function nodeifyit(promiseReturningFunction, options) {
  return function() {
    var callback = arguments[arguments.length-1]
    var promise = promiseReturningFunction.apply(this, arguments)
    nodeify(promise, callback, options)
  }
}
