import React, { Component } from 'react'
import axios from 'axios'

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        photo_url: "",
        name: "",
        current_position: "",
        current_company: "",
        cohort: "",
        year: 0,
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
    // this.resourceItems = this.resourceItems.bind(this)
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
        <span> skill </span>
      )
    )
  }

  interviewItems() {
    return this.state.user.interviews.map(
      interview => (
        // {interview.job_title}
        // {interview.company.name}
        <li>Job Title at Company</li>

      )
    )
  }

  // resourceItems() {

  // }

  render() {
    return (
      <div className="user-profile">
        <p>{this.state.user.photo_url}</p>
        <h2>{this.state.user.name}</h2>
        <ul>
          <li>{this.state.user.current_position} at {this.state.user.current_company}</li>
          <li>{this.state.user.cohort} {this.state.user.year} - {this.state.user.location}</li>
            {this.userSkills()}
          <li>{this.state.user.email}</li>
          <li>{this.state.user.github_url}</li>
          <li>{this.state.user.linkedin_url}</li>
          <li>{this.state.user.facebook_url}</li>
        </ul>
        <h3>Interviews</h3>
        <ul>
          {this.interviewItems()}
        </ul>
        <h3>Resources</h3>
        <ul>

        </ul>
      </div>
    )
  }
}

export default UserProfile