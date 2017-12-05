import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class InterviewForm extends Component {
  render() {
    return (
      <form className="New-Interview">
          Position:
          <input type="text" name="jobTitle"/><br/>
          Company:
          <input type="text" name="company"/><br/><br/>

          How difficult was the interview overall? 
          <input type="radio" name="difficultyRating" value="easy"/> Easy <input type="radio" name="difficultyRating" value="medium"/> Medium <input type="radio" name="difficultyRating" value="hard"/> Hard<br/>

          How was your experience overall?
          <input type="radio" name="experienceRating"value="positive"/> Positive <input type="radio" name="experienceRating" value="neutral"/> Neutral <input type="radio" name="experienceRating" value="negative"/> Negative<br/><br/>

          Did you receive a referral?  
          <input type="radio" name="referral" value="yes"/> Yes <input type="radio" name="referral" value="no"/> No<br/>


          Did you receive an offer? 
          <input type="radio" name="offer" value="yes"/> Yes <input type="radio" name="offer" value="no"/> No<br/>

          Did you accept an offer? 
          <input type="radio" name="offerAccepted" value="yes"/> Yes <input type="radio" name="phoneScreen" value="no"/> No<br/><br/>

          Which of the following did you complete?<br/>
          Phone screen <input type="checkbox" name="phoneScreen"/><br/>
          Tech screen <input type="checkbox" name="techScreen"/><br/>
          Take-home challenge <input type="checkbox" name="takeHomeChallenge"/><br/>
          On-site interview <input type="checkbox" name="onsiteInterview"/><br/>
          Whiteboarding challenge <input type="checkbox" name="whiteboardChallenge"/><br/><br/>


          Phone screen details:
          <input type="text" name="phoneScreenDetails"/><br/> 

          Tech screen details:
          <input type="text" name="techScreenDetails"/><br/>

          Take-home challenge details:
          <input type="text" name="takeHomeChallengeDetails"/><br/>

          On-site interview details:
          <input type="text" name="onsiteInterviewDetails"/><br/>

          Whiteboarding challenge details:
          <input type="text" name="whiteboardChallengeDetails"/><br/>

          Negotiation details:
          <input type="text" name="negotiationsDetails"/><br/>
          Additional interview notes:
          <input type="text" name="interviewNotes"/><br/><br/>
          
          <button className="submit">submit</button><br/>
      </form>
    )
  }
}

export default InterviewForm

