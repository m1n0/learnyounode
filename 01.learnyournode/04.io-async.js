var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data.split('\n').length - 1);
})

// console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1);
