import React from 'react';
import { Link } from 'react-router-dom';

const InterviewListItem = ({interview}) => {
    return (
        <div>
            <li>
              <Link to={`/interviews/${interview.id}`}> Interview for {interview.job_title} position </Link>
            </li>
        </div>
    );
};

export default InterviewListItem;
