function select (_, idx) {
  return this[idx]
}

module.exports = function filter (arr, callback, thisArg) {
  return Promise.all(arr.map(callback, thisArg)).then(function (result) {
    return arr.filter(select, result)
  })
}
