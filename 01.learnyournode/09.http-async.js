var bl = require('bl')
var http = require('http')

var urls = [
  process.argv[2],
  process.argv[3],
  process.argv[4]
]

var result = []

var count = 0;

for (var i = 0; i < urls.length; i++) {
  get(i);
}

function get(index) {
  http.get(urls[index], function(response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      result[index] = data.toString()
      count++;

      if (count > urls.length -1) {
        for (data of result) {
          console.log(data)
        }
      }
    }))
  })
}
