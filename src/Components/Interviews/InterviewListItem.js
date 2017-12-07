import React from 'react';

const InterviewListItem = ({interview}) => {
    return (
        <div>
            <li>Interview for {interview.job_title} position</li>
        </div>
    );
};

export default InterviewListItem;