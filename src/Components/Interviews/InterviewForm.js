import React, { Component } from 'react'
import { Form, Text, Radio, RadioGroup, Select, Checkbox, StyledTextArea } from 'react-form';

class InterviewForm extends Component {

  constructor( props ) {
      super( props );
      this.state = {};
  }

  render() {
    return (
      <div>
        <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
          { formApi => (
            <form onSubmit={formApi.submitForm} id='newInterviewForm'>
              <label htmlFor="jobTitle">Position:</label>
              <Text field="jobTitle" id="jobTitle" /><br />
              <label htmlFor="company">Company:</label>
              <Text field="company" id="company" /><br />

              <RadioGroup field="difficultyRating">
                  { group => (
                    <div>
                      How difficult was the interview overall? <br />
                      <label htmlFor="easy" className="mr-2">Easy</label>
                      <Radio group={group} value="1" id="easy" className="mr-3 d-inline-block" />
                      <label htmlFor="medium" className="mr-2">Medium</label>
                      <Radio group={group} value="2" id="medium" className="d-inline-block" />
                      <label htmlFor="hard" className="mr-2">Hard</label>
                      <Radio group={group} value="3" id="hard" className="d-inline-block" />
                    </div>
                  )}
                </RadioGroup>
              <RadioGroup field="experienceRating">
                  { group => (
                    <div>
                      How was your experience overall? <br />
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
                      Did you receive a referral? <br />
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

                
                Which of the following did you complete?<br/>
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
                <label htmlFor="phoneScreenDetails">Phone screen details:</label>
                <StyledTextArea field="phoneScreenDetails" id="phoneScreenDetails" /><br/>
                
                <label htmlFor="techScreenDetails">Tech screen details:</label>
                <StyledTextArea field="techScreenDetails" id="techScreenDetails" /><br/>

                <label htmlFor="takeHomeChallengeDetails">Take-home challenge details:</label>
                <StyledTextArea field="takeHomeChallengeDetails" id="takeHomeChallengeDetails" /><br/>
                
                <label htmlFor="onsiteInterviewDetails">On-site interview details:</label>
                <StyledTextArea field="onsiteInterviewDetails" id="onsiteInterviewDetails" /><br/>
                
                <label htmlFor="whiteboardChallengeDetails">Whiteboarding challenge details:</label>
                <StyledTextArea field="whiteboardChallengeDetails" id="whiteboardChallengeDetails" /><br/>
                
                <label htmlFor="negotiationsDetails">Negotiation details:</label>
                <StyledTextArea field="negotiationsDetails" id="negotiationsDetails" /><br/>
                
                <label htmlFor="interviewNotes">Additional interview notes:</label>
                <StyledTextArea field="interviewNotes" id="interviewNotes" /><br/><br/>
                
                <button type="submit" className="mb-4 btn btn-primary">Submit</button>
            </form>
          )}
        </Form>
      </div>
    )
  }
}

export default InterviewForm



{/* 

          Phone screen details:
          <input type="text" name=""/><br/> 

          Tech screen details:
          <input type="text" name="techScreenDetails"/><br/>

          Take-home challenge details:
          <input type="text" name="takeHomeChallengeDetails"/><br/>

          On-site interview details:
          <input type="text" name=""/><br/>

          Whiteboarding challenge details:
          <input type="text" name=""/><br/>

          Negotiation details:
          <input type="text" name="negotiationsDetails"/><br/>
          Additional interview notes:
          <input type="text" name="interviewNotes"/><br/><br/>
          
          <button className="submit">submit</button><br/>
      </form> */}