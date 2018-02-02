import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      current_user: null
    }
  }

  componentDidMount() {
    axios.get('/api/profile')
      .then(({data}) =>  data.id && this.setState({current_user: data}))
      .catch(error => console.log('Error fetching profile', error))
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header current_user={this.state.current_user} />
          <Main current_user={this.state.current_user}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
