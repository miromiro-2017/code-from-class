// define a function
function doWork () {
  console.log('doing work')
}

function relax () {
  console.log('relaxing')
}

// define another function
function runFunc (func) {
  console.log('running a function')
  func()
}

// run the functions
runFunc(doWork)
runFunc(relax)