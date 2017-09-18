var test = require('ava')

var doAsync = require('./do-async')

test.cb('gets a done message when finished', t => {
  var expected = 12
  doAsync(4, 8, (result) => {
    t.is(result, expected)
    t.end()
  })
})