import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BootUpLogo2 from '../Images/BootUpLogo2.png';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <li><Link to="/interviews"><img id="logo" src={BootUpLogo2} /></Link></li>
          <ul id="links">
            <li><Link to={`/users/${this.props.current_user.id}`}>{`${this.props.current_user.name}`}</Link></li>
            <li><Link to="/">Resources</Link></li>
            <li><Link to="/companies">Companies</Link></li>
            <li><Link to="/search">SearchBox</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
