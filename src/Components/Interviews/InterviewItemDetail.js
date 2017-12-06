import React from 'react';

const InterviewItemDetail = ({selectedInterview}) => {
    console.log(selectedInterview.interviewee)
    if (selectedInterview.interviewee) {
        return (
            <div>
                <p>{selectedInterview.interviewee.name}</p>
                <p>{selectedInterview.company.name}</p>
                <p>{selectedInterview.job_title}</p>
                <p>{selectedInterview.referred}</p>
                <p>{selectedInterview.received_offer}</p> 
                <p>{selectedInterview.notes}</p>
                <p>{selectedInterview.difficulty_rating}</p>
                <p>{selectedInterview.experience_rating}</p>
                <p>{selectedInterview.accepted_offer}</p>
                <p>{selectedInterview.phone_screen}</p>
                <p>{selectedInterview.phone_screen_details}</p>
                <p>{selectedInterview.tech_screen}</p>
                <p>{selectedInterview.tech_screen_details}</p>
                <p>{selectedInterview.take_home_challenge}</p>
                <p>{selectedInterview.take_home_challenge_details}</p>
                <p>{selectedInterview.onsite}</p>
                <p>{selectedInterview.onsite_details}</p>
                <p>{selectedInterview.whiteboarding}</p>
                <p>{selectedInterview.whiteboarding_details}</p>
                <p>{selectedInterview.negotiation_details}</p><br/>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }

};

export default InterviewItemDetail;