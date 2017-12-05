import React from 'react';

class InterviewForm extends Component {
  render() {
    return (
      <div className="New-Company">
          Company Name:
          <input type="text" name="jobTitle"/><br/>
          Location:
          <input type="text" name="company"/><br/>
          
          Did you receive a referral?  
          <input type="radio" name="referral" value="yes"/> Yes <input type="radio" name="referral" value="no"/> No<br/>
      </div>
    )
  });
};

export default CompanyForm;