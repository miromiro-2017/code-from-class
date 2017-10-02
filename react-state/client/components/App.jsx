import React from 'react'

import Devs from './Devs'

const developers = 'Aaron Skye Don Joe Callan Rich Andrea Annah Daz Rajal'.split(' ')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {developers: developers}
    this.removeDev = this.removeDev.bind(this)
  }

  render () {
    return (
      <Devs
        names={this.state.developers}
        remove={this.removeDev} />
    )
  }

  removeDev (name) {
    const newArray = this.state.developers.filter(dev => dev !== name)
    this.setState({developers: newArray})
  }
}

export default App
