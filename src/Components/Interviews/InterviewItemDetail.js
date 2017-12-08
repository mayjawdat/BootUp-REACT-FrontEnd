import React, { Component } from 'react';
import axios from 'axios';

const experienceRatings = ['Poor', 'Neutral', 'Good']
const difficultyRatings = ['Easy', 'Medium', 'Hard']
class InterviewItemDetail extends Component {
  constructor(props){
    super()
    this.interviewId = this.props ? this.props.match.params.id : null

    this.state = {
      interview: {
        company: {}
      }
    }
  }

  componentDidMount(){
    axios.get(`/api/interviews/${this.props.match.params.id}`)
    .then(({data}) => this.setState({interview: data}))
  }

  render() {
    return (
      <div className="interview-item-detail">
        <div className="page-header">
          <h2>
            <p> {this.state.interview.job_title} at {this.state.interview.company.name}</p>
          </h2>
        </div>
        <div className="interview-list">
          <p> <span className="list-label">Referral:</span>
            {
              this.state.interview.referred ?
              <span> yes </span> : <span> no </span>
            }
          </p>
          <p> <span className="list-label">Received offer?</span>
            {
              this.state.interview.received_offer ?
              <span> yes </span> : <span> no </span>
            }
          </p>
          <p> <span className="list-label">Notes: </span>
            {this.state.interview.notes}
          </p>
          <p>
            <span className="list-label">Difficulty:</span> {difficultyRatings[this.state.interview.difficulty_rating]}
          </p>
          <p>
            <span className="list-label">Overall Experience:</span> {experienceRatings[this.state.interview.experience_rating]}
          </p>
          <p>
            <span className="list-label">Accepted offer?</span>
            {
              this.state.interview.accepted_offer ?
              <span> yes </span> : <span> no </span>
            }
          </p>
          <p>
            <span className="list-label">Phone screen?</span>
            {
              this.state.interview.phone_screen ?
              <span> yes </span> : <span> no </span>
            }
          </p>
          <p>
            <span className="list-label">Phone screen details:</span>
            {this.state.interview.phone_screen_details}
          </p>
          <p>
            <span className="list-label">Tech screen?</span>
            {
              this.state.interview.tech_screen ?
              <span> yes </span> : <span> no </span>
            }
          </p>
          <p>
            <span className="list-label">Tech screen details:</span>
            {this.state.interview.tech_screen_details}
            </p>
          <p>
            <span className="list-label">Take home challenge?</span>
            {
              this.state.interview.take_home_challenge ?
              <span> yes </span> : <span> no </span>
            }
          </p>
          <p>
            <span className="list-label">Take home challenge details:</span>
            {this.state.interview.take_home_challenge_details}
            </p>
          <p>
            <span className="list-label">On site interview?</span>
            {
              this.state.interview.onsite ?
              <span> yes </span> : <span> no </span>
            }
          </p>
          <p>
            <span className="list-label">On site details:</span>
            {this.state.interview.onsite_details}
          </p>
          <p>
            <span className="list-label">Whiteboarding?</span>
            {
              this.state.interview.whiteboarding ?
              <span> yes </span> : <span> no </span>
            }
          </p>
          <p>
            <span className="list-label">Whiteboarding details:</span>
            {this.state.interview.whiteboarding_details}
          </p>
          <p>
            <span className="list-label">Negotiation details:</span>
            {this.state.interview.negotiation_details}
          </p>
        </div>
      </div>
    );
  }
}

export default InterviewItemDetail;
