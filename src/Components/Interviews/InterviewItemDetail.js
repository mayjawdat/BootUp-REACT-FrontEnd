import React from 'react';

const InterviewItemDetail = ({selectedInterview}) => {
    return (
        <div>
        {selectedInterview.notes}<br/><br/>
        </div>
    );
};

export default InterviewItemDetail;