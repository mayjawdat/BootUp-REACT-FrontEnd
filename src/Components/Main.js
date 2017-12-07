import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import InterviewList from './Interviews/InterviewList'
import CompanyList from './Companies/CompanyList'
import HomePage from './HomePage'
import InterviewForm from './Interviews/InterviewForm'
import SearchBox from './Searches/searchBox'
import UserProfile from './Users/UserProfile'
<<<<<<< HEAD
<<<<<<< HEAD
import CompanyProfile from './Companies/CompanyProfile'
import UserLogin from './Login/userLogin'
=======
import CompanyItemDetail from './Companies/CompanyItemDetail'
>>>>>>> f0babea8bcb5d2cdd118b5fb524f8077a79d1b8d

=======
import CompanyProfile from './Companies/CompanyProfile'
import UserLogin from './Login/userLogin'
import CompanyItemDetail from './Companies/CompanyItemDetail'
>>>>>>> f2195bb0ea44d1f5f6aee61ec70a6b236fa6f75c

class Main extends Component {

  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path='/interviews' component={InterviewList} />
          <Route exact path='/interviews/new' component={InterviewForm} />
          <Route exact path='/companies' component={CompanyList} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/search' component={SearchBox} />
          <Route exact path='/users/:id' component={UserProfile} />
<<<<<<< HEAD
<<<<<<< HEAD
          <Route exact path='/companies/:id' component={CompanyProfile} />
          <Route exact path='/login' component={UserLogin} />
=======
          <Route exact path='/companies/:id' component={CompanyItemDetail} />
>>>>>>> f0babea8bcb5d2cdd118b5fb524f8077a79d1b8d
=======
          <Route exact path='/login' component={UserLogin} />
          <Route exact path='/companies/:id' component={CompanyItemDetail} />
>>>>>>> f2195bb0ea44d1f5f6aee61ec70a6b236fa6f75c
        </Switch>
      </div>
    )
  }
}

export default Main
