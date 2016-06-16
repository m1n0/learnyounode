var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function(err, list) {
  if (err) throw err;

  for (file of list) {
    if (path.extname(file) == "." + process.argv[3]) {
      console.log(file)
    }
  }
})
