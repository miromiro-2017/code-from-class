module.exports = {
  getHome: function (req, res) {
    res.render('home', {})
  }
  // or
  // getHome: getHome
}

// or
// function getHome (req, res) {
//   res.render('home', {})
// }