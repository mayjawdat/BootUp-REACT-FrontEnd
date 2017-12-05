import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CompanyDetail from './CompanyList'
import CompanyListItem from './CompanyListItem'
import './Company.css';

class CompanyList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companies: []
    }

    this.companyItems = this.companyItems.bind(this);
  }

  companyItems() {
    console.log('yes')
    return this.state.companies.map(company => (
        <CompanyListItem
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





// const VideoList = (props) => {
//   const videoItems = props.videos.map((video) => {
//     return (
//       <VideoListItem
//         onVideoSelect = {props.onVideoSelect}
//         key = {video.etag}
//         video = {video} />
//     )
//   });
