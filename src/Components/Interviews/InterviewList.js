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

    this.sortByRecent = this.sortByRecent.bind(this)
    this.sortByCompany = this.sortByCompany.bind(this)
    this.sortByLanguage = this.sortByLanguage.bind(this)
    this.sortByDifficulty = this.sortByDifficulty.bind(this)
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

  sortByRecent() {
    const interviews = this.state.interviews.sort((interviewOne, interviewTwo) => {
        return interviewOne.created_at - interviewTwo.created_at
      }
    )
    this.setState({interviews})
  }

  sortByCompany() {
    // return this.state.interviews.companies.sort()
  }

  sortByLanguage() {

  }

  sortByDifficulty() {

  }

  render() {
    return (
      <div className="interview-list">
        <h2>Interview Reviews</h2>
        <div id="filters">
          <button onClick={this.sortByRecent}>Recent</button>
          <span>  </span>
          <button onClick={this.sortByCompany}>Company</button>
          <span>  </span>
          <button onClick={this.sortByLanguage}>Language</button>
          <span>  </span>
          <button onClick={this.sortByDifficulty}>Difficulty</button>
        </div>
        <InterviewItemDetail selectedInterview = {this.state.selectedInterview}/>
        <ul>
          {this.interviewItems()}
        </ul>
      </div>
    )
  }
}

export default InterviewList
