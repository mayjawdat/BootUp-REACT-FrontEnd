import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import InterviewItemDetail from './InterviewItemDetail'
import InterviewListItem from './InterviewListItem'

class InterviewList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      interviews: [],
      selectedInterview: 'Loading...'
    }
  }

  componentDidMount() {
    axios.get('/api/interviews')
      .then(({data}) => this.setState({interviews: data}))
  }

  interviewItems() {
    return this.state.interviews.map(interview => (
      // console.log(interview)
      <InterviewListItem
      onInterviewSelect = {selectedInterview => this.setState({selectedInterview})}
      key={interview.id} 
      interview={interview} />
    ))
  }

  render() {
    return (
      <div className="interview-list">
        <h2>Interview List</h2>
        <InterviewItemDetail selectedInterview = {this.state.selectedInterview}/>
        <ul>
          {this.interviewItems()}
        </ul>
      </div>
    )
  }
}

export default InterviewList
