import React from 'react'
import {Route, Link} from 'react-router-dom'

import ContactUs from './ContactUs'

const About = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      <Route path='/about/contact' component={ContactUs} />
      <Link to='/about/contact'>Show contacts</Link> {' '}
      <Link to='/'>Home</Link> {' '}
      <Link to='/profile'>Profile</Link>
    </div>
  )
}

export default About
