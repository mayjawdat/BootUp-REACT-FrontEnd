import React from 'react'
import axios from 'axios'
import './Company.css';


class CompanySearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    axios.post('http://localhost:3001/api/searches',
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
}
    }
    )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  render() {
    var companyName = this.state.companyName;
    return (
      <div>
        <div className='row'>
          <form onSubmit={this.handleSubmit}>
              <h5>Enter company name:
              <input type='text' id='search' value={this.state.searchTerm} onChange={this.handleChange} />
              </h5>
            <input type="submit" id="submit" value="Submit" />
          </form>
        </div>
      </div>
      )
  }
}

export default CompanySearchForm