var bl = require('bl')
var http = require('http')

var urls = [
  process.argv[2],
  process.argv[3],
  process.argv[4]
]

var result = []

var i = 0;

get(urls[i]);

function get(url) {
  http.get(url, function(response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      result.push(data.toString())
      i++;

      if (i > urls.length -1) {
        for (data of result) {
          console.log(data)
        }
      }
      else {
        get(urls[i]);
      }
    }))
  })
}
