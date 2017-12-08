import React from 'react'

const Logout = (props) => {
  window.location.href = '/api/logout'

  return (
    <div>Redirecting</div>
  )
}

export default Logout
