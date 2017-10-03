import React from 'react'

import Dev from './Dev'

class Devs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {developers: this.props.names}
    this.removeDev = this.removeDev.bind(this)
  }

  removeDev (name) {
    const newArray = this.state.developers.filter(dev => dev !== name)
    this.setState({developers: newArray})
  }

  render () {
    return (
      <div className='devs'>
        {this.state.developers.map(name => {
          return (
            <Dev key={name} name={name} remove={() => this.removeDev(name)} />
          )
        })}
      </div>
    )
  }
}

export default Devs
