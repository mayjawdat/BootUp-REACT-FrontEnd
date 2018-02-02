import React from 'react'
import axios from 'axios'
import SearchResults from './searchResults'
import yellowPwrBtn from '../../Images/yellowPwrBtn.png'


class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      searchResults: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const result = this
    console.log(this.state.searchTerm)

    axios.post('/api/searches', { searchInput: this.state.searchTerm },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    )
  .then((response) => {
    console.log(response.data)
    result.setState({
      searchResults: response.data
    })
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    var companyName = this.state.companyName;
    return (
        <div className="page-header">
            <form onSubmit={this.handleSubmit}>
              <input id="search" type='text' placeholder=' Search for company...' name='search_form_input' value={this.state.searchTerm} onChange={this.handleChange} />

              <button id="submit-button"><img id='logo' src={yellowPwrBtn} /></button>
            </form>
        <SearchResults searchResults={this.state.searchResults} />
      </div>
      )
  }
}

export default SearchBox
