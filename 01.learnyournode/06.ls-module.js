var fs = require('fs')
var path = require('path')

module.exports = function(dir, filter, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) return callback(err, null);

    var result = [];
    for (file of list) {
      if (path.extname(file) == "." + filter) {
        result.push(file)
      }
    }
    callback(null, result)
  })
}
