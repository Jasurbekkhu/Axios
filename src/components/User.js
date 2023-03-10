import React from 'react'
import { Link } from 'react-router-dom';

function User(users) {
  console.log(users);
  return (<div className=''>
    {
      users.users?.map(user => (
        <div key={user.id} className="">
          <Link to={`/users/${users.id}`} state={user}>
            <h1>{user.name}</h1>
          </Link>
        </div>
      ))
    }
  </div>

  )
}

export default User