var test = require('tape')
var cheerio = require('cheerio')
var request = require('supertest')

var server = require('../server')

test('test harness is working', t => {
  t.pass()
  t.end()
})

test('home has a header', t => {
  request(server)
    .get('/')
    .end((err, res) => {
      var expected = 'Art'
      var $ = cheerio.load(res.text)
      var actual = $('h1').text()
      t.equal(actual, expected)
      t.end()
    })
})

test('post adds a new piece of art', t => {
  var newArt = {
    title: 'foo',
    artwork: 'http://foo'
  }
  request(server)
    .post('/new')
    .send(newArt)
    .end((err, res) => {
      var expected = 302
      var actual = res.status
      t.equal(actual, expected)
      t.end()
    })
})