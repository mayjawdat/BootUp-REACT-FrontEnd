import React, { Component } from 'react';
import axios from 'axios';

// Component Definition
class CompanyItemDetail extends Component {
  constructor(props){
    super(props)

    this.state = {
      company: {
        name: "",
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
      {this.state.company.name}
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