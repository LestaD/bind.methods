
function bindMethods(target, methodList) {
  if (Array.isArray(methodList)) {
    methodList.forEach(function (method) {
      target[method] = target[method].bind(target)
    })
  }
  else if (typeof methodList === 'string') {
    target[methodList] = target[methodList].bind(target)
  }
  else {
    Object.getOwnPropertyNames(target.__proto__)
    .filter(function (name) { return name !== 'constructor'})
    .forEach(function (method) {
      target[method] = target[method].bind(target)
    })
  }
}



module.exports = bindMethods
module.exports.default = bindMethods
