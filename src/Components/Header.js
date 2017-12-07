import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h2>DBC Bootup</h2>
        <nav>
          <ul>
            <li><Link to="/interviews">BootUp</Link></li>
            {this.props.current_user 
              ? <li><Link to={`/users/${this.props.current_user.id}`}>{`${this.props.current_user.name}`}</Link></li>
              : <li><a href="/api/auth/linkedin">Login/Sign-up with LinkedIn</a></li>
            }
            <li><Link to="/search">SearchBox</Link></li>
            <li><Link to="/companies">Companies</Link></li>
            <li><Link to="/">Resources</Link></li>
            {this.props.current_user && <li><a href='/api/logout'>Logout</a></li>}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
