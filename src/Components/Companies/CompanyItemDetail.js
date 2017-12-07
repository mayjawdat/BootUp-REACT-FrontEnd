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
        skills:[],
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
        <div className="page-header">
          <h2> 
            <a href={this.state.company.website} target="_blank">{this.state.company.name}</a> - <span className="company-location">{this.state.company.location}</span> 
          </h2>
        </div>
      <div className="company-info">
        <p>  </p>
        <p>  </p>
      </div>
      <div className="skill-list">
        <h3> Interview BootTips available for following skill-sets: </h3>
        {this.state.company.skills.map(skill => (
          (<p>{skill.name}</p>)
        ))}
      </div>
      <div className="interview-list">
        <h3> Interview Reviews</h3>
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
