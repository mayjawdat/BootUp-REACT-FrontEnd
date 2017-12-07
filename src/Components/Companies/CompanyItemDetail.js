import React, { Component } from 'react';
import axios from 'axios';
import InterviewListItem from '../Interviews/InterviewListItem'

// Component Definition
class CompanyItemDetail extends Component {
  constructor(props){
    super(props)

    this.state = {
      company: {
        name: "",
        interviews: [],
        location:"" //other properties of company
      }
    }
  }

  componentDidMount() {
    axios.get(`/api/companies/${this.props.match.params.id}`)
      .then(({data}) => this.setState({company: data}))
  }



  render() {
    return (
      <div className="company-item-detail">
      <div className="company-info">
        <h2> {this.state.company.name} </h2>
        <p> {this.state.company.location} </p>
        <p> {this.state.company.website} </p>
        //Add skills here
      </div>
      <div className="interview-list">
        <h2> Interview Reviews</h2>
        {this.state.company.interviews.map(interview => (
          <InterviewListItem
            key = {interview.id} 
            interview = {interview} />
          ))}
        </div>
      </div>
    );
  }
  
  
};

export default CompanyItemDetail;


// <div className="company-item-detail">
// { selectedCompany.name }<br/>
// { selectedCompany.location }<br/>
// { selectedCompany.tech_field }<br/>
// { selectedCompany.website }<br/>
// { selectedCompany.has_apprenticeship  && "Apprenticeship" }
// </div>

  // { this.props.children }
  
// # Component Invocation
// <CompanyItemDetail>
//   <h3>{ selectedCompany.name } Interviews</h3>
// </CompanyItemDetail>