import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()

    this.state = {
      // current_user: null
      current_user: { id: 1, skills: [] } // EXAMPLE ONLY
    }

    this.setCurrentUser = this.setCurrentUser.bind(this)
  }

  setCurrentUser(user){
    this.setState({current_user: user}
    )
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
