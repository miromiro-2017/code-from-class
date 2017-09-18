module.exports = doAsync

function doAsync (n1, n2, callback) {
  setTimeout(() => {
    console.log('running async function')
    var result = n1 + n2
    callback(result)
  }, 2000)
}

// this just won't work because async
// var contents = fs.readFile(filename)