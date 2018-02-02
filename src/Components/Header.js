import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BootUpLogo2 from '../Images/BootUpLogo2.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <div><Link to="/interviews"><img id="logo" src={BootUpLogo2} /></Link></div>
        <nav>
          <ul id="links">
            {!this.props.current_user && <li><a href="/">Login/Sign-Up</a></li>}
            {this.props.current_user && <li><Link to={`/users/${this.props.current_user.id}`}>{`${this.props.current_user.name}`}</Link></li>}
            {this.props.current_user && <li><Link to="/companies">Companies</Link></li>}
            {this.props.current_user && <li><Link to="/interviews">Resources</Link></li>}
            {/*<li><Link to="/search">Search</Link></li>*/}
            {this.props.current_user && <li><a href='/api/logout'>Logout</a></li>}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
