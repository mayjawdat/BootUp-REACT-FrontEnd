import React from 'react';

const InterviewListItem = ({interview}) => {
    return (
        <div>
            <li>{interview.interviewee.name}</li>
        </div>
    );
};

export default InterviewListItem;