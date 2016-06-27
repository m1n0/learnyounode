var http = require('http')
var u = require('url')

var server = http.createServer(function (req, res) {
  if (req.method == 'GET') {

    var url = u.parse(req.url, true)
    var date = new Date(url.query.iso)
    var response

    if (url.pathname == '/api/parsetime') {
      response = {
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
      }
    }
    else if (url.pathname == '/api/unixtime') {
      response = { 'unixtime': date.getTime() }
    }

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(response))
  }
})
server.listen(process.argv[2])
