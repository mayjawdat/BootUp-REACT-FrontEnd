import React from 'react'
import axios from 'axios'
import CompanyListItem from '../Companies/CompanyListItem.js'

export default class searchResults extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      searchResults: props.searchResults
    }
  }

  render(){
    return(
      <div className="search-results">
        { this.props.searchResults.map((result, index) => {
          return(
              <CompanyListItem company={result} key={index} />
          )
        })}
      </div>
    )
  }
}
