var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  src = fs.createReadStream(process.argv[3])
  src.pipe(res)
})
server.listen(process.argv[2])
