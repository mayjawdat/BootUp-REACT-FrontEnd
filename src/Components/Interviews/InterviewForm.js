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
          <input type="text" name="difficultyRating"/><br/> 
          Experience Rating:
          <input type="text" name="experienceRating"/><br/> 
          Offer Accepted?:
          <input type="text" name="offer"/><br/> 
          Did you have a phone screen?:
          <input type="text" name="phoneScreen"/><br/> 
          Phone screen details:
          <input type="text" name="phoneScreenDetails"/><br/> 
          Did you have a tech screen?:
          <input type="text" name="techScreen"/><br/> 
          Tech screen details:
          <input type="text" name="techScreenDetails"/><br/>
          Did you have a take home challenge?
          <input type="text" name="takeHomeChallenge"/><br/>
          Take-home challenge details:
          <input type="text" name="takeHomeChallengeDetails"/><br/>
          Did you have an onsite interview?
          <input type="text" name="onsiteInterview"/><br/>
          Onsite interview details:
          <input type="text" name="onsiteInterviewDetails"/><br/>
          Did you have a whiteboard challenge?:
          <input type="text" name="whiteboardChallenge"/><br/>
          Whiteboard challenge details:
          <input type="text" name="whiteboardChallengeDetails"/><br/>
          Negotiations Details:
          <input type="text" name="negotiationsDetails"/><br/>
          
          <button className="submit">submit</button>
      </div>
    )
  }
}

export default InterviewForm

