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
      .then((response) => window.location.href=`/interviews/${response.data.id}`)
      .catch(error => console.log("error creating new interview", error))
  }


  render() {
    return (

       <div>
        <div className="page-header"><h2>Enter Interview Information</h2></div>
        <Form onSubmit={submittedValues =>  this.handleSubmit(submittedValues)}>
          { formApi => (
            <form onSubmit={formApi.submitForm} id='newInterviewForm'>
              <label htmlFor="job_title">Position:</label>
              <Text field="job_title" id="job_title" /><br />
              <label htmlFor="company">Company:</label>
              <Text field="company" id="company" /><br />

              <RadioGroup field="difficulty_rating">
                  { group => (
                    <div>
                      How difficult was this company's interview process? <br />
                      <label htmlFor="easy" className="mr-2">Easy</label>
                      <Radio group={group} value="1" id="easy" className="mr-3 d-inline-block" />
                      <label htmlFor="average" className="mr-2">Average</label>
                      <Radio group={group} value="2" id="average" className="d-inline-block" />
                      <label htmlFor="difficult" className="mr-2">Difficult</label>
                      <Radio group={group} value="3" id="difficult" className="d-inline-block" />
                      <span></span>
                    </div>
                  )}
                </RadioGroup>
              <RadioGroup field="experience_rating">
                  { group => (
                    <div>
                      How was your overall experience with this company? <br />
                      <label htmlFor="positive" className="mr-2">Positive</label>
                      <Radio group={group} value="3" id="positive" className="d-inline-block" />
                      <span></span>
                      <label htmlFor="neutral" className="mr-2">Neutral</label>
                      <Radio group={group} value="2" id="neutral" className="d-inline-block" />
                      <label htmlFor="negative" className="mr-2">Negative</label>
                      <Radio group={group} value="1" id="negative" className="mr-3 d-inline-block" />
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
                      <span></span>
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
                      <span></span>
                    </div>
                  )}
                </RadioGroup>
              <RadioGroup field="accepted_offer">
                  { group => (
                    <div>
                      Did you accept an offer? <br />
                      <label htmlFor="yes" className="mr-2">Yes</label>
                      <Radio group={group} value="1" id="yes" className="mr-3 d-inline-block" />
                      <label htmlFor="no" className="mr-2">No</label>
                      <Radio group={group} value="0" id="no" className="d-inline-block" />
                      <span></span>
                    </div>
                  )}
                </RadioGroup>


                Please detail the steps of the interview process.<br />
                <label htmlFor="phoneScreen" className="mr-2">Phone Screen</label>
                <Checkbox field="phoneScreen" id="phoneScreen" className="d-inline-block" /> <span></span>

                <label htmlFor="techScreen" className="mr-2">Tech Screen</label>
                <Checkbox field="techScreen" id="techScreen" className="d-inline-block" /> <span></span>

                <label htmlFor="takeHomeChallenge" className="mr-2">Take-Home Challenge</label>
                <Checkbox field="takeHomeChallenge" id="takeHomeChallenge" className="d-inline-block" /> <span></span>

                <label htmlFor="onsiteInterview" className="mr-2">On-Site Interview</label>
                <Checkbox field="onsiteInterview" id="onsiteInterview" className="d-inline-block" /> <span></span>

                <label htmlFor="whiteboardChallenge" className="mr-2">Whiteboarding Challenge</label>
                <Checkbox field="whiteboardChallenge" id="whiteboardChallenge" className="d-inline-block" /> <span></span><br /><br />


                Please elaborate as needed.<br />
                <br />
                <label htmlFor="phone_screen_details">Phone Screen Details:</label>
                <StyledTextArea field="phone_screen_details" id="phone_screen_details" /><span></span>

                <label htmlFor="tech_screen_details">     Tech Screen Details:</label>
                <StyledTextArea field="tech_screen_details" id="tech_screen_details" /><span></span>

                <label htmlFor="take_home_challenge_details">Take-Home Challenge details:</label>
                <StyledTextArea field="take_home_challenge_details" id="take_home_challenge_details" /><span></span>

                <label htmlFor="onsite_details">On-Site Interview Details:</label>
                <StyledTextArea field="onsite_details" id="onsite_details" /><span></span>

                <label htmlFor="whiteboarding_details">Whiteboarding Challenge details:</label>
                <StyledTextArea field="whiteboarding_details" id="whiteboarding_details" /><span></span>

                <label htmlFor="negotiation_details">Negotiation Details:</label>
                <StyledTextArea field="negotiation_details" id="negotiation_details" /><span></span>

                <label htmlFor="notes">Additional Interview Notes:</label>
                <StyledTextArea field="notes" id="notes" /><br />

                <button type="submit" className="mb-4 btn btn-primary">Submit</button>
            </form>
          )}
        </Form>

      </div>
    )
  }
}

export default InterviewForm


