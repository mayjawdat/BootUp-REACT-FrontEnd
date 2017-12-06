import React from 'react'
import axios from 'axios'
// import './Company.css';

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
        { this.state.searchResults.map((result) => {
          return(
            <div className="result-item">
              {result}
            </div>
          )
        })}
      </div>
    )
  }
}