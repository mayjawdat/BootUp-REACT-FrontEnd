import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class HomePage extends Component {
  render() {
    return (
      <div>
      <div className="homepage">
        <div className='page-header'>
          <h2>Welcome to BootUp!</h2>
        </div>
          <p>BootUp is an app that helps DBC grads share information about their interview experiences, providing insights and tips from the unique perspective of another boot. Have an interview coming up? See what alums have to say about their experiences with the company. Gone through the interview process with a company? Let the community know what it was like.</p>
      </div>
        <div id="linkedin-login">
        <a href="/api/auth/linkedin" className='link-button'>Login with LinkedIn to Get Started</a>
        </div>
      </div>
    )
  }
}

export default HomePage
