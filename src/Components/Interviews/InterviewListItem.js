import React from 'react';

const InterviewListItem = ({interview}) => {
    return (
        <div>
            <li>{interview.job_title}</li>
        </div>
    );
};

export default InterviewListItem;