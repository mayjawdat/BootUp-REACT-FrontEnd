import React, { Component } from 'react';
import axios from 'axios';

class InterviewItemDetail extends Component {
    constructor(props){
        super()

        this.state = {
            interview: {}
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
                        <p> {this.state.interview.job_title} </p>
                    </h2>
                </div>
                <div className="interview-list">
                    <p> Referred?
                        {
                            this.state.interview.referred ?
                            <span> yes </span> : <span> no </span>
                        }
                    </p>
                    <p> Received offer?
                        {
                            this.state.interview.received_offer ?
                            <span> yes </span> : <span> no </span>
                        }
                    </p>
                    <p> Notes:
                        {this.state.interview.notes}
                    </p>
                    <p>
                        {this.state.interview.difficulty_rating}
                    </p>
                    <p>
                        {this.state.interview.experience_rating}
                    </p>
                    <p> Accepted offer?
                        {
                            this.state.interview.accepted_offer ?
                            <span> yes </span> : <span> no </span>
                        }
                    </p>
                    <p> Phone screen?
                        {
                            this.state.interview.phone_screen ?
                            <span> yes </span> : <span> no </span>
                        }
                    </p>
                    <p> Phone screen details:
                        {this.state.interview.phone_screen_details}
                    </p>
                    <p> Tech screen?
                        {
                            this.state.interview.tech_screen ?
                            <span> yes </span> : <span> no </span>
                        }
                    </p>
                    <p> Tech screen details:
                        {this.state.interview.tech_screen_details}
                    </p>
                    <p> Take home challenge?
                        {
                            this.state.interview.take_home_challenge ?
                            <span> yes </span> : <span> no </span>
                        }
                    </p>
                    <p> Take home challenge details:
                        {this.state.interview.take_home_challenge_details}
                    </p>
                    <p> On site interview?
                        {
                            this.state.interview.onsite ?
                            <span> yes </span> : <span> no </span>
                        }
                    </p>
                    <p> On site details:
                        {this.state.interview.onsite_details}
                    </p>
                    <p> Whiteboarding?
                        {
                            this.state.interview.whiteboarding ?
                            <span> yes </span> : <span> no </span>
                        }
                    </p>
                    <p> Whiteboarding details:
                        {this.state.interview.whiteboarding_details}
                    </p>
                    <p> Negotiation details:
                        {this.state.interview.negotiation_details}
                    </p>
                </div>
            </div>
        );
    }
}

export default InterviewItemDetail;
