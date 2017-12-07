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
                <p> {this.state.interview.job_title} </p>
            </div>
        );
    }
}

export default InterviewItemDetail;
