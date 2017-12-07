import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import CompanyItemDetail from './CompanyItemDetail'
import CompanyListItem from './CompanyListItem'
import '../../css/Company.css';

class CompanyList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companies: [],
      selectedCompany: "loading."
    }

    this.companyItems = this.companyItems.bind(this);
  }

  companyItems() {
    return this.state.companies.map(company => (
        <CompanyListItem
          // onCompanySelect = {selectedCompany => this.setState({selectedCompany})}
          key={company.id}
          company={company} />
      )
    )
  }

  componentDidMount() {
    axios.get('/api/companies')
      .then(({data}) => this.setState({companies: data}))
  }

  render() {
    return (
      <div className="company-list">
        <h2>Company List</h2>
        
        <ul>
          {this.companyItems()}
        </ul>
      </div>
    )
  }
}

export default CompanyList


// <CompanyItemDetail selectedCompany = {this.state.selectedCompany}/>





// companyItems() {
//   return this.state.companies.map(company => (
//       <CompanyListItem
//         onCompanySelect = {selectedCompany => this.setState({selectedCompany})}
//         key={company.id}
//         company={company} />
//     )
//   )