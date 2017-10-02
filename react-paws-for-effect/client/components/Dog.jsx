import React from 'react'

import NamePlate from './NamePlate'
import Pic from './Pic'

class Dog extends React.Component {
  constructor (props) {
    super(props)
    this.dogs = []
  }

  render () {
    return (
      <div className='dog-wrapper'>
        <NamePlate name={props.name} breed={props.breed} superpower={props.superpower} />
        <div className='dog-pic'>
          <Pic image={props.image} alt={props.name} />
        </div>
      </div>
    )
  }
}

export default Dog
