import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import CompanyItemDetail from './CompanyItemDetail'
import CompanyListItem from './CompanyListItem'

class CompanyList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companies: [],
      filteredCompanies: [],
      selectedCompany: "loading.",
      companyFilter: ''
    }

    this.companyItems = this.companyItems.bind(this);
    this.updateSearchFilter = this.updateSearchFilter.bind(this)
    this.filterCompanies = this.filterCompanies.bind(this)
  }

  companyItems() {
    return this.state.filteredCompanies.map(company => (
      <div className="company-list-item" key={company.index}>
        <CompanyListItem
          onCompanySelect = {selectedCompany => this.setState({selectedCompany})}
          key={company.id}
          company={company} 
        />
      </div>
      )
    )
  }

  componentDidMount() {
    axios.get('/api/companies')
      .then(({data}) => this.setState({companies: data, filteredCompanies: data}))
  }

  filterCompanies() {
    let regexString = this.state.companyFilter
      .split('')
      .map(char => char + '+.*')
      .join('')
    let companyRegex = new RegExp(regexString, 'i')
    const filteredCompanies = this.state.companies
      // .forEach(company => console.log(company.name))
      .filter(company => company.name && company.name.match(companyRegex))
    console.log("regex: ", regexString, companyRegex)
    console.log("filtered: ", filteredCompanies)
    this.setState({filteredCompanies})
  }

  updateSearchFilter(e) {
    this.setState({companyFilter: e.target.value}, this.filterCompanies)
  }

  render() {
    return (
      <div className="company-list">
        <div className="page-header">
          <h2>Company List</h2>
        </div>
        <div className='list-of-companies'>
          <input 
            type="search" 
            onChange={this.updateSearchFilter} 
            value={this.state.companyFilter}
            className="company-filter"
            placeholder="Search by Company Name"
          />
          <ul>
            {this.companyItems()}
          </ul>
        </div>
      </div>
    )
  }
}

export default CompanyList

