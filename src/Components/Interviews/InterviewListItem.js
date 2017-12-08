import React from 'react';
import { Link } from 'react-router-dom';

const InterviewListItem = ({interview}) => {
    return (
        <div>
            <li>
              <Link to={`/interviews/${interview.id}`}>
               {interview.job_title} at {interview.company.name} 
              </Link>
            </li>
        </div>
    );
};

export default InterviewListItem;
