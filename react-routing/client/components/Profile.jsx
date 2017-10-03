import React from 'react'
import {Link} from 'react-router-dom'

const Profile = () => {
  return (
    <div className='profile'>
      <h1>Profile</h1>
      <Link to='/'>Home</Link> {' '}
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Profile
