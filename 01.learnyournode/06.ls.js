var ls = require('./06.ls-module.js')

ls(process.argv[2], process.argv[3], function(err, list) {
  if (err) throw err

  for (file of list) {
    console.log(file)
  }
})
