import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import defaultProfile from '../../Images/defaultProfile.png'
import github_logo from '../../Images/github_logo.png'
import linkedin_logo from '../../Images/linkedin_logo.png'
import fb_logo from '../../Images/fb_logo.png'
import plusSign from '../../Images/plusSign.png'

class UserProfile extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        photo_url: "",
        name: "",
        current_position: "",
        current_company: "",
        cohort: "",
        year: "",
        location: "",
        email: "",
        github_url: "",
        linkedin_url: "",
        facebook_url: "",
        skills: [],
        interviews: []
      }
    }

    this.userSkills = this.userSkills.bind(this)
    this.interviewItems = this.interviewItems.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(({data}) => this.setState(
        {user: data}
      )
    )
  }

  userSkills() {
    return this.state.user.skills.map(
      skill => (
        <span> {skill.name} </span>
      )
    )
  }

  interviewItems() {
    return this.state.user.interviews.map(
      interview => (
        <li>{`${interview.job_title} at ${interview.company.name}`}</li>
      )
    )
  }

  render() {
    return (
      <div className="user-profile">
        <div id="photo">
             <img id="logo" src={this.state.user.photo_url ? this.state.user.photo_url : defaultProfile } />
        </div>
        <h2>{this.state.user.name}</h2>
        <ul>
          <li>{this.state.user.current_position} at {this.state.user.current_company}</li>
          <li>{this.state.user.cohort} {this.state.user.year} - {this.state.user.location}</li>
            {this.userSkills()}
            <li><a href={`mailto:${this.state.user.email}`}>{this.state.user.email}</a></li>
            {this.state.user.github_url && <li><a href={this.state.user.github_url} target="_blank"><img id="logo" src={github_logo} /></a></li>}
            {this.state.user.linkedin_url && <li><a href={this.state.user.linkedin_url} target="_blank"><img id="logo" src={linkedin_logo} /></a></li>}
            {this.state.user.facebook_url && <li><a href={this.state.user.facebook_url} target="_blank"><img id="logo" src={fb_logo} /></a></li>}
        </ul>
        <h3>Interviews</h3>
        <ul>
          {this.interviewItems()}
            <button id="add-button"><Link id="add-interview" to="/interviews/new"><img id="plus" src={plusSign} /> Add Interview</Link></button>
        </ul>
      </div>
    )
  }
}

export default UserProfile
