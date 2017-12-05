import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import InterviewListItem from './InterviewListItem'

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

  interviewItems() {
    return this.state.interviews.map(interview => (
      <InterviewListItem
      key={interview.id} 
      interview={interview} />
    ))
  }

  render() {
    return (
      <div className="interview-list">
        <h2>Interview List</h2>
        <ul>
          {this.interviewItems()}
        </ul>
      </div>
    )
  }
}

export default InterviewList
