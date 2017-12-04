import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class InterviewForm extends Component {
  render() {
    return (
      <div className="New-Interview">
          Job Title:
          <input type="text" name="jobTitle"/><br/>
          Did you receive a referral?:
          <input type="text" name="referall"/><br/>
          Did you receive an offer?:
          <input type="text" name="offer"/><br/>
          Interview Notes:
          <input type="text" name="interviewNotes"/><br/>
          Difficulty Rating:
          <input type="text" name="diffcultyRating"/><br/>
          <button className="submit">submit</button>
      </div>
    )
  }
}

export default InterviewForm

