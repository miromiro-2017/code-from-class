import React from 'react'

import AddUserForm from './AddUserForm'
import UserList from './UserList'

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {users: ['Annah', 'Daz']}
    this.handleAddUser = this.handleAddUser.bind(this)
  }

  handleAddUser (user) {
    const newList = [...this.state.users, user]
    this.setState({users: newList})
  }

  render () {
    return (
      <div className='container'>
        <AddUserForm handleAddUser={this.handleAddUser} />
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export default Container
