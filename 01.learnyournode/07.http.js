var http = require('http')

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8')

  response.on('data', function(data) {
    if (data)
      console.log(data)
  })

  response.on('error', function(data) {
    if (data)
      console.log(data)
  })

  response.on('end', function(data) {
    if (data)
      console.log(data)
  })
})
