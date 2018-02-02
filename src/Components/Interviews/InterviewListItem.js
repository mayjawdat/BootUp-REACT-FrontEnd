import React from 'react';
import { Link } from 'react-router-dom';
import greenPwrBtn from '../../Images/greenPwrBtn.png'
import yellowPwrBtn from '../../Images/yellowPwrBtn.png'
import redPwrBtn from '../../Images/redPwrBtn.png'

const InterviewListItem = ({interview}) => {
    return (
        <div>
            <ul className="company-interview-list">
              <Link to={`/interviews/${interview.id}`}>
              <br />
                <li>{interview.job_title} at {interview.company.name}</li> 
                {interview.referred && <span id="logo-desc">  <img id="logo" src={greenPwrBtn} />  Referred  </span>}
                {!interview.referred && <span id="logo-desc">  <img id ="logo" src={yellowPwrBtn} />  No Referral  </span>}
                {interview.experience_rating === 1 && <span id="logo-desc">  <img id="logo" src={redPwrBtn} />  Experience  </span>}
                {interview.experience_rating === 2 && <span id="logo-desc">  <img id="logo" src={yellowPwrBtn} />  Experience  </span>}
                {interview.experience_rating === 3 && <span id="logo-desc">  <img id="logo" src={greenPwrBtn} />  Experience  </span>}
                {interview.difficulty_rating === 1 && <span id="logo-desc">  <img id="logo" src={greenPwrBtn} />  Interview  </span>}
                {interview.difficulty_rating === 2 && <span id="logo-desc">  <img id="logo" src={yellowPwrBtn} />  Interview  </span>}
                {interview.difficulty_rating === 3 && <span id="logo-desc">  <img id="logo" src={redPwrBtn} />  Interview  </span>}
              </Link>
            </ul>
        </div>
    );
};

export default InterviewListItem;
