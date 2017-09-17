var fs = require('fs')

function getContents (filename, callback) {
  console.log('before readFile')
  fs.readFile(filename, 'utf8', callback)
  console.log('after readFile')
}

function showContents (err, data) {
  if(err) {
    console.error(err.message)
  } else {
    console.log('contents:', data)
  }
}

var filename = __dirname + '/file.txt'

getContents(filename, showContents)