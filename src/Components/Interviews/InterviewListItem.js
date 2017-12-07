import React from 'react';

const InterviewListItem = ({interview}) => {
    return (
        <div>
            <li>{interview.interviewee.name}'s interview</li>
        </div>
    );
};

export default InterviewListItem;