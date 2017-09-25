function showAfter (msg, delay) {
  return new Promise((resolve, reject) => {
    if (delay > 3000) {
      return reject(new Error('delay is too long'))
    }
    setTimeout(() => {
      console.log(msg)
      resolve('Jonny')
    }, delay)
  })
}

showAfter('hi there', 2000)
  .then(sayGoodbye)
  .catch(showError)

function sayGoodbye (name) {
  console.log('good bye ' + name)
}

function showError (err) {
  console.error(err.message)
}
