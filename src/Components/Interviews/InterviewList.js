import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class InterviewList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      interviews: []
    }
  }
  componentDidMount() {
    axios.get('/api/interviews')
      .then(({data}) => this.setState({interviews: data}))
  }
  render() {
    return (
      <div className="interview-list">
        <h2>Interview List</h2>
      </div>
    )
  }
}

export default InterviewList
