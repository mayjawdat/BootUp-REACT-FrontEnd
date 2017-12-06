import React from 'react';

const InterviewListItem = ({interview, onInterviewSelect}) => {
    // console.log(interview)
    return (
        <div>
            <li onClick={() => onInterviewSelect(interview)}>{interview.interviewee.name}</li>
        </div>
    );
};

export default InterviewListItem;