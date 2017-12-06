import React, { Component } from 'react'
import CompanyItemDetail from './CompanyItemDetail'
import axios from 'axios'

class CompanyProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      company: {
        name: "",
        location: "",
        website: "",
        tech_field: "",
        has_apprenticeship: ""
      }
    }

    // this.interviewItems = this.interviewItems.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/companies/${this.props.match.params.id}`)
      .then(({data}) => this.setState(
          {user: data}
      )
    )
  }

  // interviewItems() {
  
  // }

  render() {
    return (
      <div className="company-profile">
        <CompanyItemDetail />

        <ul>
          
        </ul>
      </div>
    )
  }
}

export default CompanyProfile
