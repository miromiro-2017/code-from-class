import React from 'react'

const Dev = (props) => {
  return (
    <div className='dev' onClick={props.remove}>
      Name: {props.name}
    </div>
  )
}

export default Dev
