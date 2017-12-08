import React, { Component } from 'react'
import { Form, Text, Radio, RadioGroup, Select, Checkbox, StyledTextArea } from 'react-form';
import axios from 'axios'

class InterviewForm extends Component {

  constructor( props ) {
      super( props );
      this.state = {};

      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(submittedValues){
    console.log(submittedValues)
    axios({
      method: 'post',
      url: '/api/interviews',
      data: {interview: submittedValues}
    })
    .then((response) => console.log(response));
  }
  

  render() {
    return (
      <div>
        <div className="page-header"><h2>Interview Info</h2></div>
        <Form onSubmit={submittedValues =>  this.handleSubmit(submittedValues)}>
          { formApi => (
            <form onSubmit={formApi.submitForm} id='newInterviewForm'>
              <label htmlFor="jobTitle">Position:</label>
              <Text field="jobTitle" id="jobTitle" /><br />
              <label htmlFor="company">Company:</label>
              <Text field="company" id="company" /><br />

              <RadioGroup field="difficultyRating">
                  { group => (
                    <div>
                      How difficult was this company's interview process? <br />
                      <label htmlFor="easy" className="mr-2">Easy</label>
                      <Radio group={group} value="1" id="easy" className="mr-3 d-inline-block" />
                      <label htmlFor="average" className="mr-2">Average</label>
                      <Radio group={group} value="2" id="average" className="d-inline-block" />
                      <label htmlFor="difficult" className="mr-2">Difficult</label>
                      <Radio group={group} value="3" id="difficult" className="d-inline-block" />
                    </div>
                  )}
                </RadioGroup>
              <RadioGroup field="experienceRating">
                  { group => (
                    <div>
                      How was your overall experience with this company? <br />
                      <label htmlFor="negative" className="mr-2">negative</label>
                      <Radio group={group} value="1" id="negative" className="mr-3 d-inline-block" />
                      <label htmlFor="neutral" className="mr-2">Neutral</label>
                      <Radio group={group} value="2" id="neutral" className="d-inline-block" />
                      <label htmlFor="positive" className="mr-2">Positive</label>
                      <Radio group={group} value="3" id="positive" className="d-inline-block" />
                    </div>
                  )}
                </RadioGroup>
              <RadioGroup field="referral">
                  { group => (
                    <div>
                      Did you receive a referral for this position? <br />
                      <label htmlFor="yes" className="mr-2">Yes</label>
                      <Radio group={group} value="1" id="yes" className="mr-3 d-inline-block" />
                      <label htmlFor="no" className="mr-2">No</label>
                      <Radio group={group} value="0" id="no" className="d-inline-block" />
                    </div>
                  )}
                </RadioGroup>
              <RadioGroup field="offer">
                  { group => (
                    <div>
                      Did you receive an offer? <br />
                      <label htmlFor="yes" className="mr-2">Yes</label>
                      <Radio group={group} value="1" id="yes" className="mr-3 d-inline-block" />
                      <label htmlFor="no" className="mr-2">No</label>
                      <Radio group={group} value="0" id="no" className="d-inline-block" />
                    </div>
                  )}
                </RadioGroup>
              <RadioGroup field="acceptOffer">
                  { group => (
                    <div>
                      Did you accept an offer? <br />
                      <label htmlFor="yes" className="mr-2">Yes</label>
                      <Radio group={group} value="1" id="yes" className="mr-3 d-inline-block" />
                      <label htmlFor="no" className="mr-2">No</label>
                      <Radio group={group} value="0" id="no" className="d-inline-block" />
                    </div>
                  )}
                </RadioGroup>

                
                Please detail the steps of the interview process.<br/>
                <label htmlFor="phoneScreen" className="mr-2">Phone screen</label>
                <Checkbox field="phoneScreen" id="phoneScreen" className="d-inline-block" /><br/>

                <label htmlFor="techScreen" className="mr-2">Tech screen</label>
                <Checkbox field="techScreen" id="techScreen" className="d-inline-block" /><br/>

                <label htmlFor="takeHomeChallenge" className="mr-2">Take-home challenge</label>
                <Checkbox field="takeHomeChallenge" id="takeHomeChallenge" className="d-inline-block" /><br/>

                <label htmlFor="onsiteInterview" className="mr-2">On-site interview</label>
                <Checkbox field="onsiteInterview" id="onsiteInterview" className="d-inline-block" /><br/>

                <label htmlFor="whiteboardChallenge" className="mr-2">Whiteboarding challenge</label>
                <Checkbox field="whiteboardChallenge" id="whiteboardChallenge" className="d-inline-block" /><br/>

                Please elaborate as needed.<br/>
                <label htmlFor="phone_screen_details">Phone screen details:</label>
                <StyledTextArea field="phone_screen_details" id="phone_screen_details" /><br/>
                
                <label htmlFor="tech_screen_details">Tech screen details:</label>
                <StyledTextArea field="tech_screen_details" id="tech_screen_details" /><br/>

                <label htmlFor="take_home_challenge_details">Take-home challenge details:</label>
                <StyledTextArea field="take_home_challenge_details" id="take_home_challenge_details" /><br/>
                
                <label htmlFor="onsite_details">On-site interview details:</label>
                <StyledTextArea field="onsite_details" id="onsite_details" /><br/>
                
                <label htmlFor="whiteboarding_details">Whiteboarding challenge details:</label>
                <StyledTextArea field="whiteboarding_details" id="whiteboarding_details" /><br/>
                
                <label htmlFor="negotiation_details">Negotiation details:</label>
                <StyledTextArea field="negotiation_details" id="negotiation_details" /><br/>
                
                <label htmlFor="notes">Additional interview notes:</label>
                <StyledTextArea field="notes" id="notes" /><br/><br/>
                
                <button type="submit" className="mb-4 btn btn-primary">Submit</button>
            </form>
          )}
        </Form>
      </div>
    )
  }
}

export default InterviewForm


