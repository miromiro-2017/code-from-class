import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Profile from './Profile'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <h1>React Routing Demo</h1>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/profile' component={Profile} />
      </div>
    </Router>
  )
}

export default App
