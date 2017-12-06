import React, { Component } from 'react'
import axios from 'axios'

class CompanyProfile extends Component {
  contstructor() {
    super()

    this.state = {
      company: {
        name: "",
        location: "",
        website: "",
        tech_field: "",
        has_apprenticeship: ""
      }
    }
  }

  componentDidMount() {
    axios.get(`/api/companies/${this.props.match.params.id}`)
      .then(({data}) => this.setState(
          {user: data}
      )
    )
  }

  

  render() {
    return (
      <div className="company-profile">
        <h2>{this.state.company.name}</h2>
        <ul>
          <li>{this.state.company.location}</li>
          <li>{this.state.company.website}</li>
          <li>{this.state.company.tech_field}</li>
          <li>{this.state.company.has_apprenticeship}</li>
        </ul>
        <h3>Interviews</h3>
        <ul>
        </ul>
      </div>
    )
  }
}
