import React from 'react'

import Devs from './Devs'

const developers = 'Aaron Skye Don Joe Callan Rich Andrea Annah Daz Rajal'.split(' ')

const App = () => {
  return (
    <div className='app'>
      <h1>Developers</h1>
      <Devs names={developers} />
    </div>
  )
}

export default App
