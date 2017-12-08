import React, { Component } from 'react';
import axios from 'axios';
import greenPwrBtn from '../../Images/greenPwrBtn.png'
import yellowPwrBtn from '../../Images/yellowPwrBtn.png'
import redPwrBtn from '../../Images/redPwrBtn.png'

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
                <h2>{this.state.interview.job_title}</h2>

                </div>
                <div className="interview-list">
                <ul>
                {this.state.interview.referred && <span id="logo-desc">  <img id="logo" src={greenPwrBtn} />  Referred  </span>}
                {!this.state.interview.referred && <span id="logo-desc"><img id="logo" src={yellowPwrBtn} />  No Referral  </span>}
                {this.state.interview.accepted_offer && <span id="logo-desc"><img id="logo" src={greenPwrBtn} />  Accepted Offer  </span>}
                {!this.state.interview.accepted_offer && <span id="logo-desc">  <img id="logo" src={redPwrBtn} />  Declined Offer</span>}
                {this.state.interview.experience_rating === 1 && <span id="logo-desc">  <img id="logo" src={redPwrBtn} />  Negative Experience  </span>}
                {this.state.interview.experience_rating === 2 && <span id="logo-desc">  <img id="logo" src={yellowPwrBtn} />  Neutral Experience  </span>}
                {this.state.interview.experience_rating === 3 && <span id="logo-desc">  <img id="logo" src={greenPwrBtn} />  Positive Experience  </span>}
                {this.state.interview.difficulty_rating === 1 && <span id="logo-desc">  <img id="logo" src={greenPwrBtn} />  Easy Interview  </span>}
                {this.state.interview.difficulty_rating === 2 && <span id="logo-desc">  <img id="logo" src={yellowPwrBtn} />  Average Interview  </span>}
                {this.state.interview.difficulty_rating === 3 && <span id="logo-desc">  <img id="logo" src={redPwrBtn} />  Difficult Interview  </span>}
                {this.state.interview.phone_screen && <h3>Phone Screen</h3>}
                {this.state.interview.phone_screen && <li>{this.state.interview.phone_screen_details} </li>}
                {this.state.interview.tech_screen && <h3>Tech Screen</h3>}
                {this.state.interview.tech_screen && <li>{this.state.interview.tech_screen_details} </li>}
                {this.state.interview.take_home_challenge && <h3>Take Home Challenge</h3>}
                {this.state.interview.take_home_challenge && <li>{this.state.interview.take_home_challenge_details} </li>}
                {this.state.interview.onsite && <h3>On Site Interview</h3>}
                {this.state.interview.onsite && <li>{this.state.interview.onsite_details} </li>}
                {this.state.interview.whiteboarding && <h3>Whiteboarding</h3>}
                {this.state.interview.whiteboarding && <li>{this.state.interview.whiteboarding_details} </li>}
                {this.state.interview.negotiation_details && <h3>Negotiation</h3>}
                {this.state.interview.negotiation_details && <li>{this.state.interview.negotiation_details} </li>}
                {this.state.interview.notes && <li><h3>Additional Notes</h3></li>}
                {this.state.interview.notes && <li>{this.state.interview.notes} </li>}
                </ul>
            </div>
        </div>
        );
}
}

export default InterviewItemDetail;
