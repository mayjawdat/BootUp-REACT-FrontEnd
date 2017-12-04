import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import InterviewList from './InterviewList'
import CompanyList from './CompanyList'
import HomePage from './HomePage'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path='/interviews' component={InterviewList} />
          <Route exact path='/companies' component={CompanyList} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    )
  }
}

export default Main
