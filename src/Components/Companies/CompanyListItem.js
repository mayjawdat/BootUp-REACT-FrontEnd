import React from 'react';
import { Link } from 'react-router-dom';

const onCompanySelectCheck = (company) => {
  console.log('yes poop', company.name)
}

const CompanyListItem = ({company}) => {
console.log(company)
  return (
    <li className="company-list-item">
      <Link to={`/companies/${company.id}`}> {company.name} - {company.interviews.length} interview{company.interviews.length > 1 && 's'}</Link>
    </li>
  );
};

export default CompanyListItem;



// const CompanyListItem = ({company, onCompanySelect}) => {
//   return (
//     <div>
//       <li onClick={() => onCompanySelect(company)}>{company.name}</li>
//     </div>
//   );
// };
