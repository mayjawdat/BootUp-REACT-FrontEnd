import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class CompanyList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companies: []
    }
  }
  componentDidMount() {
    axios.get('/api/companies')
      .then(({data}) => this.setState({companies: data}))
  }

  render() {
    return (
      <div className="company-list">
        <h2>Company List</h2>
      </div>
    )
  }
}

export default CompanyList
