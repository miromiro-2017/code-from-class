import React from 'react'

const UserList = (props) => {
  return (
    <div className='user-list'>
      <ul>
        {props.users.map(user => {
          return (
            <li key={user}>{user}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default UserList
