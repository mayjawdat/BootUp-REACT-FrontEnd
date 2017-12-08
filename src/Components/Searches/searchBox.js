import React from 'react'
import axios from 'axios'
import SearchResults from './searchResults'


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
      <div>
        {/* <div className="page-header"> */}
        {/*  */}
        {/* </div> */}
        <div className='row'>
          <form onSubmit={this.handleSubmit}>
              <h5>Search:
              <input type='text' id='search' name='search_form_input' value={this.state.searchTerm} onChange={this.handleChange} />
              </h5>
            <input type="submit" id="submit" value="Submit" />
          </form>
        </div>
        <SearchResults searchResults={this.state.searchResults} />
      </div>
      )
  }
}

export default SearchBox
