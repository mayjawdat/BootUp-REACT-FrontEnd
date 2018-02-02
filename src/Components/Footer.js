import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import github_logo from '../Images/github_logo.png'
import BootUpLogo2 from '../Images/BootUpLogo2.png'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="https://github.com/DBC-BootUp">
          <img id="github-repo" src={github_logo} />
        </a>
        <br />
        <img id="logo" src={BootUpLogo2} />
      </div>
    )
  }
}

export default Footer
