var express = require('express')

var art = require('./art.json')

var router = express.Router()

router.get('/', (req, res) => {
  var viewData = {
    art: art
  }
  res.render('home', viewData)
})

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/new', (req, res) => {
  var newArt = req.body
  art.push(newArt)
  res.redirect('/')
})

module.exports = router
