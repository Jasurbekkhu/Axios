import React from 'react'
import { useLocation } from 'react-router-dom'
function SinglePages() {
    const user = useLocation ()?.state
    console.log(user);
  return (
    <div>{user.name}</div>
  )
}

export default SinglePages